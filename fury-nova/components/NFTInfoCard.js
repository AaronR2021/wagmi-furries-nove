import React from 'react'
import styles from './NFTInfoCard.module.css'
import {value} from '../mockdata'
import { CCard,CCardImage,CCardBody,CCardTitle,CCardText,CButton} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import { useRouter } from 'next/router';

function NFTInfoCard({data}) {
    const route= useRouter()
    


function reroute(){
    route.push({
        pathname:`/Fury_NFT/${data.name}`,
        query:{data:JSON.stringify(data)}
    })
    console.dir(route)
}
  return (
<CCard style={{ width: '18rem',background:'rgba(255, 255, 255, 0.178)' }} className={styles.cardBodyOutline}>
  <CCardImage orientation="top" src={data.image} />
  <CCardBody>
    <CCardTitle >{data.name.toUpperCase()}</CCardTitle>
    <CCardText>
      {data.description.length>200?data.description.substring(0,258)+'...':data.description}
    </CCardText>
    <CButton onClick={reroute}>View More Details</CButton>
  </CCardBody>
</CCard>
  )
}

export default NFTInfoCard