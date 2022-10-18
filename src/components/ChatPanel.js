import React, { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
import styles from '../styles/ChatPanel.module.css'
import Input from './Input'
import MessageContainer from './MessageContainer'
const ChatPanel = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className={styles.chatPanel}>
       <div className={styles.chatInfo}>
       <span className={styles.title}>{data.user?.displayName}</span>
        <div className={styles.userInfo}>
            <img style={{width:'25px',height:'25px',cursor:'pointer'}} src="https://img.icons8.com/metro/52/FFFFFF/video-call.png" alt="" />
        </div>
       </div>
       <MessageContainer/>
       <Input/>
    </div>
  )
}

export default ChatPanel