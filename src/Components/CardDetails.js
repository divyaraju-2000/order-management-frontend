import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useParams,useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export default function CardDetails() {
  const API = "https://order-management-backend.herokuapp.com"
  const params = useParams();
  const [view,setView] = useState([]);
useEffect(() => {
  fetch(`${API}/food/${params.id}`)
  .then((response) => response.json())
  .then((data) => setView(data))
}, [params.id]);
const navigate = useNavigate();


  return (
    <>
   

    <Card sx={{ maxWidth: 900, margin:"auto", objectFit:"cover", marginTop:"45px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={view.src}
          alt="green iguana"
        />
        <CardContent>
        <div className="cardCost">
          <Typography gutterBottom variant="h5" component="div">
            {view.name}
          </Typography>
          <p><b>${view.cost}</b></p>
          </div>
          <Typography variant="body2" color="text.secondary">
            {view.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {view.likes ? (
          <FavoriteIcon style={{ color:"red"}} />
        ) :(
          <FavoriteBorderIcon/>
        )}
        <Button size="small" color="primary">
          available items - {view.available}
        </Button>
      </CardActions>
      <Button  size="small" variant ="contained"   onClick={() => navigate(`/order/${view.name}/${view.cost}`)} style={{ background:"#6600cc", padding:"0px", width:"100px", fontSize:"12px", height:"30px"}}>Order now</Button>

    </Card>
    
   
    </>
  );
}
