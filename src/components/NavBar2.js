import React from 'react';
import styles from '../styles/NavBar2.module.css'

const NavBar2 = () => {
  return (
    <div className={styles.navbar}>
        <span className={styles.title}>Buzz Chat</span>
        <div className={styles.userInfo}>
            <img style={{width:'30px',height:'30px'}} src="https://cdn-icons-png.flaticon.com/512/236/236831.png" alt="" />
            <span style={{paddingTop:'5px'}}>Venki</span>
            <button style={{border:'none',borderRadius:'8px',backgroundColor:'#182229',fontSize:'15px',padding:'5px',color:'#ccc'}}>Logout</button>
        </div>
    </div>
  )
}

export default NavBar2;