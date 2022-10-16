import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import styles from '../styles/Register.module.css'


const Login = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.conainerWrapper}>
            <span className='title'><h5>Login</h5></span>
            <form action="">
                <input type="email" name="email" id="email" placeholder='Email Address' />
                <input type="password" name='password' id='password' placeholder='Password'/>
                <button type="submit" className='btn btn-outline-success'>Sign Up</button>
            </form>
            <p style={{marginTop:'17px'}}>Already have an account?&nbsp;<Link to="/register">Register</Link></p>
        </div>
    </div>
    </div>
  )
}

export default Login