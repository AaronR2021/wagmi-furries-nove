import styles from "./form.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {abi} from "../abi";
const { BigNumber,ethers } = require('ethers');


import { useAccount, useContractWrite } from "wagmi";


function form() {
  const router = useRouter();


  const [totalSupply, setTotalSupply] = useState(null);//30
  const [uri, setURI] = useState(null);//QmSkzf8TVo4wmCFnaSXGhFfzKt9hRpFUymeK2WLmDkqwWV
  const [costOfNft, setConstOfNft] = useState(null);//13000000000000
  


  const addFurries = useContractWrite({
    mode: "recklesslyUnprepared",
    address: process.env.NEXT_PUBLIC_ADDRESS,
    abi: abi,
    functionName: "addNewFurry",
    args: [uri,costOfNft,totalSupply],
  });

  async function AddFurry(){

    const data = await addFurries.writeAsync(); //write to contract
    const value = await data.wait()
   
    const { status } = await data.wait(); //wait for conformation
    if (status == 1) {
      router.replace("/");
    } else {
      console.error("Something went wrong") 
    }
    
  }

  function setObject(event){
    const name = event.target.name;
    const value = event.target.value;
    
    if(name=='URI'){
      const val='ipfs://'+value+'/';
      setURI(val)
    }
    if(name=='costOfNft'){
      setConstOfNft(value)}
    if(name=='MaxSupply'){setTotalSupply(value)}
  }



  return <div className={styles.formCenter}>
            <TextField
            sx={{ width: "36ch" }}
            id="margin-dense"
            margin="dense"
            placeholder="URI"
            onChange={setObject}
            name="URI"
          />
          
          <TextField
            sx={{ width: "36ch" }}
            id="margin-dense"
            margin="dense"
            placeholder="const of NFT in wei"
            onChange={setObject}
            name="costOfNft"
          />
          <TextField
            sx={{ width: "36ch" }}
            id="margin-dense"
            margin="dense"
            placeholder="Max supply of NFT"
            onChange={setObject}
            name="MaxSupply"
          />
          <div className={styles.button}></div>
          <Button variant="contained" size="large" onClick={AddFurry}>Add Furry</Button>
  </div>
}

export default form;
