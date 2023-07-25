require("dotenv").config();
const { ethers } = require("ethers");

const INFURA_ID = "06d0055e182144e687e8b9c62acb44c3";
const provider = new ethers.providers.JsonRpcProvider(
  `https://sepolia.infura.io/v3/${INFURA_ID}`
);

const account1 = "0x528B15DF3507985965D9ceCF5B76551D5b6c0e0e"; // sender address
const account2 = "0x3eddF8e51A1aa75404e438196616Ef0659250A35"; // recipient address (모르는 사람)

const privateKey = "";
const wallet = new ethers.Wallet(privateKey, provider);

const main = async () => {
  // 이더리움 보내기 이전에 잔액
  const senderBalanceBefore = await provider.getBalance(account1);
  const recieverBalanceBefore = await provider.getBalance(account2);
  console.log("senderBalanceBefore: ", senderBalanceBefore);
  console.log(
    "recieverBalanceBefore: ",
    ethers.utils.formatEther(recieverBalanceBefore._hex)
  );

  // 이더리움 보내기
  const tx = await wallet.sendTransaction({
    to: account2,
    value: ethers.utils.parseEther("0.0000001"),
  });

  await tx.wait();
  //   console.log("tx: ", tx);

  // 이더리움 보낸 후 잔액
  const senderBalanceAfter = await provider.getBalance(account1);
  const recieverBalanceAfter = await provider.getBalance(account2);
  console.log("senderBalanceAfter: ", senderBalanceAfter);
  console.log(
    "recieverBalanceAfter: ",
    ethers.utils.formatEther(recieverBalanceAfter._hex)
  );
};

main();

// const { ethers } = require("ethers");

// const INFURA_ID = "";
// const provider = new ethers.providers.JsonRpcProvider(
//   `https://kovan.infura.io/v3/${INFURA_ID}`
// );

// const account1 = ""; // Your account address 1
// const account2 = ""; // Your account address 2

// const privateKey1 = ""; // Private key of account 1
// const wallet = new ethers.Wallet(privateKey1, provider);

// const main = async () => {
//   const senderBalanceBefore = await provider.getBalance(account1);
//   const recieverBalanceBefore = await provider.getBalance(account2);

//   console.log(
//     `\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`
//   );
//   console.log(
//     `reciever balance before: ${ethers.utils.formatEther(
//       recieverBalanceBefore
//     )}\n`
//   );

//   const tx = await wallet.sendTransaction({
//     to: account2,
//     value: ethers.utils.parseEther("0.025"),
//   });

//   await tx.wait();
//   console.log(tx);

//   const senderBalanceAfter = await provider.getBalance(account1);
//   const recieverBalanceAfter = await provider.getBalance(account2);

//   console.log(
//     `\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`
//   );
//   console.log(
//     `reciever balance after: ${ethers.utils.formatEther(
//       recieverBalanceAfter
//     )}\n`
//   );
// };

// main();
