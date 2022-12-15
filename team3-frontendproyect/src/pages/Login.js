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
        console.log('cositas', form.email, form.password)
        isSignup
            ? await register(form.email, form.password)
            : await login(form.email, form.password)
  
    }
    const [isSignup, setIsSignup] = useState(true)
    const signinOrLoginToggler = () => {
        setIsSignup(current => !current)
    }
    if (isSignup) {
        return (
            <div className="showcase">
                <div className="showcase-content">
                    <>
                        <div className="form">
                            <form>
                                <h1>Signup</h1>
                                <div className="info">
                                    <input className="email" id="email" type="email" placeholder="Email or phone number"onChange={(e) => 
            setForm({...form, email: e.target.value})} />
                                    <br />
                                    <input className="password" id="password" type="password" placeholder="Password" onChange={(e) => 
            setForm({...form, password: e.target.value})} />
                                </div>
                                <div className="formlogin">
                                    <button className="btn btn-primary" type="submit">Signup</button>
                                </div>
                                <div className="remember">
                                    <div>
                                        <input value="true" type="checkbox"></input><label>Remember me</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="signup">
                            <p>Have an account?</p>
                            <span className="toggler" onClick={signinOrLoginToggler}>Login</span>
                        </div>
                    </>
                </div>
            </div>
        )
    } else {
        return (
            <div className="showcase">
                <div className="showcase-content">
                    <>
                        <div className="form">
                            <form>
                                <h1>Login</h1>
                                <div className="info">
                                    <input className="email" type="email" placeholder="Email or phone number"></input>
                                    <br />
                                    <input className="email" type="password" placeholder="Password"></input>
                                </div>
                                <div className="formlogin">
                                    <button className="btn btn-primary" type="submit">Login</button>
                                </div>
                                <div className="remember">
                                    <div>
                                        <input value="true" type="checkbox"></input><label>Remember me</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="signup">
                            <p>New to Netflix?</p>
                            <span className="toggler" onClick={signinOrLoginToggler}>Signup</span>
                        </div>
                    </>
                </div>
            </div>
        )
    }
    
}



export default Login