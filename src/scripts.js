import Onboard from "bnc-onboard"
import Web3 from "web3"
let web3

let initialLogin = true;

// InnerHtml = action 

const unityPrefix = "unity://unity/"
console.log("asdasd")
window.onload = async () => {
  // get params
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const action = urlParams.get("action");
  const networkId = urlParams.get("networkId");
  const to = urlParams.get("to");
  const value = urlParams.get("value");
  const data = urlParams.get("data") || "";
  const gas = urlParams.get("gas") || undefined;

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
        web3 = new Web3(wallet.provider);
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
  initialLogin = false;

  if (action === "login") {
    signLoginMessage();
  }

  if (action === "send" && to && value) {
    sendTransaction(to, value, gas, data)
  }
};

/*
const to = "0xB6B8bB1e16A6F73f7078108538979336B9B7341C"
const value = "12300000000000000"
const gas = "21000"
const data = "0x"
sendTransaction(to, value, gas, data);
*/
async function sendTransaction(
  to,
  value,
  gas,
  data
) {

  const from = (await web3.eth.getAccounts())[0];
  web3.eth
    .sendTransaction({
      from,
      to,
      value,
      gas: gas || undefined,
      data: data,
    })
    .on("transactionHash", (transactionHash) => {
      console.log("txhash", transactionHash);
    setButton(transactionHash)

    })
    .on("error", (error) => {
      console.log("errr", error.message);
    });
}

async function signLoginMessage() {
  const from = (await web3.eth.getAccounts())[0];
  const expiration = Math.round(Date.now() / 1000 + 300).toString();
  const message = `${from}-${expiration}`;
  const signature = await web3.eth.personal.sign(message, from, "");
  const signedLoginMessage = `${signature}-${from}-${expiration}`;
  console.log(signedLoginMessage);
  setButton(signedLoginMessage)
}


const setButton = (href) => {
  const target = document.getElementById("continue-button")
  if (target) {
    target.setAttribute("href", `${unityPrefix}${href}`)
    target.className = "active"
  }
} 