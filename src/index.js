import 'regenerator-runtime/runtime'
import { ethers } from "ethers";
import { parseUnits, hexlify } from "ethers/lib/utils";
let initialLogin = true;

const unityPrefix = "unity://unity/";

let provider;
let signer;

let urlParams;

let freshLoad  = false

const loadApp = () => {
  // get params
  const queryString = window.location.search;
  urlParams = new URLSearchParams(queryString);
  let networkId = urlParams.get("networkId");
  networkId = networkId ? networkId : "1";

  if (!freshLoad) {
    provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    freshLoad = true
    // provider.on("network", (newNetwork, oldNetwork) => {
    //   // When a Provider makes its initial connection, it emits a "network"
    //   // event with a null oldNetwork along with the newNetwork. So, if the
    //   // oldNetwork exists, it represents a changing network
    //   console.log(newNetwork, oldNetwork)
    //   if (oldNetwork) {
    //     // loadApp()
    //   }
    // });
  }
  if (provider.networkId !== networkId) {
    window.ethereum
      .request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${parseInt(networkId, 10).toString(16)}` }] // chainId must be in hexadecimal numbers
      })
      .then(() => {
        setSigner()
      })
      .catch((error) => {
        console.error(error);
        // window.location.reload();
      });
  } else {
    setSigner()
  }
};

const setSigner = () => {
  signer = provider.getSigner();
  if (!signer) window.location.reload();
  initialLogin = false;
  provider
    .send("eth_requestAccounts", [])
    .then(() => {
      processAction()
    })
    .catch((error) => {
      console.error(error);
    });
}

const processAction = () => {
  const action = urlParams.get("action");
  if (action === "login") {
    signLoginMessage();
  }

  const to = urlParams.get("to");
  const value = urlParams.get("value");
  const data = urlParams.get("data") || "";
  // for non EIP-1559 transactions
  const gasLimit = urlParams.get("gasLimit") || undefined;
  const gasPrice = urlParams.get("gasLimit") || undefined;

  if (action === "send" && to && value) {
    sendTransaction(to, value, gasLimit, gasPrice, data);
  }
}


document.addEventListener("DOMContentLoaded", loadApp());

/*
const to = "0xB6B8bB1e16A6F73f7078108538979336B9B7341C"
const value = "12300000000000000"
const gasLimit = "22222"
const gasPrice = "3333333333333"
const data = "0x"
sendTransaction(to, value, gas, data);
*/
async function sendTransaction(to, value, gasLimit, gasPrice, data) {
  const from = await signer.getAddress();
  signer
    .sendTransaction({
      from,
      to,
      value: parseUnits(value, "wei"),
      gasLimit: gasLimit ? hexlify(Number(gasLimit)) : gasLimit,
      gasPrice: gasPrice ? hexlify(Number(gasPrice)) : gasPrice,
      data: data ? data : "0x"
    })
    .then((transactionResponse) => {
      console.log("txhash", transactionResponse.hash);
      setButton(transactionResponse.hash);
    })
    .catch((error) => {
      console.log("errr", error.message);
    });
  // .on("transactionHash", (transactionHash) => {
  //   console.log("txhash", transactionHash);
  //   setButton(transactionHash);
  // })
  // .on("error", (error) => {
  //   console.log("errr", error.message);
  // });
}

async function signLoginMessage() {
  const from = await signer.getAddress();
  const expiration = Math.round(Date.now() / 1000 + 300).toString();
  const message = `${from}-${expiration}`;
  const signature = await signer.signMessage(message);
  const signedLoginMessage = `${signature}-${from}-${expiration}`;
  console.log(signedLoginMessage);
  setButton(signedLoginMessage);
}

const setButton = (href) => {
  const target = document.getElementById("continue-button");
  if (target) {
    target.setAttribute("href", `${unityPrefix}${href}`);
    target.className = "active";
  }
};
