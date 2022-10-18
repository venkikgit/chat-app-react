import React, { useContext } from 'react';
import styles from '../styles/NavBar2.module.css';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';

const NavBar2 = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className={styles.navbar}>
        <span className={styles.title}>Buzz Chat</span>
        <div className={styles.userInfo}>
            <img style={{width:'30px',height:'30px',borderRadius:'50%'}} src={currentUser.photoURL} alt="" />
            <span style={{paddingTop:'5px'}}>{currentUser.displayName}</span>
            <button onClick={()=> {signOut(auth); toast.success("Successfully signed out")}}lick style={{border:'none',borderRadius:'8px',backgroundColor:'#182229',fontSize:'15px',padding:'5px',color:'#ccc'}}>Logout</button>
        </div>
    </div>
  )
}

export default NavBar2;