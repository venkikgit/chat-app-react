import React from 'react'
import styles from '../styles/Chats.module.css'
const Chats = () => {
  return (
    <div className={styles.chats}>
        <div className={styles.chatsContainer}>
            <img style={{height: "40px",width: "40px"}} src="https://cdn-icons-png.flaticon.com/512/236/236831.png" alt="" />
            <div className="chatInfo">
                <span> Venki</span>
            </div>
        </div>
        <div className={styles.chatsContainer}>
            <img style={{height: "40px",width: "40px"}} src="https://cdn-icons-png.flaticon.com/512/236/236831.png" alt="" />
            <div className="chatInfo">
                <span> Venki</span>
            </div>
        </div>
    </div>
  )
}

export default Chats