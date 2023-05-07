import React from 'react'
import styles from './nav.module.css'

function NAV() {
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

          <li className={styles.button_nav}>
            <div className={styles.button_nav_box}>About us</div>
            <div className={styles.shadow_bar}></div>

          </li>

        </ul>
        
      </nav>
    </div>
  )
}

export default NAV