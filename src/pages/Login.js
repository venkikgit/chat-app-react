import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import styles from '../styles/Register.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth} from '../firebase';
import { toast } from 'react-toastify';



const Login = () => {
  const [error,setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try{
      await signInWithEmailAndPassword(auth,email,password);
      toast.success("Successfully signed in");
      navigate('/')
    }catch(error){
      setError(true);
      toast.error("Incorrect email or password");
    }
  }
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.conainerWrapper}>
            <span className='title'><h5>Login</h5></span>
            <form action="" onSubmit={handleSubmit}>
                <input type="email" name="email" id="email" placeholder='Email Address' />
                <input type="password" name='password' id='password' placeholder='Password'/>
                <button type="submit" className='btn btn-outline-success'>Sign In</button>
            </form>
            <p style={{marginTop:'17px'}}>Already have an account?&nbsp;<Link to="/register">Register</Link></p>
        </div>
    </div>
    </div>
  )
}

export default Login