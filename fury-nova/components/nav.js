import React from 'react'
import styles from './nav.module.css'
import { useRouter } from 'next/router'
import { useAccount, useContractWrite } from "wagmi";
import {isAdmin} from '../utils/utils'

function NAV() {
  const router = useRouter();
  const { address, isConnected } = useAccount();


  function admin(){
    isAdmin(address,router);
  }

  
  return (
    <div className={styles.Hero}>
      <nav className={styles.flex_spacebetween}>
        <h1 className='project-name-color'>Nova Furries</h1>

        <ul className={styles.nav_buttons_list}>

          <li className={styles.button_nav}>
            <div className={styles.button_nav_box}>Home</div>
            <div className={styles.shadow_bar}></div>
          </li>

          <li className={styles.button_nav}>
            <div className={styles.button_nav_box}>Roadmap</div>
            <div className={styles.shadow_bar}></div>

          </li>

          <li className={styles.button_nav} onClick={admin}>
            <div className={styles.button_nav_box}>Admin</div>
            <div className={styles.shadow_bar}></div>

          </li>

        </ul>
        
      </nav>
    </div>
  )
}

export default NAV