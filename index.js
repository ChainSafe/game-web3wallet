import "regenerator-runtime/runtime";
import { ethers } from "ethers";
import { parseUnits, hexlify } from "ethers/lib/utils";

let provider;
let signer;
let copyButtonNeeded;

document.addEventListener("DOMContentLoaded", loadApp());

async function loadApp() {
  provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  signer = provider.getSigner();
  if (!signer) window.location.reload();
  await provider.send("eth_requestAccounts", []);
  copyButtonNeeded = (await getClipboardPermission()) === undefined ? true : false;
  processAction();
}

function processAction() {
  const urlParams = new URLSearchParams(window.location.search);
  const action = urlParams.get("action");
  const chainId = urlParams.get("chainId") || 1;
  const to = urlParams.get("to");
  const value = urlParams.get("value");
  const data = urlParams.get("data") || "";
  const gasLimit = urlParams.get("gasLimit") || undefined;
  const gasPrice = urlParams.get("gasPrice") || undefined;

  // Signatures
  const message = urlParams.get("message");
  // EIP712
  const domain = urlParams.get("domain") || undefined;
  const types = urlParams.get("types") || undefined;

  if (action === "sign" && message) {
    return signMessage(message);
  }

  if (action === "sign-typed-data" && domain && types && message) {
    return signTypedMessage(types, domain, message);
  }

  if (action === "send" && to && value) {
    return sendTransaction(chainId, to, value, gasLimit, gasPrice, data);
  }

  displayResponse("Invalid URL");
}

async function sendTransaction(chainId, to, value, gasLimit, gasPrice, data) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const network = await provider.getNetwork();
    if (network.chainId !== chainId) {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${parseInt(chainId, 10).toString(16)}` }], // chainId must be in hexadecimal numbers
      });
    }
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
    displayResponse(copyButtonNeeded ? "Transaction sent.<br><br>Copy to clipboard then continue to App": "Transaction sent.", tx.hash);
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
    displayResponse(copyButtonNeeded ? "Signature complete.<br><br>Copy to clipboard then continue to App": "Signature complete.", signature);
  } catch (error) {
    copyToClipboard("error");
    displayResponse("Signature Denied");
  }
}

async function signTypedMessage(types, domain, message) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const signature = await signer._signTypedData(JSON.parse(domain), JSON.parse(types), JSON.parse(message))
    console.log({ signature });
    displayResponse(copyButtonNeeded ? "Signature complete.<br><br>Copy to clipboard then continue to App" : "Signature complete.", signature);
  } catch (error) {
    copyToClipboard("error");
    displayResponse("Signature Denied");
  }
}

async function copyToClipboard(response) {
  try {
    // focus from metamask back to browser
    window.focus();
    // wait to finish focus
    await new Promise((resolve) => setTimeout(resolve, 500));
    // copy tx hash to clipboard
    await navigator.clipboard.writeText(response);
    document.getElementById("response-button").innerHTML = "Copied";
  } catch {
    // for metamask mobile android
    const input = document.createElement("input");
    input.type = "text";
    input.value = response;
    document.body.appendChild(input);
    input.select();
    document.execCommand("Copy");
    input.style = "visibility: hidden";
    document.getElementById("response-button").innerHTML = "Copied";
  }
}

async function getClipboardPermission() {
  try {
    const permissionState = await navigator.permissions.query({name: "clipboard-write"});
    if (permissionState) {
      // document.execCommand(‘cut’/‘copy’) is allowed from outside a user-generated event handler as well.
      return permissionState.state;
    }
  } catch {
    // In case of Firefox
  }
  return undefined;
}

async function writeToClipboard(response) {
  if (copyButtonNeeded) {
    // display button to copy tx.hash or signature
    const responseButton = document.getElementById("response-button");
    responseButton.className = "active";
    responseButton.onclick = () => copyToClipboard(response);
  } else {
    copyToClipboard(response);
  }
}

function displayResponse(text, response) {
  // display error or response
  const responseText = document.getElementById("response-text");
  responseText.innerHTML = text;
  responseText.className = "active";

  if (response) {
    writeToClipboard(response);
  }
}
