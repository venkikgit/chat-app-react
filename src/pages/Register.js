import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import styles from '../styles/Register.module.css';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,storage,db } from '../firebase';
import { ref,uploadBytesResumable,getDownloadURL } from 'firebase/storage';
import { doc,setDoc } from 'firebase/firestore';
import { async } from '@firebase/util';
import { toast } from 'react-toastify';
const Register = () => {
  const [error,setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
   
    console.log(displayName,email,password,file);
    try{
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const date = new Date().getTime();
    const storageRef = ref(storage, `${displayName+date}`);
    
    await uploadBytesResumable(storageRef, file).then(()=>{
      getDownloadURL(storageRef).then(async(downloadURL)=>{
        try{
          await updateProfile(res.user,{
            displayName,
            photoURL:downloadURL,
          });
          await setDoc(doc(db,"users",res.user.uid),{
            uid:res.user.uid,
            displayName,
            email,
            photoURL:downloadURL
          });
          await setDoc(doc(db,"userChats",res.user.uid),{});
          navigate('/');
        }catch(error){
          setError(true);
        }
      })
    });     
    }catch(error){
      setError(true);
      toast.error("Weak password or something went wrong");
    }

  }
  return (
    <div>
      <NavBar/>
    <div className={styles.container}>
        <div className={styles.conainerWrapper}>
            <span className='title'><h5>Register</h5></span>
            <form action="" onSubmit={handleSubmit}>
                <input required type="text" name="name" id="name" placeholder='Display Name'/>
                <input required type="email" name="email" id="email" placeholder='Email Address' />
                <input required type="password" name='password' id='password' placeholder='Password'/>
                <input required style={{display:'none'}} type="file"  name='file' id='file'/>
                <label htmlFor='file'><img style={{width:'30px'}} src="https://cdn-icons-png.flaticon.com/512/236/236831.png" alt="" />&nbsp;<span>Choose an avatar</span></label>
                <button type="submit" className='btn btn-outline-success'>Sign Up</button>
                { error && <span> Something went wrong</span>}
            </form>
            <p style={{marginTop:'17px'}}>Already have an account?&nbsp;<Link to="/login">Login</Link></p>
        </div>
    </div>
    </div>
    
  )
}

export default Register