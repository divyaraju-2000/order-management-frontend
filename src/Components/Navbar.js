import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {useNavigate } from 'react-router-dom';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function Navbar(props) {

  const navigate = useNavigate();
  const {totalLength}=props;
  // console.log("nav",props.totalLength)
 
  const token = localStorage.getItem("access_token");
  return (
    <div >

      <AppBar position="fixed" style={{ background: "#8000ff" }} >
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
                 
                  {totalLength}</sub>
                 
            
                </Button>
              }
            
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
