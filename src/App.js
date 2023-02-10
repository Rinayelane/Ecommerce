import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Support from "./Components/Support";
import Feedback from "./Components/Feedback";
import Card from "./Components/Card"
import "./Components/style.css";
import Navbar from "./Components/Navbar";
import menu from "./Components/image/menu.png"

function App() {
  const[data,setData] = useState([]);
  const[cardData,setCardData] = useState([]);
  const[flag,setFlag] = useState(false);
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((response)=>{
     return response.json();
    })
    .then((response)=>{
     setData(response);
    })
    .catch((error)=>{
    console.log("Error : "+error);
    })
    setFlag(false)
  },[])
  
  return (
    <div className="App">
    
      <div className="header">
        
          <div className="navbar flex">
            <div className="flex">
              <h2>Online Shopping</h2>
            </div>
            <Navbar/>
            <button className="menu" onClick={()=>setFlag(!flag)}><img src={menu}/></button>
          </div>
          {
            flag?
            <div className="menuItem">
            <nav className="navCol">
            <ul className="flex1">
                <li>
                  <Link className="navItem" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="navItem" to="/Components/Product">
                    Product
                  </Link>
                </li>
                <li>
                  <Link className="navItem" to="/Components/Support">
                  About
                  </Link>
                </li>
                <li>
                  <Link className="navItem" to="/Components/Feedback">
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link className="navItem" to="/Components/Card">
                     Cart
                  </Link>
                </li>
              </ul>
            </nav>
            </div>:""
          }
          <Routes>
            <Route exact path="/" element={<Home data={data} cardFun={[setCardData,cardData]} />} />
            <Route path="/Components/Product" element={<Product data={data} cardFun={[setCardData,cardData]}/>} />
            <Route path="/Components/Support" element={<Support />} />
            <Route path="/Components/Feedback" element={<Feedback />} />
            <Route path="/Components/Card" element={<Card data={[cardData,setCardData]}/>} />
          </Routes>
        
      </div>
    </div>
  );
}

export default App;
