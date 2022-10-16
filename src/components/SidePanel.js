import React from 'react'
import styles from '../styles/SidePanel.module.css'
import Chats from './Chats'
import NavBar2 from './NavBar2'
import SearchBar from './SearchBar'
const SidePanel = () => {
  return (
    <div className={styles.sidePanel}>
        <NavBar2/> 
        <SearchBar/>
        <Chats/>
    </div>
  )
}

export default SidePanel