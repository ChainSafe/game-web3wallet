import * as React from "react"
import { useCallback, useState } from "react"
import Web3 from "web3"
import Onboard from "bnc-onboard";

type Web3MobileProviderProps = {
  children: React.ReactNode | React.ReactNode[]
}

type IWeb3MobileContext = {
  actionPending: boolean
  setOnboard: (networkId?: string) => Promise<void>
  sendTransaction: (
    to: string,
    value: string,
    gas?: string,
    data?: string
  ) => Promise<string>
  signLoginMessage: () => Promise<string>
  web3: Web3 | undefined
}

const Web3MobileContext = React.createContext<IWeb3MobileContext | undefined>(undefined)

const Web3MobileProvider = ({ children }: Web3MobileProviderProps) => {
  const [web3, setWeb3] = useState<Web3 | undefined>()

  const [initialLogin, setInitialLogin] = useState(true)

  const [actionPending, setActionPending] = useState(false)

  const setOnboard = useCallback(async (
    networkId?: string,
  ) => {
    if (!networkId) {
      setWeb3(undefined)
    }

    // set up onboard.js
    const onboard = Onboard({
      networkId: parseInt(networkId || "1"),
      subscriptions: {
        address: () => {
          if (!initialLogin) {
            window.location.reload();
          }
        },
        wallet: (wallet) => {
          setWeb3(new Web3(wallet.provider))
        },
        network: () => {
          if (!initialLogin) {
            window.location.reload();
          }
        },
      },
      walletSelect: {
        wallets: [{ walletName: "metamask", preferred: true }],
      },
    });

    const walletSelected = await onboard.walletSelect();
    if (!walletSelected) window.location.reload();
    await onboard.walletCheck();
    setInitialLogin(false)
  }, [initialLogin])

  const signLoginMessage = useCallback(async () => {
    if(!web3) return Promise.reject("web3 not set")
    if(actionPending) return Promise.reject("action pending")
    setActionPending(true)
    const from: string = (await web3.eth.getAccounts())[0];
   
    return new Promise<string>((resolve, reject) => {
      const expiration: string = Math.round(Date.now() / 1000 + 300).toString();
      const message: string = `${from}-${expiration}`;
      web3.eth.personal.sign(message, from, "").then(signature => {
        const signedLoginMessge: string = `${signature}-${from}-${expiration}`;
        console.log(signedLoginMessge);
        setActionPending(false)
        resolve(signature)
      }).catch(error => {
        console.log("errr", error.message);
        setActionPending(false)
        reject(error.message)
      })
      
    })
  }, [web3, actionPending])

  /*
  const to = "0xB6B8bB1e16A6F73f7078108538979336B9B7341C"
  const value = "12300000000000000"
  const gas = "21000"
  const data = "0x"
  sendTransaction(to, value, gas, data);
  */
  const sendTransaction = useCallback(async (
    to: string,
    value: string,
    gas?: string,
    data?: string
  ) => {
    if(!web3) return Promise.reject("web3 not set")
    if(actionPending) return Promise.reject("action pending")
    setActionPending(true)
    const from = (await web3.eth.getAccounts())[0];
    return new Promise<string>((resolve, reject) => {
      web3.eth
        .sendTransaction({
          from,
          to,
          value,
          gas: gas || undefined,
          data: data,
        })
        .on("transactionHash", (transactionHash: string) => {
          console.log("txhash", transactionHash);
          setActionPending(false)
          resolve(transactionHash)
        })
        .on("error", (error: any) => {
          console.log("errr", error.message);
          setActionPending(false)
          reject(error)
        });
    })
    
  }, [web3, actionPending])

  return (
    <Web3MobileContext.Provider
      value={{
        actionPending,
        setOnboard,
        sendTransaction,
        signLoginMessage,
        web3
      }}
    >
      {children}
    </Web3MobileContext.Provider>
  )
}

const useWeb3MobileContext = () => {
  const context = React.useContext(Web3MobileContext)
  if (context === undefined) {
    throw new Error("useWeb3MobileContext must be used within a Web3MobileProvider")
  }
  return context
}

export { Web3MobileProvider, useWeb3MobileContext }

