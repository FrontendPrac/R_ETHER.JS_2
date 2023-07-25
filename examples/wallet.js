const { Wallet, utils, ethers } = require("ethers");

// 네트워크 연결
const INFURA_ID = "06d0055e182144e687e8b9c62acb44c3";

const provider = new ethers.providers.JsonRpcProvider(
  `https://sepolia.infura.io/v3/${INFURA_ID}`
);

// 지갑 생성
const signer = Wallet.createRandom();

const main = async () => {
  console.log("signer: ", signer);
  // 개인 키
  console.log("signer._signingKey(): ", signer._signingKey());
  // 니모닉
  console.log("signer._mnemonic(): ", signer._mnemonic());

  // 개인 키 복구
  const privateKey = signer._signingKey().privateKey;
  const restoreKeySigner = new Wallet(privateKey);
  console.log("restoreKeySigner: ", restoreKeySigner);

  // 니모닉  복구
  const mnemonic = signer._mnemonic().phrase;
  const restoreMnemonicSigner = Wallet.fromMnemonic(mnemonic);
  console.log("restoreMnemonicSigner: ", restoreMnemonicSigner);

  // 트랙잭션 서명
  const signedTx = await signer.signTransaction({
    to: "0x528B15DF3507985965D9ceCF5B76551D5b6c0e0e",
    from: signer.address,
    value: utils.parseEther("0.1"),
  });
  console.log("signedTx: ", signedTx);

  // 메시지 서명
  const signedMs = await signer.signMessage("Hello World");
  console.log("signedMs: ", signedMs);

  // 지갑 정보
  const wallet = signer.connect(provider);
  console.log("wallet: ", wallet);
};

main();
