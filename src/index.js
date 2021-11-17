import { ethers } from "ethers";
import { parseUnits } from "ethers/lib/utils";
let initialLogin = true;

const unityPrefix = "unity://unity/";

let provider;
let signer;

const loadApp = () => {
  // get params
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const action = urlParams.get("action");
  let networkId = urlParams.get("networkId");
  networkId = networkId ? networkId : "1";
  const to = urlParams.get("to");
  const value = urlParams.get("value");
  const data = urlParams.get("data") || "";
  const gas = urlParams.get("gas") || undefined;

  provider = new ethers.providers.Web3Provider(window.ethereum);
  if (provider.networkId !== networkId) {
    window.ethereum
      .request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${parseInt(networkId, 10).toString(16)}` }] // chainId must be in hexadecimal numbers
      })
      .then(() => {
        // TODO: switch network crashes after swap
        signer = provider.getSigner();
        if (!signer) window.location.reload();
        initialLogin = false;
        provider
          .send("eth_requestAccounts", [])
          .then(() => {
            if (action === "login") {
              signLoginMessage();
            }

            if (action === "send" && to && value) {
              sendTransaction(to, value, gas, data);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
        window.location.reload();
      });
  } else {
    signer = provider.getSigner();
    if (!signer) window.location.reload();
    initialLogin = false;
    provider
      .send("eth_requestAccounts", [])
      .then(() => {
        if (action === "login") {
          // signLoginMessage();
        }

        if (action === "send" && to && value) {
          sendTransaction(to, value, gas, data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
};
document.addEventListener("DOMContentLoaded", loadApp());

/*
const to = "0xB6B8bB1e16A6F73f7078108538979336B9B7341C"
const value = "12300000000000000"
const gas = "21000"
const data = "0x"
sendTransaction(to, value, gas, data);
*/
async function sendTransaction(to, value, gas, data) {
  const from = await signer.getAddress();
  signer
    .sendTransaction({
      from,
      to,
      value: parseUnits(value, 18),
      gasLimit: parseUnits(gas, 0) || undefined,
      data: data ? data : "0x"
    })
    .then((transactionResponse) => {
      console.log("txhash", transactionResponse.hash);
      setButton(transactionResponse.hash);
    })
    .catch((error) => {
      console.log("errr", error.message);
    });
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
