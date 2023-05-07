import NAV from "../components/nav";
import Hero from "../components/Hero.js";
import NFTInfo from "../components/NFTInfo.js"
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { getContract, getProvider } from "@wagmi/core";
import { abi } from "../abi";
import { authenticate, fetchUrlMetadata } from "../utils/utils";
import { useRouter } from "next/router";

//connect to contract

export default function index() {
  //hooks
  const router = useRouter();
  const { address, isConnected } = useAccount();

  //states
  const [contractProvider, setContractProvider] = useState(null);
  const [nftList, setNftList] = useState([]);

  //useEffects

  //authentication
  useEffect(() => {
    authenticate(isConnected, router);
  }, []);

  //get contractInfo
  useEffect(() => {
    const provider = getProvider();
    const contract = getContract({
      address: "0x72aB91aaf2530CD3060E44F687fAa3cF74CDe032",
      abi: abi,
      signerOrProvider: provider,
    });
    setContractProvider(contract);
  }, []);

  useEffect(() => {
    if (contractProvider) {
      Promise.all([getNFTMetadataInfomation()]);
    }
    //setNftList([...nftList,])
  }, [contractProvider]);

  //functions
  async function getNFTMetadataInfomation() {

     if (contractProvider) {
      let metadata=[];
      let i = 0;
      while (true) {
        const url = await contractProvider.tokenIdsUri(i);
        if (!url) {
          setNftList(metadata)
          break;
        } else {
          const dataDisplay = await fetchUrlMetadata(url);
          dataDisplay.id=i;
          i++;


          metadata.push(dataDisplay);
        }
      }
    } 
  }

  return (
    <>
      <div>
        <div className="container">
          <NAV />
        </div>
        <div className="container">
          <Hero />
        </div>       
        <div className="container">
        {
          //display NFTs
          nftList.length?<NFTInfo info={nftList}/>:null
        }
        </div>
      </div>
    </>
  );
}
