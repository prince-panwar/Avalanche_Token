
const hre = require("hardhat");

async function main() {
 
  const TOKEN =  await hre.ethers.deployContract("Points")
  await TOKEN.waitForDeployment();
  console.log("Points deployed successfully at ", await TOKEN.target);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
