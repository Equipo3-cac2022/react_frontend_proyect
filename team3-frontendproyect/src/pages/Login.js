import { Route, Routes, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import Signup from './Signup';
import './Login.css'
import React, {useEffect, useState } from 'react'
import {register, login} from '../Auth.js'

const Login = () => {
    const [form, setForm] = useState({
        email:'',
        password:''
    })
    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log('email, pass', form.email, form.password, form)
        isSignup
            ? console.log('response', await register(form))
            : console.log('response', await login(form))
  
    }
    const [isSignup, setIsSignup] = useState(false)
    const signinOrLoginToggler = () => {
        setIsSignup(current => !current)
    }
    return (
        <div className="showcase">
            <div className="showcase-content">
                <>
                {form.email}
                {form.password}
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <h1>{isSignup ? 'Signup' : 'Login'}</h1>
                            <div className="info">
                                <input className="email" id="email" type="email" placeholder="Email or phone number"onChange={(e) => 
        setForm({...form, email: e.target.value})} />
                                <br />
                                <input className="password" id="password" type="password" placeholder="Password" onChange={(e) => 
        setForm({...form, password: e.target.value})} />
                            </div>
                            <div className="formlogin">
                                <button className="btn btn-primary" type="submit">{isSignup ? 'Signup' : 'Login'}</button>
                            </div>
                            <div className="remember">
                                <div>
                                    <input value="true" type="checkbox"></input><label>Remember me</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="signup">
                        <p>{isSignup ? 'Have an account?' : 'New to Notflix?'}</p>
                        <span className="toggler" onClick={signinOrLoginToggler}>{isSignup ? 'Login' : 'Signup'}</span>
                    </div>
                </>
            </div>
        </div>
    )    
}



export default Login