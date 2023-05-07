import React from 'react';
import styles from './hero.module.css'

function Hero() { 
  return (
    <div className={styles.hero_banner}>
        <img className={styles.nftCard} src='https://ipfs.io/ipfs/QmTxVqxUUKf9BVAztcQsLTCFYt9JvL7JJLjE7iUMZwTQuV'/>

        <div className={styles.text_hero} >
          
          <h3>Buy an NFT to get a chance to win a <span>FREE AIRDROP</span> every week</h3>
          
        </div>

    </div>
  )
}

export default Hero