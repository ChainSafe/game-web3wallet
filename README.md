# Game Web3 Wallet

Unity Wallet. Build iOS, Android and Desktop.

Link to this site to

- Sign a message

- Send a transaction

## Installation

`yarn` to install
`yarn start` to begin
`yarn build` to compile

## Verify Login

| Params          | Description           |
| --------------- | --------------------- |
| &action=sign    | action to verify user |
| &message=hello  | message to sign       |

example to sign a message: `http://localhost:1234/?action=sign&message=helloworld`

## Send a Transaction

Create a link with the following params

| Params            | Description                                                      |
| ----------------- | ---------------------------------------------------------------- |
| &action=send      | action to send transaction                                       |
| &chainId=4        | 1 for mainnet, 4 for rinkeby etc                                 |
| &to=0xAcc0nt      | use either account or contract address                           |
| &value=1000       | value in wei to send                                             |
| &data=0x01        | data for contract interaction. leave empty if sending to account |
| &gasLimit=21000   | gas limit. leave empty to for wallet to estimate                 |
| &gasPrice=5000000 | gas Price. leave empty to for wallet to estimate                 |

example to send eth: `http://localhost:1234/?action=send&chainId=4&to=0xdD4c825203f97984e7867F11eeCc813A036089D1&value=100000000000000`

example to interact with contract: `http://localhost:1234/?action=send&chainId=4&to=0x7286Cf0F6E80014ea75Dbc25F545A3be90F4904F&value=0&data=0xb76b97230000000000000000000000000000000000000000000000000000000000000001`
