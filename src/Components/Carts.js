import {MDBBtn,MDBCard,MDBCardBody,MDBCardImage,MDBCardText,MDBCol,
  MDBContainer,MDBIcon,MDBRow,MDBTypography} from "mdb-react-ui-kit";
  import React, { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const API = "https://order-management-backend.herokuapp.com";    

export default function Carts(props) {
  const navigate = useNavigate();
  const[cost,setTotalcost] = useState(0.0);
  const {cartlength,setCartLength} = props;
  const [cart,setCart] = useState([]);
  // console.log(props)

  useEffect(()=>{
    getCarts();
  })

function getCarts() {
  fetch(`${API}/getCarts`,{
    method:"GET",
    headers:{
      "user":localStorage.getItem("user")
    }
    
    })
  .then((response)=>response.json())
  .then((data)=>{
    
      const cartItems = data.length;
      setCart(data)
      setCartLength(cartItems);
   
  let TotalCost = 0;
    for(let i=0;i<cartItems;i++){
    TotalCost += data[i].cost;
    }
      setTotalcost(TotalCost)
  })
}

    

      const deleteCart = (cartID) => {
        fetch(`${API}/deleteCarts/${cartID}`,{
          method: "DELETE",
          mode:"no-cors",
        })
        .then((response)=>{
          console.log(response);
          getCarts();
        })
        .catch((error) =>console.log(error));
      };

    
    return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>

        <MDBContainer className="py-5 h-100" >
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
          <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          {cartlength} items
                        </MDBTypography>
                      </div>
    

                      <hr className="my-4" />
    {cart ?
      cart.map((cartData)=>(
        
        <MDBRow className="mb-4 d-flex justify-content-between align-items-center" key={cartData._id}>
        <MDBCol md="2" lg="2" xl="2">
        <MDBCardImage
        src={cartData.src}
        fluid className="rounded-3" alt="food" />
        </MDBCol>
        <MDBCol md="3" lg="3" xl="3">
        <MDBTypography tag="h6" className="text-black mb-0">
        {cartData.food}
        </MDBTypography>
        </MDBCol>
        <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
        <MDBBtn color="link" className="px-2">
        <MDBIcon fas icon="minus" />
        </MDBBtn>
        
        <MDBBtn color="link" className="px-2">
        <MDBIcon fas icon="plus" />
        </MDBBtn>
        </MDBCol>
        <MDBCol md="3" lg="2" xl="2" className="text-end">
        <MDBTypography tag="h6" className="mb-0">
        ₹ {cartData.cost}
        </MDBTypography>
        </MDBCol>
        <MDBCol md="1" lg="1" xl="1" className="text-end">
        <a href="#!" className="text-muted">
        <MDBIcon fas icon="times" />
        </a>
        </MDBCol>
        <button style={{padding:0,textDecoration:"none",border:"none",background:"none"}} onClick={() => deleteCart(cartData._id)}>
        
        <DeleteIcon color="error"/>
        </button>
        
        <Button  size="small" variant ="contained"   onClick={() => navigate(`/order/${cartData.food}/${cartData.cost}`)} style={{ background:"#b30086", margin:" 1px 15px", maxWidth:"100%", fontSize:"12px", height:"20px",alignItems:"center"}}>Order</Button>
        </MDBRow>
    
    )):
    <div>"Sorry! There is no cart added in your account"</div>
    }
    
                          <hr className="my-4" />
                        
                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText tag="a" href="/cards" className="text-body">
                            
                              <MDBIcon fas icon="long-arrow-alt-left me-2"  /> Back
                            to shop
                              
                          </MDBCardText>
                        </MDBTypography>
                      </div>
        </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                        Summary
                      </MDBTypography>
    
                      <hr className="my-4" />
    
                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          items- {cartlength}
                        </MDBTypography>
                        <MDBTypography tag="h5">₹ {cost}</MDBTypography>
                      </div>
    
                      
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    );
    
    }
    