import React, { useState, useContext } from "react";
import axios from "axios";
import { store } from "../App";
import { Navigate } from "react-router-dom";
import './login.css';
import { Link } from "react-router-dom";

import Header1 from "../components/headers/header1";
import Referal from "../components/referal/referal";
import Topfooter from "../components/footer/topfooter";
import Footer from "../components/footer/footer";


const Login = () => {
    const [token, setToken] = useContext(store)
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const changeHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:5000/api/v1/login", user).then(
            res => setToken(res.data.token)
        )
    }
    console.log(token)
    if (token) {
        console.log(user.firstname)
        return <Navigate to="/createorder" />
    }
    return (
        <div className='homepage'>
            <Header1 />
            <div className='lmaincontent'>
                <div className='lleftmain'>
                    <div className='lleftcontent'>
                        <h2 className="lheading2">Laundry Service</h2>
                        <p className='ldescription1'>Doorstep Wash and Drycelan Service</p>
                        <p className='lhaveaccount1'>Dont Have An Account?</p>
                        {/* <button className="lregister-btn1">Register</button> */}
                        <Link to="/register"><button className="lregister-btn1">Register</button></Link>
                    </div>
                </div>
                <div className='lrightmain'>
                    <div className='lrightcontent'>
                      <h2 className='lheading3'>SIGN IN</h2>
                        <form className="loginform" onSubmit={submitHandler} autoComplete="off">
                            <label className="email1">Email</label><br />
                            <input type="email" onChange={changeHandler} name="email" required /><br />
                            <label className="password1">Password</label><br />
                            <input type="password" onChange={changeHandler} name="password" required /><br />
                            <span className='lforget1'>Forget Password?</span><br />
                            <button type="submit" value="Login" className="lsigninbtn">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
            <Referal />
            <Topfooter />
            <Footer />

        </div>
    )
}

export default Login;
