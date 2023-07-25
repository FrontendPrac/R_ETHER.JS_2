const { ethers } = require("ethers");

const INFURA_ID = "06d0055e182144e687e8b9c62acb44c3";
const provider = new ethers.providers.JsonRpcProvider(
  `https://sepolia.infura.io/v3/${INFURA_ID}`
);

const account1 = "0x528B15DF3507985965D9ceCF5B76551D5b6c0e0e"; // sender address
const account2 = "0x3eddF8e51A1aa75404e438196616Ef0659250A35"; // recipient address (모르는 사람)

const privateKey = ""; // sender privateKey
const wallet = new ethers.Wallet(privateKey, provider);

const ERC20_ABI = [
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount) returns (bool)",
];

// SepoliaETH Address
const address = "0xe4c3363CE9BBBdcE21d943F4C27a967cdF6E1357";
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const balance = await contract.balanceOf(account1);

  console.log(`\nReading from ${address}\n`);
  console.log(`Balance of sender: ${balance}\n`);

  // const contractWithWallet = contract.connect(wallet);

  // const tx = await contractWithWallet.transfer(account2, balance);
  // await tx.wait();

  // console.log("tx: ", tx);

  const balanceOfSender = await contract.balanceOf(account1);
  const balanceOfReciever = await contract.balanceOf(account2);

  console.log(`\nBalance of sender: ${balanceOfSender}`);
  console.log(`Balance of reciever: ${balanceOfReciever}\n`);
};

main();
