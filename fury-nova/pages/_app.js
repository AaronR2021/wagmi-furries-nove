import '../styles/global.css';
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, sepolia, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { useEffect,useState } from 'react';
import { useRouter } from "next/router";



const { chains, provider } = configureChains(
  [ sepolia],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Furry-Nove',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


export default function App({ Component, pageProps }) {
  const [ready,setReady] = useState(false);

  useEffect(()=>{
    setReady(true);
  },[]);

  return (
    <>
    {
      ready?(    <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
         <Component {...pageProps} />
        </RainbowKitProvider>
        </WagmiConfig>):null
    }
    </>
  )
}