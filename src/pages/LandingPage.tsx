import React, { useEffect, useState } from "react"
import { useWeb3MobileContext } from "../context/Web3MobileProvider";
import { useQuery } from "../hooks/useQuery";

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


  useEffect(() => {
    if (web3 && !actionPending) {
      switch (action) {
        case "login":
          !signature && signLoginMessage().then(sig => setSignature(sig))
          break;
        case "send":
          if (to && value) {
            console.log("sendTransaction", to, value, gas, data)
            // sendTransaction(to, value, gas, data)
          } else {
            console.error("Invalid request")
          }
          break;
        default:
          console.error("invalid action")
          break;
      }
    }
  }, [action, actionPending, data, gas, sendTransaction, signLoginMessage, signature, to, value, web3])

  return <div>
    <p>
      Web3 set: {`${web3 !== undefined}`}
    </p>
    <p>
      Action Pending: {actionPending}
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
  </div>
}

export default LandingPage