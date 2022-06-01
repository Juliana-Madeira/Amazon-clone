import React, { useState } from 'react'
import '../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    
    const signIn = e => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                navigate('/')
            })
            .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth){
                    navigate('/')
                }
                console.log(auth);    //user created with success
            })
            .catch(error => alert(error.message))
    }



  return (
    <div className='login'>
        <Link to='/'><img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon-logo" />
        </Link>
        <div className="login__container">
            <h1>Sign in</h1>
            <form action="">
                <h5>Email</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button className='login__signInButton' onClick={signIn} type='submit'>Sign In</button>
            </form>
            <p>By signing-in you agree to the "AMAZON FAKE CLONE FOR STUDY" Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
            <button className='login__registerButton' onClick={register} >Create your Amazon account</button>
        </div>
    </div>
  )
}

export default Login