import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import * as React from 'react';
import styles from "../../components/NFTInfoCard.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { useAccount, useContractWrite } from "wagmi";
import { getContract, getProvider } from "@wagmi/core";
import { abi } from "../../abi";
const { ethers } = require('ethers');
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
//to write on contract


import {isauthenticate, StyledTableCell, StyledTableRow } from "../../utils/utils";

function CharacterDetail() {
  //routing
  const router = useRouter();
  const { address, isConnected } = useAccount();


  //states
  const [furyInfo, setFuryInfo] = useState(JSON.parse(router.query.data));
  const [contractProvider, setContractProvider] = useState(null);
  const [contractSigner, setContractSigner] = useState(null);
  const [open, setOpen] = useState(false);

  const [constPerMint, setCostPerMint] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [totalMinted, setTotalMinted] = useState(0);

  //write to contract
  const mintNovaFurries = useContractWrite({
    mode: 'recklesslyUnprepared',
    address: '0x72aB91aaf2530CD3060E44F687fAa3cF74CDe032',
    abi: abi,
    functionName: 'mint',
    args:[furyInfo.id],
    overrides: {
      from: address,
      value: ethers.utils.parseEther('0.000013'),
    },
  })


  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    router.replace('/home')
    setOpen(false);
  };

 

  //authentication
  useEffect(() => {
    isauthenticate(isConnected, router);
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
      Promise.all([getSingleNFTMetadataInfomation()]);
    }
  }, [contractProvider]);


    //functions
    async function getSingleNFTMetadataInfomation() {
      if (contractProvider) {
        const supply = await contractProvider.supply(furyInfo.id)
        setTotalSupply(supply.toNumber())
        const minted = await contractProvider.minted(furyInfo.id)
        setTotalMinted(minted.toNumber())
        const cost = await contractProvider.costPerNft(furyInfo.id)
        setCostPerMint(ethers.utils.formatUnits(cost, 'ether'))
     } 
   }

   async function mintNFT() {
   const data= await mintNovaFurries.writeAsync()
   const {status} = await data.wait();
    if(status==1){
      handleClick()
    }else{

    }
  }

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
      </IconButton>
    </React.Fragment>
  );



  if (furyInfo) {
    return (
      <div className={styles.flex_column}>
        <div className="container">
          <div className={styles.bodyStructure}>
            <img src={furyInfo.image} className={styles.image} />
          </div>
          <div className={styles.FurriesInformationList}>
            <h1 className={styles.headingInfo}>{furyInfo.name}</h1>
            <p className={styles.bodyInfo}>{furyInfo.description}</p>

            <div className={styles.additionalInfo}>
              <p>
                Cost Per Mint: <span>{constPerMint} ETH</span>
              </p>
              <p>
                Total Supply : <span>{totalSupply} Units</span>
              </p>
              <p>
                Total minted: <span>{totalMinted} Units</span>
              </p>
            </div>

            <TableContainer>
              <Table sx={{ maxWidth: 400 }} aria-label="customized table">
                <TableBody>
                  {furyInfo.attributes.map((value, index) => (
                    <>
                      <StyledTableRow key={index} className={styles.marginRow}>
                        <StyledTableCell component="th" scope="row">
                          {value.trait_type}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {value.value}
                        </StyledTableCell>
                      </StyledTableRow>
                    </>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className={styles.buttonToMint}>
          <Button variant="contained" color="success" onClick={mintNFT}>Mint {furyInfo.name}</Button>
          </div>
        </div>
        <Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={handleClose}
  message="You've minted your NFT"
  action={action}
/>
      </div>
    );
  } else {
    <></>;
  }
}

export default CharacterDetail;
