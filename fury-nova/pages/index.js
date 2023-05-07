import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import {authenticate} from "../utils/utils"

function index() {
  const router = useRouter();
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if(isConnected){
      authenticate(isConnected,router)
    }
  }, []);


    return (
      address?
      <></>
      :
      <>
        <div className="Block-center-login">
          <div>
            <ConnectButton />
          </div>
        </div>
      </>
    );
  }


export default index;
