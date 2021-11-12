import React, { useCallback, useEffect, useState } from "react"
import { CenteredButton } from "../components/CenteredButton";
import { useWeb3MobileContext } from "../context/Web3MobileProvider";
import { useQuery } from "../hooks/useQuery";
import { isAddress } from "../utils/address";

const MAX_ATTEMPTS = 3

const LandingPage = () => {
  let query = useQuery();
  const { actionPending, setOnboard, signLoginMessage, sendTransaction, web3 } = useWeb3MobileContext()

  const [networkId, setNetworkId] = useState<string | undefined>()
  const [action, setAction] = useState<string | undefined>()
  const [to, setTo] = useState<string | undefined>()
  const [value, setValue] = useState<string | undefined>()
  const [data, setData] = useState<string | undefined>()
  const [gas, setGas] = useState<string | undefined>()

  const [signature, setSignature] = useState<string | undefined>()
  const [txHash, setTxHash] = useState<string | undefined>()

  const [attempt, setAttempt] = useState(0)

  // Collecting params
  useEffect(() => {
    const _networkId = query.get("networkId")
    setNetworkId(_networkId ? _networkId : undefined)

    const _action = query.get("action")
    setAction(_action ? _action : undefined)
    
    const _to = query.get("to")
    setTo(_to ? _to : undefined)

    const _value = query.get("value")
    setValue(_value ? _value : undefined)

    const _data = query.get("data")
    setData(_data ? _data : undefined)

    const _gas = query.get("gas")
    setGas(_gas ? _gas : undefined)
  }, [query])

  // Setting onboard
  useEffect(() => {
    if (networkId && !web3) {
      setOnboard(networkId)
    } else if(!networkId && web3) {
      setOnboard()
    }
  }, [networkId, setOnboard, web3])

  const manualTrigger = useCallback(() => {
    if (web3 && !actionPending && attempt <= MAX_ATTEMPTS) {
      switch (action) {
        case "login":
          if (signature === undefined) {
            setSignature("")
            setAttempt(attempt + 1)
            signLoginMessage()
              .then(sig => setSignature(sig))
              .catch(() => {
                setSignature(undefined)
              })
          } else {
            console.log("Signature provided")
          }
          break;
        case "send":
          if (to && isAddress(to) && value) {
            if (txHash === undefined) {
              setTxHash("")
              setAttempt(attempt + 1)
              sendTransaction(to, value, gas, data) 
                .then(txHash => setTxHash(txHash))
                .catch(() => {
                  setTxHash(undefined)
                })
            } else {
              console.log("Tx submitted")
            }
          } else {
            console.error("Invalid request")
          }
          break;
        default:
          console.error("invalid action")
          break;
      }
    }
  }, [action, actionPending, attempt, data, gas, sendTransaction, signLoginMessage, signature, to, txHash, value, web3])

  useEffect(() => {
    if (web3 && !actionPending) {
      manualTrigger()
    }
  }, [actionPending, manualTrigger, web3])


  return <div>
    <p>
      Web3 set: {`${web3 !== undefined}`}
    </p>
    <p>
      Action Pending: {`${actionPending}`}
    </p>
    <p>
      Network Id: {networkId}
    </p>
    <p>
      Action: {action}
    </p>
    <p>
      To: {to}
    </p>
    <p>
      Value: {value}
    </p>
    <p>
      Gas: {gas}
    </p>
    <p>
      Data: {data}
    </p>
    {
      signature && signature !== "" && <a href={`unitydl://unity/${signature}`}>
        <CenteredButton>
          {action}
        </CenteredButton>
      </a>
    }
    {
      txHash && txHash !== "" && <a href={`unitydl://unity/${txHash}`}>
        <CenteredButton>
          {action}
        </CenteredButton>
      </a>
    }
   
  </div>
}

export default LandingPage