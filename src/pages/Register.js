import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import styles from '../styles/Register.module.css'
const Register = () => {
  return (
    <div>
      <NavBar/>
    <div className={styles.container}>
        <div className={styles.conainerWrapper}>
            <span className='title'><h5>Register</h5></span>
            <form action="">
                <input type="text" name="name" id="name" placeholder='Display Name'/>
                <input type="email" name="email" id="email" placeholder='Email Address' />
                <input type="password" name='password' id='password' placeholder='Password'/>
                <input style={{display:'none'}} type="file"  name='avatar' id='avatar'/>
                <label htmlFor='file'><img style={{width:'30px'}} src="https://cdn-icons-png.flaticon.com/512/236/236831.png" alt="" />&nbsp;<span>Choose an avatar</span></label>
                <button type="submit" className='btn btn-outline-success'>Sign Up</button>
            </form>
            <p style={{marginTop:'17px'}}>Already have an account?&nbsp;<Link to="/login">Login</Link></p>
        </div>
    </div>
    </div>
    
  )
}

export default Register