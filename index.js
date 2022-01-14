import "regenerator-runtime/runtime";
import { ethers } from "ethers";
import { parseUnits, hexlify } from "ethers/lib/utils";

let provider;
let signer;
let urlParams;

document.addEventListener("DOMContentLoaded", loadApp());

function loadApp() {
  // set clipboard to empty
  navigator.clipboard.writeText("");
  // get params
  const queryString = window.location.search;
  urlParams = new URLSearchParams(queryString);
  let networkId = urlParams.get("networkId");
  networkId = networkId ? networkId : "1";

  provider = new ethers.providers.Web3Provider(window.ethereum, "any");

  provider.getNetwork().then((network) => {
    if (network.chainId !== networkId && urlParams.get("action") !== "login") {
      window.ethereum
        .request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: `0x${parseInt(networkId, 10).toString(16)}` }], // chainId must be in hexadecimal numbers
        })
        .then(() => {
          setSigner();
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setSigner();
    }
  });
}

function setSigner() {
  signer = provider.getSigner();
  if (!signer) window.location.reload();
  provider
    .send("eth_requestAccounts", [])
    .then(() => {
      processAction();
    })
    .catch((error) => {
      console.error(error);
    });
}

const processAction = () => {
  const action = urlParams.get("action");
  const to = urlParams.get("to");
  const message = urlParams.get("message");
  const value = urlParams.get("value");
  const data = urlParams.get("data") || "";
  const gasLimit = urlParams.get("gasLimit") || undefined;
  const gasPrice = urlParams.get("gasPrice") || undefined;

  if (action === "sign" && message) {
    signMessage(message);
  }

  if (action === "send" && to && value) {
    sendTransaction(to, value, gasLimit, gasPrice, data);
  }
};

/*
const to = "0xB6B8bB1e16A6F73f7078108538979336B9B7341C"
const value = "12300000000000000"
const gasLimit = "22222"
const gasPrice = "3333333333333"
const data = "0x"
sendTransaction(to, value, gas, data);
*/
async function sendTransaction(to, value, gasLimit, gasPrice, data) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const from = await signer.getAddress();
    const tx = await signer.sendTransaction({
      from,
      to,
      value: parseUnits(value, "wei"),
      gasLimit: gasLimit ? hexlify(Number(gasLimit)) : gasLimit,
      gasPrice: gasPrice ? hexlify(Number(gasPrice)) : gasPrice,
      data: data ? data : "0x",
    });
    console.log({ tx });
    copyToClipboard(tx.hash);
    displayResponse("Transaction Sent. Continue to App");
  } catch (error) {
    copyToClipboard("error");
    displayResponse("Transaction Denied");
  }
}

async function signMessage(message) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const signature = await signer.signMessage(message);
    console.log({ signature });
    copyToClipboard(signature);
    displayResponse("Signature Complete. Continue to App");
  } catch (error) {
    copyToClipboard("error");
    displayResponse("Signature Denied");
  }
}

async function copyToClipboard(text) {
  // focus from metamask back to browser
  window.focus();
  // wait to finish focus
  await new Promise((resolve) => setTimeout(resolve, 500));
  // copy tx hash to clipboard
  await navigator.clipboard.writeText(text);
}

function displayResponse(text) {
  const target = document.getElementById("reponse-text");
  target.innerHTML = text;
  target.className = "active";
}
