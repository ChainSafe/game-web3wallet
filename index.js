import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'
import { configureChains, createConfig, getAccount, getNetwork, signMessage, sendTransaction, switchNetwork } from '@wagmi/core'
import { arbitrum, mainnet, polygon } from '@wagmi/core/chains'

const chains = [arbitrum, mainnet, polygon]
const projectId = '8cb9d988c38d5dafd5fbe1f639fd6ff7'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)
const web3modal = new Web3Modal({ projectId }, ethereumClient)

var _utils = require("ethers/lib/utils");

document.addEventListener("DOMContentLoaded", loadApp());

async function loadApp() {
    if(getAccount().isConnected){
        processAction();
    }
    else{
        await web3modal.openModal();
        //wait for connection
        web3modal.subscribeModal(newState => processAction())
    }
}

async function processAction() {
  const urlParams = new URLSearchParams(window.location.search);
  const action = urlParams.get("action");
  const message = urlParams.get("message");
  const chainId = urlParams.get("chainId") || 1;
  const to = urlParams.get("to");
  const value = urlParams.get("value");
  const data = urlParams.get("data") || "";
  const gasLimit = urlParams.get("gasLimit") || undefined;
  const gasPrice = urlParams.get("gasPrice") || undefined;

  if (action === "sign" && message) {
    return signWagmiMessage(message);
  }

  if (action === "send" && to && value) {
    return sendWagmiTransaction(chainId, to, value, gasLimit, gasPrice, data);
  }

  if(action === "auth" && message) {
    let myAddress = getAccount();
    //get the signing message using the message
    let response = await fetch(message + '/functions/requestMessage?address=' + myAddress + '&chain=001',
        {
            method:'POST'
        }
    );
    let jsonData = await response.json();
    console.log(jsonData.result.message);
    return authSignMessage(jsonData.result.message);
  }

  displayResponse("Invalid URL");
}

async function sendWagmiTransaction(chainId, to, value, gasLimit, gasPrice, data) {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const network = await getNetwork();

    if (network.chainId !== chainId) {
      await switchNetwork({
          chainId: `0x${parseInt(chainId, 10).toString(16)}`
      });
    }

    const from = getAccount();
    const tx = await sendTransaction({
      from,
      to,
      value: (0, _utils.parseUnits)(value, "wei"),
      gasLimit: gasLimit ? (0, _utils.hexlify)(Number(gasLimit)) : gasLimit,
      gasPrice: gasPrice ? (0, _utils.hexlify)(Number(gasPrice)) : gasPrice,
      data: data ? data : "0x"
    });
    console.log({
      tx
    });
    displayResponse("Transaction sent.<br><br>Copy to clipboard then continue to App", tx.hash);
  } catch (error) {
    copyToClipboard("error");
    displayResponse("Transaction Denied");
  }
}

async function authSignMessage(message) {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const signature = await signMessage(message);
      console.log({
        signature
      });
      const response = {signature, message};
      displayResponse("Signature complete.<br><br>Copy to clipboard then continue to App", JSON.stringify(response));
    } catch (error) {
      copyToClipboard("error");
      displayResponse("Signature Denied");
    }
  }

async function signWagmiMessage(message) {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const signature = await signMessage(message);
    console.log({
      signature
    });
    displayResponse("Signature complete.<br><br>Copy to clipboard then continue to App", signature);
  } catch (error) {
    console.log("error: " + JSON.stringify(error))
    copyToClipboard("error");
    displayResponse("Signature Denied");
  }
}

async function copyToClipboard(response) {
  try {
    // focus from metamask back to browser
    window.focus(); // wait to finish focus

    await new Promise(resolve => setTimeout(resolve, 500)); // copy tx hash to clipboard

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

function displayResponse(text, response) {
  // display error or response
  const responseText = document.getElementById("response-text");
  responseText.innerHTML = text;
  responseText.className = "active";

  if (response) {
    // display button to copy tx.hash or signature
    const responseButton = document.getElementById("response-button");
    responseButton.className = "active";

    responseButton.onclick = () => copyToClipboard(response);
  }
}