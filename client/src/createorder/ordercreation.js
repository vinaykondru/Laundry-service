import React, { useState, useEffect } from "react";
import "./ordercreation.css"

import Header3 from "../components/headers/header3"
import Footer from "../components/footer/footer";

import Homeimg from "../images/home-run (1).svg";
import Plusimg from "../images/more.svg"
import Listimg from "../images/list.svg"
import Searchimg from  "../images/search.svg"


import Summaryone from "./summaryone";

// ----  Product List -------------
import shirts from "../images/productitems/shirts.jpg"
import tshirts from "../images/productitems/tshirts.jpg"
import trousers from "../images/productitems/trousers.jpg"
import jeans from "../images/productitems/jeans.jpg"
import boxers from "../images/productitems/boxers.jpg"
import joggers from "../images/productitems/joggers.jpg"
import others from "../images/productitems/others.jpg"

// ---- washtypes ---------
import wash from "../images/washtypes/wash.svg";
import washselected from "../images/washtypes/washselected.svg";
import iron from "../images/washtypes/iron.svg";
import ironselected from "../images/washtypes/ironselected.svg";
import fold from "../images/washtypes/fold.svg";
import foldselected from "../images/washtypes/foldselected.png";
import pack from "../images/washtypes/bleach.svg";
import packselected from "../images/washtypes/bleachselected.svg"
 

const Ordercreation=()=> {

    const [openmodalone, setOpenmodalone] = useState(false)
    const [data,setData] = useState(" ")

    const washcost = 20;
    const presscost = 15;
    const foldcost = 10;
    const packcost = 25;
  
  // ---------  Shirts -------------
  const [washpicked1, setWashpicked1] = useState(false);
  const [ironpicked1, setIronpicked1] = useState(false);
  const [foldpicked1, setFoldpicked1] = useState(false);
  const [packpicked1, setPackpicked1] = useState(false);
  const [quantity1, setQuantity1] = useState(0);
  const[price1, setPrice1]=useState("---");
  const [type1,setType1]=useState(0);

  const washtouch1=()=>{
    setWashpicked1(!washpicked1)
  }
  const irontouch1=()=>{
    setIronpicked1(!ironpicked1)
  }
  const foldtouch1=()=>{
    setFoldpicked1(!foldpicked1)
  }
  const packtouch1=()=>{
    setPackpicked1(!packpicked1)
  }

  const subtotal1=()=>{
    let cost = 0;
    let type = 0;

    if(washpicked1){
      cost+=quantity1*washcost;
      type+=washcost;
    }
    if(ironpicked1){
      cost+=quantity1*presscost;
      type+=presscost;
    }
    if(foldpicked1){
      cost+=quantity1*foldcost;
      type+=foldcost;
    }
    if(packpicked1){
      cost+=quantity1*packcost;
      type+=packcost;
    }
    setPrice1(cost)
    setType1(type)
  }

  // ---- T-Shirts -----------
  const [washpicked2, setWashpicked2] = useState(false);
  const [ironpicked2, setIronpicked2] = useState(false);
  const [foldpicked2, setFoldpicked2] = useState(false);
  const [packpicked2, setPackpicked2] = useState(false);
  const [quantity2, setQuantity2] = useState(0);
  const[price2, setPrice2]=useState("---");
  const [type2,setType2]=useState(0);

  const washtouch2=()=>{
    setWashpicked2(!washpicked2)
  }
  const irontouch2=()=>{
    setIronpicked2(!ironpicked2)
  }
  const foldtouch2=()=>{
    setFoldpicked2(!foldpicked2)
  }
  const packtouch2=()=>{
    setPackpicked2(!packpicked2)
  }

  const subtotal2=()=>{
    let cost = 0;
    let type = 0;

    if(washpicked2){
      cost+=quantity2*washcost
      type+=washcost
    }
    if(ironpicked2){
      cost+=quantity2*presscost
      type+=presscost
    }
    if(foldpicked2){
      cost+=quantity2*foldcost
      type+=foldcost
    }
    if(packpicked2){
      cost+=quantity2*packcost
      type+=packcost
    }
    setPrice2(cost)
    setType2(type)
  }
  // ---- trousers -----------
  const [washpicked3, setWashpicked3] = useState(false);
  const [ironpicked3, setIronpicked3] = useState(false);
  const [foldpicked3, setFoldpicked3] = useState(false);
  const [packpicked3, setPackpicked3] = useState(false);
  const [quantity3, setQuantity3] = useState(0);
  const[price3, setPrice3]=useState("---");
  const [type3,setType3]=useState(0);

  const washtouch3=()=>{
    setWashpicked3(!washpicked3)
  }
  const irontouch3=()=>{
    setIronpicked3(!ironpicked2)
  }
  const foldtouch3=()=>{
    setFoldpicked3(!foldpicked3)
  }
  const packtouch3=()=>{
    setPackpicked3(!packpicked3)
  }

  const subtotal3=()=>{
    let cost = 0;
    let type = 0;

    if(washpicked3){
      cost+=quantity3*washcost
      type+=washcost
    }
    if(ironpicked3){
      cost+=quantity3*presscost
      type+=presscost
    }
    if(foldpicked3){
      cost+=quantity3*foldcost
      type+=foldcost
    }
    if(packpicked3){
      cost+=quantity3*packcost
      type+=packcost
    }
    setPrice3(cost)
    setType3(type)
  }
  // ---- Jeans -----------
  const [washpicked4, setWashpicked4] = useState(false);
  const [ironpicked4, setIronpicked4] = useState(false);
  const [foldpicked4, setFoldpicked4] = useState(false);
  const [packpicked4, setPackpicked4] = useState(false);
  const [quantity4, setQuantity4] = useState(0);
  const[price4, setPrice4]=useState("---");
  const [type4,setType4]=useState(0);

  const washtouch4=()=>{
    setWashpicked4(!washpicked4)
  }
  const irontouch4=()=>{
    setIronpicked4(!ironpicked4)
  }
  const foldtouch4=()=>{
    setFoldpicked4(!foldpicked4)
  }
  const packtouch4=()=>{
    setPackpicked4(!packpicked4)
  }

  const subtotal4=()=>{
    let cost = 0;
    let type = 0;

    if(washpicked4){
      cost+=quantity4*washcost;
      type+=washcost;
    }
    if(ironpicked4){
      cost+=quantity4*presscost;
      type+=presscost;
    }
    if(foldpicked4){
      cost+=quantity4*foldcost;
      type+=foldcost;
    }
    if(packpicked4){
      cost+=quantity4*packcost;
      type+=packcost;
    }
    setPrice4(cost)
    setType4(type)
  }

  // ---- Boxers -----------
  const [washpicked5, setWashpicked5] = useState(false);
  const [ironpicked5, setIronpicked5] = useState(false);
  const [foldpicked5, setFoldpicked5] = useState(false);
  const [packpicked5, setPackpicked5] = useState(false);
  const [quantity5, setQuantity5] = useState(0);
  const[price5, setPrice5]=useState("---");
  const [type5,setType5]=useState(0);

  const washtouch5=()=>{
    setWashpicked5(!washpicked5)
  }
  const irontouch5=()=>{
    setIronpicked5(!ironpicked5)
  }
  const foldtouch5=()=>{
    setFoldpicked5(!foldpicked5)
  }
  const packtouch5=()=>{
    setPackpicked5(!packpicked5)
  }

  const subtotal5=()=>{
    let cost = 0;
    let type = 0;

    if(washpicked5){
      cost+=quantity5*washcost
      type+=washcost
    }
    if(ironpicked5){
      cost+=quantity5*presscost
      type+=presscost
    }
    if(foldpicked5){
      cost+=quantity5*foldcost
      type+=foldcost
    }
    if(packpicked5){
      cost+=quantity5*packcost
      type+=packcost
    }
    setPrice5(cost)
    setType5(type)
  }
  // ---- Joggers -----------
  const [washpicked6, setWashpicked6] = useState(false);
  const [ironpicked6, setIronpicked6] = useState(false);
  const [foldpicked6, setFoldpicked6] = useState(false);
  const [packpicked6, setPackpicked6] = useState(false);
  const [quantity6, setQuantity6] = useState(0);
  const[price6, setPrice6]=useState("---");
  const [type6,setType6]=useState(0);

  const washtouch6=()=>{
    setWashpicked6(!washpicked6)
  }
  const irontouch6=()=>{
    setIronpicked6(!ironpicked6)
  }
  const foldtouch6=()=>{
    setFoldpicked6(!foldpicked6)
  }
  const packtouch6=()=>{
    setPackpicked6(!packpicked6)
  }

  const subtotal6=()=>{
    let cost = 0;
    let type = 0;

    if(washpicked6){
      cost+=quantity6*washcost
      type+=washcost
    }
    if(ironpicked6){
      cost+=quantity6*presscost
      type+=presscost
    }
    if(foldpicked6){
      cost+=quantity6*foldcost
      type+=foldcost
    }
    if(packpicked6){
      cost+=quantity6*packcost
      type+=packcost
    }
    setPrice6(cost)
    setType6(type)
  }
  // ---- Others -----------
  const [washpicked7, setWashpicked7] = useState(false);
  const [ironpicked7, setIronpicked7] = useState(false);
  const [foldpicked7, setFoldpicked7] = useState(false);
  const [packpicked7, setPackpicked7] = useState(false);
  const [quantity7, setQuantity7] = useState(0);
  const[price7, setPrice7]=useState("---");
  const [type7,setType7]=useState(0);

  const washtouch7=()=>{
    setWashpicked7(!washpicked7)
  }
  const irontouch7=()=>{
    setIronpicked7(!ironpicked7)
  }
  const foldtouch7=()=>{
    setFoldpicked7(!foldpicked7)
  }
  const packtouch7=()=>{
    setPackpicked7(!packpicked7)
  }

  const subtotal7=()=>{
    let cost = 0;
    let type = 0;

    if(washpicked7){
      cost+=quantity7*washcost
      type+=washcost
    }
    if(ironpicked7){
      cost+=quantity7*presscost
      type+=presscost
    }
    if(foldpicked7){
      cost+=quantity7*foldcost
      type+=foldcost
    }
    if(packpicked7){
      cost+=quantity7*packcost
      type+=packcost
    }
    setPrice7(cost)
    setType7(type)
  }

  useEffect(()=>{subtotal1(); subtotal2(); subtotal3(); subtotal4(); subtotal5(); subtotal6(); subtotal7();})

  const opensummary = async()=>{
    var types=[]
    var allprices=[]
    var allservices=[]
    var quantity = []
    var shirtservices = []
    var tshirtservices = []
    var trouserservices = []
    var jeanservices = []
    var boxerservices = []
    var joggerservices = []
    var otherservices = []
    
    if(price1>0){
        types.push("Shirt")
        if(washpicked1){
            shirtservices.push("Washing")
        }
        if(ironpicked1){
            shirtservices.push("Ironing")
        }
        if(foldpicked1){
            shirtservices.push("Folding")
        }
        if(packpicked1){
            shirtservices.push("Packing")
        }
    }
    if(shirtservices){
        allservices.push(shirtservices)
    }
    if(shirtservices && quantity1>0){
        allprices.push(price1)
        quantity.push(quantity1)
    }
    // --------- Tshirts -------------
    if(price2>0){
        types.push("T-Shirt")
        if(washpicked2){
            tshirtservices.push("Washing")
        }
        if(ironpicked2){
            tshirtservices.push("Ironing")
        }
        if(foldpicked2){
            tshirtservices.push("Folding")
        }
        if(packpicked2){
            tshirtservices.push("Packing")
        }
    }
    if(tshirtservices){
        allservices.push(tshirtservices)
    }
    if(tshirtservices && quantity2>0){
        allprices.push(price2)
        quantity.push(quantity2)
    }
    // ----- Trousers -------
    if(price3>0){
        types.push("Trousers")
        if(washpicked3){
            trouserservices.push("Washing")
        }
        if(ironpicked3){
            trouserservices.push("Ironing")
        }
        if(foldpicked3){
            trouserservices.push("Folding")
        }
        if(packpicked3){
            trouserservices.push("Packing")
        }
    }
    if(trouserservices){
        allservices.push(trouserservices)
    }
    if(trouserservices && quantity3>0){
        allprices.push(price3)
        quantity.push(quantity3)
    }
    // ----- Jeans -------
    if(price4>0){
        types.push("Jeans")
        if(washpicked4){
            jeanservices.push("Washing")
        }
        if(ironpicked4){
            jeanservices.push("Ironing")
        }
        if(foldpicked4){
            jeanservices.push("Folding")
        }
        if(packpicked4){
            jeanservices.push("Packing")
        }
    }
    if(jeanservices){
        allservices.push(jeanservices)
    }
    if(jeanservices && quantity4>0){
        allprices.push(price4)
        quantity.push(quantity4)
    }
    // ----- Boxers -------
    if(price5>0){
        types.push("Boxers")
        if(washpicked5){
            boxerservices.push("Washing")
        }
        if(ironpicked5){
            boxerservices.push("Ironing")
        }
        if(foldpicked5){
            boxerservices.push("Folding")
        }
        if(packpicked5){
            boxerservices.push("Packing")
        }
    }
    if(boxerservices){
        allservices.push(boxerservices)
    }
    if(boxerservices && quantity5>0){
        allprices.push(price5)
        quantity.push(quantity5)
    }
    // ----- Joggers -------
    if(price6>0){
        types.push("Joggers")
        if(washpicked6){
            joggerservices.push("Washing")
        }
        if(ironpicked6){
            joggerservices.push("Ironing")
        }
        if(foldpicked6){
            joggerservices.push("Folding")
        }
        if(packpicked6){
            joggerservices.push("Packing")
        }
    }
    if(joggerservices){
        allservices.push(joggerservices)
    }
    if(joggerservices && quantity6>0){
        allprices.push(price6)
        quantity.push(quantity6)
    }
    // ----- Others -------
    if(price7>0){
        types.push("Others")
        if(washpicked7){
            otherservices.push("Washing")
        }
        if(ironpicked7){
            otherservices.push("Ironing")
        }
        if(foldpicked7){
            otherservices.push("Folding")
        }
        if(packpicked7){
            otherservices.push("Packing")
        }
    }
    if(otherservices){
        allservices.push(otherservices)
    }
    if(otherservices && quantity7>0){
        allprices.push(price7)
        quantity.push(quantity7)
    }
    setData({"alltypes":types,"services":allservices,"price":allprices,"qantity":quantity})
    console.log(data)
    setOpenmodalone(true)  
  }
  
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
                        <h3>Create Order</h3>
                        <span><input type="text" class="ordersearchbar1" placeholder="Search"/><img src={Searchimg} alt="searchicon" /></span>
                    </div>
                </div>
                <div className='orderingtable1'>
                    <div className='orderingtableheadings'>
                        <div className='orderingtableheadingsrow'>
                            <h3>Produt Types</h3>
                            <h3>Quantity</h3>
                            <h3>Wash Type</h3>
                            <h3>Price</h3>
                            <h3>Reset</h3>
                        </div>
                    </div>
                    <div>
                        <div className="row1">
                            <div className='product1-shirts'>
                            <img src={shirts} alt="Shirts" className="product-image"/>
                                <div className='productdescription'>
                                <p className='title1'>Shirts</p>
                                <p className='description1'>Lorium ipsum is Dummy Text</p>
                                </div>
                            </div>
                            <div>
                            <div className='inputquantity'>
                                <input type="text" maxlength="4" size="1" className='quantityinput' onChange={(e) => {setQuantity1(e.target.value);}} value={quantity1} />
                            </div>
                            </div>
                            <div>
                            <div className="washtype">
                                <img src={washpicked1 ? washselected : wash} onClick={() => {washtouch1()}} alt="wash"/>
                                <img src={ironpicked1 ? ironselected : iron} onClick={() => {irontouch1()}} alt="iron"/>
                                <img src={foldpicked1 ? foldselected : fold} onClick={() => {foldtouch1()}} alt="fold"/>
                                <img src={packpicked1 ? packselected : pack} onClick={() => {packtouch1()}} alt="pack"/>
                            </div>
                            </div>
                            <div className="price">
                            {`${quantity1} x ${type1} = ${price1}`}
                            </div>
                            <div>
                            <button type="button" className="rest-btn" onClick={()=>{setWashpicked1(false); setIronpicked1(false); setFoldpicked1(false); setPackpicked1(false); setQuantity1(0)}} >Reset</button>
                            </div>
                        </div>
                        <div className="row2">
                            <div className='product1-shirts'>
                            <img src={tshirts} alt="T-Shirts" className="product-image"/>
                                <div className='productdescription'>
                                <p className='title1'>T-Shirts</p>
                                <p className='description1'>Lorium ipsum is Dummy Text</p>
                                </div>
                            </div>
                            <div>
                            <div className='inputquantity'>
                                <input type="text" maxlength="4" size="1" className='quantityinput' onChange={(e) => {setQuantity2(e.target.value);}} value={quantity2} />
                            </div>
                            </div>
                            <div>
                            <div className="washtype">
                                <img src={washpicked2 ? washselected : wash} onClick={() => {washtouch2()}} alt="wash"/>
                                <img src={ironpicked2 ? ironselected : iron} onClick={() => {irontouch2()}} alt="iron"/>
                                <img src={foldpicked2 ? foldselected : fold} onClick={() => {foldtouch2()}} alt="fold"/>
                                <img src={packpicked2 ? packselected : pack} onClick={() => {packtouch2()}} alt="pack"/>
                            </div>
                            </div>
                            <div className="price">
                            {`${quantity2} x ${type2} = ${price2}`}
                            </div>
                            <div>
                            <button type="button" className="rest-btn" onClick={()=>{setWashpicked2(false); setIronpicked2(false); setFoldpicked2(false); setPackpicked2(false); setQuantity2(0)}} >Reset</button>
                            </div>
                        </div>
                        <div className="row2">
                            <div className='product1-shirts'>
                            <img src={trousers} alt="Trousers" className="product-image"/>
                                <div className='productdescription'>
                                <p className='title1'>Trousers</p>
                                <p className='description1'>Lorium ipsum is Dummy Text</p>
                                </div>
                            </div>
                            <div>
                            <div className='inputquantity'>
                                <input type="text" maxlength="4" size="1" className='quantityinput' onChange={(e) => {setQuantity3(e.target.value);}} value={quantity3} />
                            </div>
                            </div>
                            <div>
                            <div className="washtype">
                                <img src={washpicked3 ? washselected : wash} onClick={() => {washtouch3()}} alt="wash"/>
                                <img src={ironpicked3 ? ironselected : iron} onClick={() => {irontouch3()}} alt="iron"/>
                                <img src={foldpicked3 ? foldselected : fold} onClick={() => {foldtouch3()}} alt="fold"/>
                                <img src={packpicked3 ? packselected : pack} onClick={() => {packtouch3()}} alt="pack"/>
                            </div>
                            </div>
                            <div className="price">
                            {`${quantity3} x ${type3} = ${price3}`}
                            </div>
                            <div>
                            <button type="button" className="rest-btn" onClick={()=>{setWashpicked3(false); setIronpicked3(false); setFoldpicked3(false); setPackpicked3(false); setQuantity3(0)}} >Reset</button>
                            </div>
                        </div>
                        <div className="row2">
                            <div className='product1-shirts'>
                            <img src={jeans} alt="Jeans" className="product-image"/>
                                <div className='productdescription'>
                                <p className='title1'>Jeans</p>
                                <p className='description1'>Lorium ipsum is Dummy Text</p>
                                </div>
                            </div>
                            <div>
                            <div className='inputquantity'>
                                <input type="text" maxlength="4" size="1" className='quantityinput' onChange={(e) => {setQuantity4(e.target.value);}} value={quantity4} />
                            </div>
                            </div>
                            <div>
                            <div className="washtype">
                                <img src={washpicked4 ? washselected : wash} onClick={() => {washtouch4()}} alt="wash"/>
                                <img src={ironpicked4 ? ironselected : iron} onClick={() => {irontouch4()}} alt="iron"/>
                                <img src={foldpicked4 ? foldselected : fold} onClick={() => {foldtouch4()}} alt="fold"/>
                                <img src={packpicked4 ? packselected : pack} onClick={() => {packtouch4()}} alt="pack"/>
                            </div>
                            </div>
                            <div className="price">
                            {`${quantity4} x ${type4} = ${price4}`}
                            </div>
                            <div>
                            <button type="button" className="rest-btn" onClick={()=>{setWashpicked4(false); setIronpicked4(false); setFoldpicked4(false); setPackpicked4(false); setQuantity4(0)}} >Reset</button>
                            </div>
                        </div>
                        <div className="row2">
                            <div className='product1-shirts'>
                            <img src={boxers} alt="Boxers" className="product-image"/>
                                <div className='productdescription'>
                                <p className='title1'>Boxers</p>
                                <p className='description1'>Lorium ipsum is Dummy Text</p>
                                </div>
                            </div>
                            <div>
                            <div className='inputquantity'>
                                <input type="text" maxlength="4" size="1" className='quantityinput' onChange={(e) => {setQuantity5(e.target.value);}} value={quantity5} />
                            </div>
                            </div>
                            <div>
                            <div className="washtype">
                                <img src={washpicked5 ? washselected : wash} onClick={() => {washtouch5()}} alt="wash"/>
                                <img src={ironpicked5 ? ironselected : iron} onClick={() => {irontouch5()}} alt="iron"/>
                                <img src={foldpicked5 ? foldselected : fold} onClick={() => {foldtouch5()}} alt="fold"/>
                                <img src={packpicked5 ? packselected : pack} onClick={() => {packtouch5()}} alt="pack"/>
                            </div>
                            </div>
                            <div className="price">
                            {`${quantity5} x ${type5} = ${price5}`}
                            </div>
                            <div>
                            <button type="button" className="rest-btn" onClick={()=>{setWashpicked5(false); setIronpicked5(false); setFoldpicked5(false); setPackpicked5(false); setQuantity5(0)}} >Reset</button>
                            </div>
                        </div>
                        <div className="row2">
                            <div className='product1-shirts'>
                            <img src={joggers} alt="Joggers" className="product-image"/>
                                <div className='productdescription'>
                                <p className='title1'>Joggers</p>
                                <p className='description1'>Lorium ipsum is Dummy Text</p>
                                </div>
                            </div>
                            <div>
                            <div className='inputquantity'>
                                <input type="text" maxlength="4" size="1" className='quantityinput' onChange={(e) => {setQuantity6(e.target.value);}} value={quantity6} />
                            </div>
                            </div>
                            <div>
                            <div className="washtype">
                                <img src={washpicked6 ? washselected : wash} onClick={() => {washtouch6()}} alt="wash"/>
                                <img src={ironpicked6 ? ironselected : iron} onClick={() => {irontouch6()}} alt="iron"/>
                                <img src={foldpicked6 ? foldselected : fold} onClick={() => {foldtouch6()}} alt="fold"/>
                                <img src={packpicked6 ? packselected : pack} onClick={() => {packtouch6()}} alt="pack"/>
                            </div>
                            </div>
                            <div className="price">
                            {`${quantity6} x ${type6} = ${price6}`}
                            </div>
                            <div>
                            <button type="button" className="rest-btn" onClick={()=>{setWashpicked6(false); setIronpicked6(false); setFoldpicked6(false); setPackpicked6(false); setQuantity6(0)}} >Reset</button>
                            </div>
                        </div>
                        <div className="row2">
                            <div className='product1-shirts'>
                            <img src={others} alt="Others" className="product-image"/>
                                <div className='productdescription'>
                                <p className='title1'>Others</p>
                                <p className='description1'>Lorium ipsum is Dummy Text</p>
                                </div>
                            </div>
                            <div>
                            <div className='inputquantity'>
                                <input type="text" maxlength="4" size="1" className='quantityinput' onChange={(e) => {setQuantity7(e.target.value);}} value={quantity7} />
                            </div>
                            </div>
                            <div>
                            <div className="washtype">
                                <img src={washpicked7 ? washselected : wash} onClick={() => {washtouch7()}} alt="wash"/>
                                <img src={ironpicked7 ? ironselected : iron} onClick={() => {irontouch7()}} alt="iron"/>
                                <img src={foldpicked7 ? foldselected : fold} onClick={() => {foldtouch7()}} alt="fold"/>
                                <img src={packpicked7 ? packselected : pack} onClick={() => {packtouch7()}} alt="pack"/>
                            </div>
                            </div>
                            <div className="price">
                            {`${quantity7} x ${type7} = ${price7}`}
                            </div>
                            <div>
                            <button type="button" className="rest-btn" onClick={()=>{setWashpicked7(false); setIronpicked7(false); setFoldpicked7(false); setPackpicked7(false); setQuantity7(0)}} >Reset</button>
                            </div>
                        </div>
                        </div>
                </div>
                <div className="proceedandcancelbtn">
                    <div className="proceedbtn"><button className="proceedbtn101" onClick={opensummary}>Proceed</button></div>
                    <div className="cancelbtn"><button className="cancelbtn101">Cancel</button></div>
                </div>
                {openmodalone && <Summaryone closesummary={setOpenmodalone} orderdata={data}/>}
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default Ordercreation;