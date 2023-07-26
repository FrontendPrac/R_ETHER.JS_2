const { ethers } = require("ethers");

const INFURA_ID = "06d0055e182144e687e8b9c62acb44c3";
// JsonRPC 통신하기
const provider = new ethers.providers.JsonRpcProvider(
  `https://sepolia.infura.io/v3/${INFURA_ID}`
);

const address = "0x528B15DF3507985965D9ceCF5B76551D5b6c0e0e";

// 잔액 확인하기
const main = async () => {
  const balance = await provider.getBalance(address);
  const tx = await provider.getCode(address);

  console.log(
    `\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`
  );
  console.log(`\nTransection of ${address} --> ${tx} \n`);
};

main();
