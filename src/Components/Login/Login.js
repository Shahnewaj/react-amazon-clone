import React, { useState } from 'react'
import './Login.css'
import { Link , useHistory } from 'react-router-dom'
import { auth } from '../../firebase';

function Login() {
    const history = useHistory();
    const [email , setEmail ] =useState ('');
    const [password , setPassword ] =useState ('');


    const signIn = (e) =>{
        e.preventDefault();
        // firebase login 
        auth.signInWithEmailAndPassword(email , password)
        .then((auth) => {
            if(auth){
             history.push('/')
            }
         })
         .catch(error =>  alert(error.message) )



    }


    const register =(e) =>{
        e.preventDefault();
        // firebse create account 

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
           if(auth){
            history.push('/')
           }
        })
        .catch(error =>  alert(error.message) )

    }
    return (
        <div className="login">
            <Link to="/">
                <img  className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png" alt=""  />
            </Link>
            <div className="login_container">
                <h1>Sign-In</h1>
                
                <form>

                    <h5>E-mail</h5>
                    <input value={email} type="text" onChange={(e) =>  setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" />

                    <button  type='submit' onClick={signIn} className="login_signInButton" >Sign In </button>
                </form>

                <p> By signing in , you agree to the terms and condition of FAKE AMAZON CLONE website. </p>
                <button onClick={register} className="login_registerButton">Create your Amazon Account </button>
            </div>
        </div>
    )
}

export default Login
