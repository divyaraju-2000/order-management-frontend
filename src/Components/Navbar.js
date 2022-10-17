import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {useNavigate } from 'react-router-dom';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const API = "https://order-management-backend.herokuapp.com";    


  const[cost,setTotalcost] = useState(0.0);
      const [cart,setCart] = useState([]);
  const [length, setLength] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {

    //getting carts data
      fetch(`${API}/getCarts`,{
        method:"GET"
      })
      .then((response)=>response.json())
      .then((data)=>{
        const cartItems = data.length;
        localStorage.setItem("length",cartItems)
        setCart(data)
      console.log(cartItems);
    
      let TotalCost = 0;
      for(let i=0;i<cartItems;i++){
        TotalCost += data[i].cost;
      }
          console.log(TotalCost)
          setTotalcost(TotalCost)
      })
    
    const length = JSON.parse(localStorage.getItem("length"))
    setLength(length);
  },[length])
  console.log(length)
  const token = localStorage.getItem("access_token");
  return (
    <div >

      <AppBar position="fixed" style={{ background: "#8000ff", marginTop: "5px" }} >
        <Toolbar style={{ minHeight: "40px", margin: 0 }}>
          <div className="navbar" style={{ width: "100%", display: "flex", justifyContent: "space-between", padding: 0, textAlign: "center" }}>
            <div className="title">

              <FastfoodIcon style={{ paddingRight: "2px", marginTop: "3px" }} />
              <h3 style={{ fontFamily: "sans-serif" }}>Spicet</h3>

            </div>
            <div>
              <Button color="inherit" >Help</Button>
              <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
              {token&&
              <Button onClick={()=> navigate("/carts")} style={{padding:"6px 8px"}}>
                <b>
                
                <AddShoppingCartIcon style={{ fontSize: "23px", textAlign: "center", padding:0, color:"white", alignItems:"center" }} /></b>
                
                <sub style={{ background: " #f2f2f2", padding: "1px", textDecoration: "none", borderRadius: "35%", lineHeight: "1.2em", color: "black",fontSize:"12px", alignItems: "center" }}>
                  
                  {length}</sub>
            
                </Button>
              }
            
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// export default Navbar;