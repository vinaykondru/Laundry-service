import React, { useState } from "react";
import axios from "axios";
import './register.css';
import { Link, useNavigate} from "react-router-dom";

import CD from "../images/CD.svg"

import Header2 from "../components/headers/header2";
import Referal from "../components/referal/referal";
import Topfooter from "../components/footer/topfooter";
import Footer from "../components/footer/footer";


const Register = () => {
    const navigate= useNavigate()
    const [user, setUser] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        state: '',
        district: '',
        address: '',
        pincode: ''
    })
    const changeHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:4500/api/v1/users/register", user).then(
            res => {
                alert("Registered Scucessfully"); setUser({
                    name: '',
                    email: '',
                    mobile: '',
                    password: '',
                    state: '',
                    district: '',
                    address: '',
                    pincode: ''
                })
            }
        )
    }
    const PostData=async(e)=>{
        e.preventDefault();
        const {name,email,mobile,password,state,district,address,pincode}=user;
        
        const res = await fetch("http://localhost:5000/api/v1/register",{
             method:"POST",
             headers:{
                 "Content-Type":"application/json",
                 'Accept': 'application/json'
             },
             body:JSON.stringify({
                name,email,mobile,password,state,district,address,pincode
             })
        });
        const data = await res.json(); //not seeing in the pending state
        //data is valid or not -----
        console.log(data);
        if (data.status===400 ||!data){   //not found data or data not valid
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }else{
            window.alert("Registration successful");
            console.log("Successful Registration");

            navigate("/")    //METHOD for redirecting into login page
        }
    }
    return (
        <div className='registerpage'>
            < Header2 />
            <div className='rmaincontent1'>
                <div className='rleftmain1'>
                    <div className='rleftcontent1'>
                        <h2 className="rheading21">Laundry Service</h2>
                        <p className='rdescription11'>Doorstep Wash and Dryclean Service</p>
                        <p className='rhaveaccount11'>Already Have Account</p>

                        <Link to="/"><button className="rlogin-btn1">Sign In</button></Link>
                    </div>
                </div>
                <div className='rrightmain1'>
                    <div className='rrightcontent1'>
                        <h2 className='rheading31'>REGISTER</h2>
                        <form method='POST' className='rregistrationform' onSubmit={submitHandler} autoComplete="off">
                            <div className='rregistrationinputs'>
                                <div className='rleftinputs' >
                                    <label className="rlabel1">Name</label><br />
                                    <input type="text" onChange={changeHandler} name="name" required /><br />
                                    <label className="rlabel1">Email</label><br />
                                    <input type="email" onChange={changeHandler} name="email" required /><br />
                                    <label className="rlabel1">Password</label><br />
                                    <input type="password" onChange={changeHandler} name="password" required /><br />
                                    <label className="rlabel1">State</label><br />
                                    <input type="text" onChange={changeHandler} name="state" required /><br />
                                    <label className="rlabel1">Address</label><br />
                                    <input type="text" onChange={changeHandler} name="address" required /><br />
                                </div>
                                <div className='rrightinputs'>
                                    <label className="rlabel1">Mobile</label><br />
                                    <input onChange={changeHandler} name="mobile" required /><br />

                                    <label className="rlabel1">District</label><br />
                                    <input type="text" onChange={changeHandler} name="district" required /><br />
                                    <label className="rlabel1">Pincode</label><br />
                                    <input onChange={changeHandler} name="pincode" required /><br />
                                </div>
                            </div>
                            <div className='rcheck-box1'>
                                <span className='rcheckboxtext'><img src={CD} alt="checkbox" /> I agree to Terms & Condition receiving marketing and promotional materials</span>
                            </div>
                            <button type="submit" value="Login" className="rsignupbtn" onClick={PostData}>Register</button>
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


export default Register;