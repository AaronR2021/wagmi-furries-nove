import React from 'react'
import styles from './NFTInfo.module.css'
import NFTInfoCard from './NFTInfoCard.js'
function NFTInfo({info}) {
  return (
    <div className={styles.NFTList}>
    {
        info?info.map((data,index)=>(
            
            <>
            <NFTInfoCard data={data}/>
            </>
        )
            
        ):null
    }
    </div>
  )
}

export default NFTInfo