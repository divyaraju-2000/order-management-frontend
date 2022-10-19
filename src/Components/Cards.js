import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useState,useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';


const API = "https://order-management-backend.herokuapp.com";
const Cards = (props) => {
  
  useEffect(() =>{
    getFood();
    updateCartNo();
  });

  const[food,setFood] = useState([]);
const{carts,setCarts} = props;
const navigate = useNavigate();


const changeColor = (id) =>{
  console.log(id);
      patchData(id,true);
  };
  

const addToCart = (item) =>{
  // console.log(item);
  const data = {
    "food":item.name,
    "cost":item.cost,
    "src":item.src,
    "user":localStorage.getItem("user")
  }
 
          fetch(`${API}/updateCarts`,{
            method:"POST",
            headers:{
              "Content-type":"application/json",
            },
            body:JSON.stringify(data),
          })
          .then((response)=>{
            response.json();
            updateCartNo();
            navigate("/carts")
          })
          .catch((error)=>console.log(error));
          // setCarts((currentCart) => [...currentCart, item]);
          // console.log(carts)
          // console.log(cartId,item._id)

} 
  
const updateCartNo =() => {
      fetch(`${API}/getCarts`,{
        method:"GET",
        headers:{
          "user":localStorage.getItem("user")
        }
      })
      .then((response)=>response.json())
      .then((data)=>{
        console.log(data);
        const cartItems = data.length;
        setCarts(cartItems)
      console.log(cartItems,carts);
     
      
      })
}

const patchData =(id,like) => {

  const updateData = {
    likes: like,
  }
  
  fetch(`${API}/updatefood/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updateData),
    headers: {
      "Content-type" : "application/json; charset=UTF-8",
    },
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
     getFood();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  }

  const getFood = () =>{
    const token = localStorage.getItem("access_token");
    console.log(token)
    fetch(`${API}/food`,{
      method:"GET",
      headers:{
        "x-auth-token":token,
      }
    })
    .then((data)=>data.json())
    .then((fb)=>setFood(fb));
  }

  const onDelete = (id) => {
    const token = localStorage.getItem("access_token");
    fetch(`${API}/deletefood/${id}`,{
      method:"DELETE",
      headers:{
        "x-auth-token":token
      },
    })
    .then((res)=>res.json())
    .then((status)=>{
      console.log(status);
      getFood();
    })
  };

  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
     return(
        <div className="foodCards" style={{marginTop:"49px"}}>
        {food.map((fb) => (


        
         <Card sx={{ maxWidth: 345 }} key={fb._id}>
      <CardMedia
        component="img"
        height="140"
        image={fb.src}
        alt="green iguana"
      />
      <CardContent>
        <div className="cardCost">
        <Typography gutterBottom variant="h5" component="div">
          {fb.name}
        </Typography>
        <p>₹{fb.cost}</p>
        </div>
        <Typography variant="body2" color="text.secondary">
          {fb.description}
        </Typography>
      </CardContent>
      
      <div className = "cardButton">
      <CardActions style={{padding:"0px"}}>
      
        <Button onClick={() => changeColor(fb._id)} >
        {fb.likes ? (
          <FavoriteIcon style={{ color:"red", borderColor:"black"}} />
        ) :(
          <FavoriteBorderIcon style={{color:"red"}}/>
        )}
        </Button>
      </CardActions>
      {isAdmin?
      <button onClick ={() =>onDelete(fb._id)} style={{textDecoration:"none",border:0, background:"none",padding:0}}><DeleteIcon /></button> : null
    }
    </div>
          <div className = "cardButton">
      <Button  size="small" variant ="contained"   onClick={() => navigate(`/foodDetails/${fb._id}`)} style={{ background:" #b300b3", padding:"0px", width:"100px", fontSize:"12px", height:"30px"}}>Order now</Button>
     <Button  size="small" variant ="contained"   onClick={() => addToCart(fb)} style={{ background:" #a3a3c2", padding:"0px", width:"100px", fontSize:"12px", height:"30px"}}>Add to Cart</Button>
      </div>
    </Card>
    

))}
        </div>
     )
}
export default Cards;