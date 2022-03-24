import React from 'react';
import "./createorder.css"
import Homeimg from "../images/home-run (1).svg";
import Plusimg from "../images/more.svg"
import Listimg from "../images/list.svg"
import Searchimg from  "../images/search.svg"
import { Link } from "react-router-dom";

import Header3 from '../components/headers/header3';
import Footer from "../components/footer/footer";

const Ordershome=()=> {
  return (
    <div className='ordershome'>
        <Header3 />
        <div className='mainbody1'>
            <div className='sidenav'>
                <div className='homeimg'>
                    <img src={Homeimg} alt="Homeimage" />
                </div>
                <div className='plusimg'>
                    <img src={Plusimg} alt="plusimg" />
                </div>
                <div className='listimg'>
                    <img src={Listimg} alt="listimg" />
                </div>
            </div>
            <div className='mainbody2'>
                <div className='orderslist1'>
                    <div className='orderscountandsearch'>
                        <h3>Orders | 0</h3>
                        <span><input type="text" class="ordersearchbar1" placeholder="Search"/><img src={Searchimg} alt="searchicon" /></span>
                    </div>
                </div>
                <div className='createordersbtn1'>
                    <p>No Orders avaialble</p>
                    {/* <button className='createordersbtn2'>Create</button> */}
                    <Link to="/ordercreate"><button className="createordersbtn2">Create</button></Link>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default Ordershome;