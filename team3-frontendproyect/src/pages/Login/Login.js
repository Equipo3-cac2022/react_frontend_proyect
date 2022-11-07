import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import Signup from '../Signup';
import "./login.css"


const Login = () => {

    return (

        <body>
            <header className="showcase">
                <div className="showcase-content">
                    <><div className="formm">
                        <form>
                            <h1>Log In</h1>
                            <div className="info">
                                <input className="email" type="email" placeholder="Email or phone number"></input>
                                <br />
                                <input className="email" type="password" placeholder="Password"></input>
                            </div>
                            <div className="btn">
                                <button className="btn-primary" type="submit">Log In</button>
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

                            <p><Link to="Signup">Signup</Link></p>
                            <Routes>
                                <Route path='Signup' element={<Signup />} />
                            </Routes>
                        </div></>
                </div>
            </header>
        </body>
    )
}



export default Login