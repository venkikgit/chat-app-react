import React from 'react'
import styles from '../styles/Home.module.css'
import ChatPanel from '../components/ChatPanel'
import SidePanel from '../components/SidePanel'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className='containerWrapper'>
        <SidePanel/>
        <ChatPanel/>
      </div>
    </div>
  )
}

export default Home