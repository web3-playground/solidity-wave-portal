import { ethers } from 'hardhat';

describe('Greeter', () => {
  it("Should return the new greeting once it's changed", async () => {
    const Greeter = await ethers.getContractFactory('Greeter');
    const greeter = await Greeter.deploy('Hello, world!');
    await greeter.deployed();

    expect(await greeter.greet()).toStrictEqual('Hello, world!');

    const setGreetingTx = await greeter.setGreeting('Hola, mundo!');

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).toStrictEqual('Hola, mundo!');
  });
});
