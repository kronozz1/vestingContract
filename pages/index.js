import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React from 'react';
import { Swapabi , SwapAddress , Token1abi , Token2abi ,Token1Address , Token2Address} from '../contants';
import Web3Modal from 'web3modal';
import {providers , Contract , BigNumber , utils , ethers} from 'ethers';
export default function Home() {
    const zero = BigNumber.from(0);
  const [walletConnected , setwalletConnected] = React.useState(false)
  const [balanceOfAmanDevTokens ,setbalanceOfAmanDevTokens] = React.useState(zero);
  const [userAddress, setuserAddress]=React.useState();
  const [token1balance , settoken1balance]=React.useState("");
  const [ claimedDate , setclaimedDate] = React.useState();
  const [numclaim , setnumclaim]= React.useState();
  const [numclaim0 , setnumclaim0] = React.useState();
      const [TokenMinted , setTokenMinted] = React.useState(zero);
  const [loading , setloading] = React.useState(false);
  const [ input , setinput] = React.useState();
  const [input2 , setinput2] = React.useState();
  const [bnbBalances , setbnbBalance] = React.useState();
const [ userallowance , setuserallowance] = React.useState(false);
  const [ lowBalance , setlowBalance ] = React.useState(false);
  const [allowance, setAllowance] = React.useState('');
  const [ userAmount , setuserAmount] = React.useState();
  const [ Enable , setEnable] = React.useState();

  const [d1 , setd1] = React.useState();
const [d2 , setd2] = React.useState();
const [d3 , setd3] = React.useState();
const [d4 , setd4] = React.useState();
const [d5, setd5] = React.useState();
const [d6 , setd6] = React.useState();
const [d7 , setd7] = React.useState();
const [d8 , setd8] = React.useState();
const [d9 , setd9] = React.useState();
const [d10 , setd10] = React.useState();

  const [aa1 ,setaa1] = React.useState();
  const [aa2 ,setaa2] = React.useState();
  const [aa3 ,setaa3] = React.useState();
  const [aa4 ,setaa4] = React.useState();
  const [aa5 ,setaa5] = React.useState();
  const [aa6 ,setaa6] = React.useState();
  const [aa7 ,setaa7] = React.useState();
  const [aa8 ,setaa8] = React.useState();
  const [aa9 ,setaa9] = React.useState();
  const [aa10 ,setaa10] = React.useState();


  const [a1 ,seta1] = React.useState();
  const [a2 ,seta2] = React.useState();
  const [a3 ,seta3] = React.useState();
  const [a4 ,seta4] = React.useState();
  const [a5 ,seta5] = React.useState();
  const [a6 ,seta6] = React.useState();
  const [a7 ,seta7] = React.useState();
  const [a8 ,seta8] = React.useState();
  const [a9 ,seta9] = React.useState();
  const [a10 ,seta10] = React.useState();

  const [at1 ,setat1] = React.useState();
  const [at2 ,setat2] = React.useState();
  const [at3 ,setat3] = React.useState();
  const [at4 ,setat4] = React.useState();
  const [at5 ,setat5] = React.useState();
  const [at6 ,setat6] = React.useState();
  const [at7 ,setat7] = React.useState();
  const [at8 ,setat8] = React.useState();
  const [at9 ,setat9] = React.useState();
  const [at10 ,setat10] = React.useState();


  const ModelRef= React.useRef();
  const getSignerOrProvider = async(needSigner = false) =>{
    const provider = await ModelRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    const {chainId} = await web3Provider.getNetwork();
    if(chainId != 80001){
      window.alert("Change Your Network to BNB Network");
      throw new Error("Change Your Network to Mumbai Network");
    }
    if(needSigner ){
      const signer = await web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  }
  const handleChange= async (e) =>{
 setinput(e.target.value);

  }
  console.log(userallowance);
const claimnow = async(e) =>{
  let a = e.target.value;
console.log(a);
  try{

          const provider = await getSignerOrProvider();
    const myContract = new Contract(SwapAddress , Swapabi , provider);
      const signer = await getSignerOrProvider(true);
        const myContract1 = new Contract(SwapAddress , Swapabi , signer);
      const address = await signer.getAddress();
  const tx = await myContract.userLockInfo(address);
      const date = ethers.utils.formatUnits(tx.lastWithdrawTime);
        const formattedValue = (parseFloat(date) * 1000000000000000000).toFixed(0);
let currentDate = new Date();
  let unixTimestamp = Math.floor(currentDate.getTime() / 1000);
  if(formattedValue <= unixTimestamp){
  const tx1 = await myContract1.withdrawTokens();
   await tx1.wait();
    window.location.replace("/");
  }else{
    alert("You are not yet eligible for the claim !");
  }
      }catch(err){
                    if (err.message.includes('execution reverted: TokenLock: Not eligible for withdrawal yet')) {
        window.alert('ERC20: Not eligible for withdrawal yet !');
      } 

      }

}
const getClaimStatus = async () =>{
        const provider = await getSignerOrProvider();
    const myContract = new Contract(SwapAddress , Swapabi , provider);
      const signer = await getSignerOrProvider(true);
      const address = await signer.getAddress();
  const tx = await myContract.userClaimedStatus(address,1);
  setat1(tx);
    const tx2 = await myContract.userClaimedStatus(address,2);
  setat2(tx2);
  const tx3 = await myContract.userClaimedStatus(address,3);
  setat3(tx3);
  const tx4 = await myContract.userClaimedStatus(address,4);
  setat4(tx4);
  const tx5 = await myContract.userClaimedStatus(address,5);
  setat5(tx5);
  const tx6 = await myContract.userClaimedStatus(address,6);
  setat6(tx6);
  const tx7 = await myContract.userClaimedStatus(address,7);
  setat7(tx7);
  const tx8 = await myContract.userClaimedStatus(address,8);
  setat8(tx8);
  const tx9 = await myContract.userClaimedStatus(address,9);
  setat9(tx9);
  const tx10 = await myContract.userClaimedStatus(address,10);
  setat10(tx10);
}


const getClaimAmount = async () =>{
        const provider = await getSignerOrProvider();
    const myContract = new Contract(SwapAddress , Swapabi , provider);
      const signer = await getSignerOrProvider(true);
      const address = await signer.getAddress();
  const tx = await myContract.userclaimedAmount(address,1);
  let value = ethers.utils.formatUnits(tx);
  seta1(value);
    const tx2 = await myContract.userclaimedAmount(address,2);
  let value1 = ethers.utils.formatUnits(tx2);
  seta2(value1);
  const tx3 = await myContract.userclaimedAmount(address,3);
  let value2 = ethers.utils.formatUnits(tx3);
  seta3(value2);
  const tx4 = await myContract.userclaimedAmount(address,4);
  let value3 = ethers.utils.formatUnits(tx4);
  seta4(value3);
  const tx5 = await myContract.userclaimedAmount(address,5);
  let value4 = ethers.utils.formatUnits(tx5);
  seta5(value4);
  const tx6 = await myContract.userclaimedAmount(address,6);
  let value5 = ethers.utils.formatUnits(tx6);
  seta6(value5);
  const tx7 = await myContract.userclaimedAmount(address,7);
  let value6 = ethers.utils.formatUnits(tx7);
  seta7(value6);
  const tx8 = await myContract.userclaimedAmount(address,8);
  let value7 = ethers.utils.formatUnits(tx8);
  seta8(value7);
  const tx9 = await myContract.userclaimedAmount(address,9);
  let value8 = ethers.utils.formatUnits(tx9);
  seta9(value8);
  const tx10 = await myContract.userclaimedAmount(address,10);
  let value9 = ethers.utils.formatUnits(tx10);
  seta10(value9);
}
  const getClaimDate = async() =>{
        const provider = await getSignerOrProvider();
    const myContract = new Contract(SwapAddress , Swapabi , provider);
      const signer = await getSignerOrProvider(true);
      const address = await signer.getAddress();
  const tx = await myContract.userclaimedDate(address,1);
              const date = ethers.utils.formatUnits(tx);
      const formattedValue = (parseFloat(date) * 1000000000000000000).toFixed(0);
        if(formattedValue != 0 ){
              const dates1 = new Date(formattedValue * 1000);
    const dateString = dates1.toLocaleString()
    setd1(dateString);
        }
      const tx2 = await myContract.userclaimedDate(address,2);
                  const date2 = ethers.utils.formatUnits(tx2);
      const formattedValue2 = (parseFloat(date2) * 1000000000000000000).toFixed(0);
            if(formattedValue2 != 0 ){
    const dates2 = new Date(formattedValue2 * 1000);
    const dateString2 = dates2.toLocaleString()

    setd2(dateString2) 

            }
    const dates2 = new Date(formattedValue2 * 1000);
    const dateString2 = dates2.toLocaleString()

    setd2(dateString2) 
      const tx3 = await myContract.userclaimedDate(address,3);
                  const date3 = ethers.utils.formatUnits(tx3);
      const formattedValue3 = (parseFloat(date3) * 1000000000000000000).toFixed(0);
                if(formattedValue3 != 0 ){
                      const dates3 = new Date(formattedValue3 * 1000);
    const dateString3 = dates3.toLocaleString()

    setd3(dateString3) 

                }
      const tx4 = await myContract.userclaimedDate(address,4);
                  const date4 = ethers.utils.formatUnits(tx4);
      const formattedValue4 = (parseFloat(date4) * 1000000000000000000).toFixed(0);
                    if(formattedValue4 != 0 ){
                          const dates4 = new Date(formattedValue4 * 1000);
    const dateString4 = dates4.toLocaleString();

    setd4(dateString4);

                    }

      const tx5 = await myContract.userclaimedDate(address,5);
                  const date5 = ethers.utils.formatUnits(tx5);
      const formattedValue5 = (parseFloat(date5) * 1000000000000000000).toFixed(0);
                        if(formattedValue5 != 0 ){
                              const dates5 = new Date(formattedValue5 * 1000);
    const dateString5 = dates5.toLocaleString()

    setd5(dateString5) 

                        }

      const tx6 = await myContract.userclaimedDate(address,6);
                  const date6 = ethers.utils.formatUnits(tx6);
      const formattedValue6 = (parseFloat(date6) * 1000000000000000000).toFixed(0);
                            if(formattedValue6 != 0 ){
                                  const dates6 = new Date(formattedValue6 * 1000);
    const dateString6 = dates6.toLocaleString()

    setd6(dateString6) 

                            }

      const tx7 = await myContract.userclaimedDate(address,7);
                  const date7 = ethers.utils.formatUnits(tx7);
      const formattedValue7 = (parseFloat(date7) * 1000000000000000000).toFixed(0);
                                if(formattedValue7 != 0 ){
                                      const dates7 = new Date(formattedValue7 * 1000);
    const dateString7 = dates7.toLocaleString()

    setd7(dateString7) 

                                }

      const tx8 = await myContract.userclaimedDate(address,8);
                  const date8 = ethers.utils.formatUnits(tx8);
      const formattedValue8 = (parseFloat(date8) * 1000000000000000000).toFixed(0);
                                    if(formattedValue8 != 0 ){
                                          const dates8 = new Date(formattedValue8 * 1000);
    const dateString8 = dates8.toLocaleString()

    setd8(dateString8) 

                                    }

      const tx9 = await myContract.userclaimedDate(address,9);
                  const date9 = ethers.utils.formatUnits(tx9);
      const formattedValue9 = (parseFloat(date9) * 1000000000000000000).toFixed(0);
                                        if(formattedValue9 != 0 ){
                                                  const dates9 = new Date(formattedValue9 * 1000);
    const dateString9 = dates9.toLocaleString()

    setd9(dateString9) 

                                        }

      const tx10 = await myContract.userclaimedDate(address,10);
                  const date10 = ethers.utils.formatUnits(tx10);
      const formattedValue10 = (parseFloat(date10) * 1000000000000000000).toFixed(0);
    if(formattedValue10 != 0 ){
            const dates10 = new Date(formattedValue10 * 1000);
    const dateString10 = dates10.toLocaleString()
    setd10(dateString10) 
    }

  }
  console.log(d4);
  const getBlanceTokenAmanDevToken = async() =>{
    try{
    const provider = await getSignerOrProvider();
    const myContract = new Contract(SwapAddress , Swapabi , provider);
      const signer = await getSignerOrProvider(true);
      const address = await signer.getAddress();
  const tx = await myContract.userLockInfo(address);
      const amo = ethers.utils.formatUnits(tx.lockedAmount)
      const date = ethers.utils.formatUnits(tx.lastWithdrawTime);
      const formattedValue = (parseFloat(date) * 1000000000000000000).toFixed(0);
      const numclaims1 = ethers.utils.formatUnits(tx.periodsWithdrawn);
            const numclaims = (parseFloat(numclaims1) * 1000000000000000000).toFixed(0);


setnumclaim(numclaims);
      setnumclaim0(numclaims + 1);
setuserAmount(amo);
      setclaimedDate(formattedValue);

      setuserAddress(address);

    }catch(err){
      console.error(err);
    }
  }
  console.log(typeof(numclaim));

const renderAmount = async () =>{
    const provider = await getSignerOrProvider();
    const myContract = new Contract(SwapAddress , Swapabi , provider);
      const signer = await getSignerOrProvider(true);
      const address = await signer.getAddress();
        const tx = await myContract.userLockInfo(address);

      const amo = await ethers.utils.formatUnits(tx.lockedAmount)


  let value = amo * 1 / 100;

 await setaa1(value);

  let value1 =amo * 2 / 100 ;

 await setaa2(value1);

  let value2 = amo * 3 / 100;

 await setaa3(value2);

  let value3 = amo * 4 / 100;

 await setaa4(value3);

  let value4 = amo * 5 / 100;

 await setaa5(value4);

  let value5 = amo * 6 / 100;

 await setaa6(value5);

  let value6 = amo * 7 / 100;

 await setaa7(value6);

  let value7 = amo * 8 / 100;

 await setaa8(value7);

  let value8 = amo * 9 / 100;

 await setaa9(value8);

  let value9 = amo * 10 / 100;

 await setaa10(value9);


}




  function renderLinksTenTimes() {
  const links = [];
  for (let i = 0; i <= 10; i++) {
    links.push(<a href="#" key={i}>{i} <br/></a>);
  }
  return <div>{links}</div>;
}
  const approval= async() =>{
    try{
      const provider = await getSignerOrProvider(true);
      const contract = new Contract(Token2Address, Token2abi, provider);
      const amount= ethers.utils.parseEther(input);
      const balance = await contract.approve(SwapAddress ,amount);
      await balance.wait();
      setEnable(true);

    }catch(err){
      console.error(err);
    }
  }
    const BlanceToken1 = async() =>{
    try{
            const signer = await getSignerOrProvider(true);
      const address = await signer.getAddress();
      const provider = await getSignerOrProvider();
      const contract = new Contract(Token2Address, Token2abi, provider);
      const balance = await contract.balanceOf(address);
      settoken1balance(ethers.utils.formatUnits(balance));


    }catch(err){
      console.error(err);
    }
  }
  const swapToken1withToken2 = async(event) =>{
    event.preventDefault();
    try{
  const signer = await getSignerOrProvider(true);
    const myContract = new Contract(SwapAddress , Swapabi , signer);
    const _tokenMinted = await myContract.buyTokens(input);
            await _tokenMinted.wait();
      window.location.replace("/");

      console.log(success);

    }catch(err){
      if (err.message.includes('execution reverted: ERC20: insufficient')) {
        window.alert('ERC20: insufficient allowance , please enter the approved input ');
      } 
      console.error(err);

    }

  }
  const BNBbalance = async() =>{
    try{
            const signer = await getSignerOrProvider(true);
      const address = await signer.getAddress();
    const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/'); // use the appropriate BSC testnet endpoint
const balance = await provider.getBalance(address);
const userbnbBalance = ethers.utils.formatEther(balance);
    setbnbBalance(userbnbBalance);
    }catch(err){
console.error(err);
    }

  }
  console.log(userAddress);
  const connectWallet = async () =>{
    try{
          await getSignerOrProvider();
      setwalletConnected(true);
    }catch(err){
      console.error(err);
    }
  }
console.log(at9);
  const balanceAndAddress = async() =>{
    if(walletConnected){
    await   getBlanceTokenAmanDevToken();
     await BlanceToken1();
await BNBbalance();
  await renderAmount();
      await getClaimStatus();

    }
  }
  React.useEffect(()=>{
    if(!walletConnected){
      ModelRef.current = new Web3Modal({
        networks:"arbitrum-goerli",
        providerOptions:{},
        disabledInjectedProvider:false,
      })
      connectWallet();
    }
renderLinksTenTimes();
    getClaimDate();
    getClaimAmount();
      balanceAndAddress();
  },[walletConnected]);
  return (
    <>
    <Head>
    <title>Vesting Contract Swap</title>
    </Head>
	  <div class="area" >
            <ul class="circles">
                    <li><img src="envo.png"/></li>
                    <li><img src="envo.png"/></li>
                    <li><img src="envo.png"/></li>
                    <li><img src="envo.png"/></li>
                    <li><img src="envo.png"/></li>
                    <li><img src="envo.png"/></li>
                    <li><img src="envo.png"/></li>
                    <li><img src="envo.png"/></li>
                    <li><img src="envo.png"/></li>
                   
            </ul>
			<div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
</div>

    <header class="text-gray-600 body-font ">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <span class=" text-xl">Vesting Contract Swap</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
    </nav>
    <button onClick={connectWallet} class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><img className="h-5 w-5 mr-2" src="favicon.png" />{walletConnected ? "Connected" : "Connect Wallet"}
    </button>
  </div>
</header>
    <section class="   body-font relative middle_box">
  <div class="container mx-auto">
    <div class="flex flex-col w-full mb-8">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white "> Vesting Contract Swap</h1>
    </div>
  <div class="row">
 <div class="box-50">
  <div class="box_white">
  
    <form onSubmit={swapToken1withToken2}>
                                        <div class="">Wallet Address :<span>{userAddress}</span></div>
	            <div class="value_top">
                                <div class="">Token Balance: <span>{token1balance}</span> ABC</div>
                   </div>
      <div class="">
        <div class="p-2 w_1_box mb-3">
            <label for="name" class=" text-gray-600"><b>Token1</b></label>
			 <div class="input_box">
              <input type="number" onChange={handleChange} id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out" required/>
			<div class="input_right">
			<img className="h-7 ml-2" src="envo.png" />
			<img className="h-7 ml-2" src="bnb.png" />
            </div>
			</div>

        </div>
    { !Enable ? 
            <div class="p-2 w-full">
              <button type="button" onClick={approval} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Approve</button>
        </div>

      : 

        <div class="p-2 w-full">
          <button type="submit"   class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"> Swap To Stake</button>
        </div>
    }
        
      </div>
    </form>
  </div>
  </div>
  
  <div class="box-50">

					
  </div>
  </div>
  </div>
</section>

<footer class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">S.NO</h2>
        <nav class="list-none mb-10">
          <li>
    {renderLinksTenTimes()}
          </li>
        </nav>
      </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Amount</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">-------</a> 
          </li>


              <li>
    { a1 > 0 ?
            <a class="text-gray-600 hover:text-gray-800">{a1}</a> 
      :
            <a class="text-gray-600 hover:text-gray-800">{aa1}</a> 

    }
          </li>
                  <li>
    { a2 > 0 ?
            <a class="text-gray-600 hover:text-gray-800">{a2}</a> 
      :
            <a class="text-gray-600 hover:text-gray-800">{aa2}</a> 

    }
          </li>
              <li>
    { a3 > 0 ?
            <a class="text-gray-600 hover:text-gray-800">{a3}</a> 
      :
            <a class="text-gray-600 hover:text-gray-800">{aa3}</a> 

    }
          </li>
              <li>
    { a4 > 0 ?
            <a class="text-gray-600 hover:text-gray-800">{a4}</a> 
      :
            <a class="text-gray-600 hover:text-gray-800">{aa4}</a> 

    }
          </li>
              <li>
    { a5 > 0 ?
            <a class="text-gray-600 hover:text-gray-800">{a5}</a> 
      :
            <a class="text-gray-600 hover:text-gray-800">{aa5}</a> 

    }
          </li>
              <li>
    { a6 > 0 ?
            <a class="text-gray-600 hover:text-gray-800">{a6}</a> 
      :
            <a class="text-gray-600 hover:text-gray-800">{aa6}</a> 

    }
          </li>
              <li>
    { a7 > 0 ?
            <a class="text-gray-600 hover:text-gray-800">{a7}</a> 
      :
            <a class="text-gray-600 hover:text-gray-800">{aa7}</a> 

    }
          </li>
              <li>
    { a8 > 0 ?
            <a class="text-gray-600 hover:text-gray-800">{a8}</a> 
      :
            <a class="text-gray-600 hover:text-gray-800">{aa8}</a> 

    }
          </li>
              <li>
    { a9 > 0 ?
            <a class="text-gray-600 hover:text-gray-800">{a9}</a> 
      :
            <a class="text-gray-600 hover:text-gray-800">{aa9}</a> 

    }
          </li>
              <li>
    { a10 > 0 ?
            <a class="text-gray-600 hover:text-gray-800">{a10}</a> 
      :
            <a class="text-gray-600 hover:text-gray-800">{aa10}</a> 

    }
          </li>


        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Claim Date</h2>
        <nav class="list-none mb-10">
          <li>
    
            <a class="text-gray-600 hover:text-gray-800">-------</a> 

          </li>
          <li>
    { d1 ?
            <a class="text-gray-600 hover:text-gray-800">{d1}</a> 
      :
            <a class="text-gray-600 hover:text-gray-800">-------</a> 

    }
          </li>
          <li>
    { d2 ?
            <a class="text-gray-600 hover:text-gray-800">{d2}</a> 
      :
            <a class="text-gray-600 hover:text-gray-800">-------</a> 

    }
          </li>
          <li>
    { d3 ?
            <a class="text-gray-600 hover:text-gray-800">{d3}</a> 
      :
            <a class="text-gray-600 hover:text-gray-800">-------</a> 

    }
          </li>
          <li>
    { d4 ?
            <a class="text-gray-600 hover:text-gray-800">{d4}</a> 
      :
            <a class="text-gray-600 hover:text-gray-800">-------</a> 

    }
          </li>
          <li>
    { d5 ?
            <a class="text-gray-600 hover:text-gray-800">{d5}</a> 
      :
            <a class="text-gray-600 hover:text-gray-800">-------</a> 

    }
          </li>
          <li>
    { d6 ?
            <a class="text-gray-600 hover:text-gray-800">{d6}</a> 
      :
            <a class="text-gray-600 hover:text-gray-800">-------</a> 

    }
          </li>
          <li>
    { d7 ?
            <a class="text-gray-600 hover:text-gray-800">{d7}</a> 
      :
            <a class="text-gray-600 hover:text-gray-800">-------</a> 

    }
          </li>
          <li>
    { d8 ?
            <a class="text-gray-600 hover:text-gray-800">{d8}</a> 
      :
            <a class="text-gray-600 hover:text-gray-800">-------</a> 

    }
          </li>
    { d9 ?
            <a class="text-gray-600 hover:text-gray-800">{d9}</a> 
      :
            <a class="text-gray-600 hover:text-gray-800">-------</a> 

    }
              <li>
    { d10 ?
            <a class="text-gray-600 hover:text-gray-800">{d10}</a> 
      :
            <a class="text-gray-600 hover:text-gray-800">-------</a> 

    }


          </li>

        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Action</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">-------</a>
          </li>
    <li>
        { at1 ?
          <button   class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Claimed
</button>

      :
<button onClick={claimnow} value="1" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
 Claim 
</button>

    }
              </li>
        <li>

            { at2 ?
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Claimed
</button>

      :
<button onClick={claimnow} value="2" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
 Claim 
</button>


    }
                  </li>

        <li>

        { at3 ?
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Claimed
</button>

      :
<button onClick={claimnow} value="3" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
 Claim 
</button>


    }
                      </li>

        <li>

        { at4 ?
                      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Claimed
</button>


      :
<button onClick={claimnow} value="4" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
 Claim 
</button>


    }
                      </li>

        <li>

        { at5 ?
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Claimed
</button>

      :

<button onClick={claimnow} value="5" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
 Claim 
</button>

    }
                      </li>

        <li>

        { at6 ?
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Claimed
</button>

      :
<button onClick={claimnow} value="6" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
 Claim 
</button>


    }
                      </li>

        <li>

        { at7 ?
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Claimed
</button>

      :
<button onClick={claimnow} value="7" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
 Claim 
</button>


    }
                      </li>

        <li>

        { at8 ?
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Claimed
</button>

      :
<button onClick={claimnow} value="8" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
 Claim 
</button>


    }
                      </li>

        <li>

        { at9 ?
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Claimed
</button>

      :
<button onClick={claimnow} value="9" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
 Claim 
</button>


    }
                      </li>

        <li>

        { at10 ?
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Claimed
</button>

      :
<button onClick={claimnow} value="10" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
 Claim 
</button>


    }
                  </li>

        </nav>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <span class="ml-3 text-xl"> Made with 💜 by Technoloader</span>
      </a>
    </div>
  </div>
</footer>
    </>
  )
}
