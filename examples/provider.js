const { ethers } = require("ethers");
const { parseEther } = require("ethers/lib/utils");

// 네트워크 연결
const INFURA_ID = "06d0055e182144e687e8b9c62acb44c3";

const provider = new ethers.providers.JsonRpcProvider(
  `https://sepolia.infura.io/v3/${INFURA_ID}`
);

const main = async () => {
  // 블록 번호 조회
  const blockNum = await provider.getBlockNumber();
  console.log("blockNum: ", blockNum);

  // 최근 블록 조회
  const currentBlock = await provider.getBlock(0);
  console.log("currentBlock: ", currentBlock);

  // 트랜잭션 조회
  // Transaction Hash가 인자에 들어간다.
  const transaction = await provider.getTransaction(
    "0xadbd75b11c3ae5ed6503a83868f764725a127bfe9e5d9e615cf618276ca09963"
  );
  console.log("transaction: ", transaction);

  // 지갑 조회
  // 지갑 주소가 인자에 들어간다.
  const balance = await provider.getBalance(
    "0x528B15DF3507985965D9ceCF5B76551D5b6c0e0e"
  );
  console.log("balance: ", balance);

  // 수수료 조회
  const fee = await provider.getFeeData();
  console.log("fee: ", fee);

  // 수수료 추정 조회
  const estimateFee = await provider.estimateGas({
    to: "0x3eddF8e51A1aa75404e438196616Ef0659250A35",
    value: parseEther("1.0"),
  });
  console.log("estimateFee: ", estimateFee);
};

main();
