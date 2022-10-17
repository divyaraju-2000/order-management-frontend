import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import { Button} from '@mui/material';





export default function LandingPage(){
  const navigate = useNavigate();
    return(
        <div style={{marginTop:"40px"}}>

<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.wp.com/dinepartner.com/blog/wp-content/uploads/2019/12/fastfood.jpg?fit=750%2C342&ssl=1"
          alt="First slide"
          style={{objectFit:"cover"}}
        />
        <Carousel.Caption>
           <Button  size="small" variant ="contained"   onClick={() => navigate("/login")} style={{ background:"#8000ff", padding:"0px", width:"120px", fontSize:"19px", height:"50px"}}>Login</Button>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d3ox4wjkl7mf3m.cloudfront.net/feed_story/step/ONEPssBGqS33yZi4lLx7fjQ6RsPCkx8SXDqF65Rx.jpeg"
          alt="Second slide"
          style={{objectFit:"cover"}}
        />

        <Carousel.Caption style={{float:"initial"}}>
          <h3 style={{fontFamily:"cursive", color:"white"}}><b><i>Spicy</i></b></h3>
          <Button  size="small" variant ="contained"   onClick={() => navigate("/login")} style={{ background:"#006600", padding:"0px", width:"120px", fontSize:"15px", height:"50px"}}>Login</Button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/02/89/80/03/360_F_289800335_l89vweOGANYIhKuVHRgpGh5QRwKQMsQx.jpg"
          alt="Third slide"
          style={{objectFit:"cover"}}
        />

        <Carousel.Caption>
          
        <Button  size="small" variant ="contained"   onClick={() => navigate("/login")} style={{ background:"#f2f2f2", padding:"0px", width:"110px", fontSize:"15px", height:"40px", color:"black"}}>Login</Button>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        
<div className="rowCards">
<Card sx={{ maxWidth: 345, background:"lightcoral", boxShadow:0}} className="columnCards">
      <CardMedia
        style = {{ margin: "auto",}}
        component="img"
        alt="green iguana"
        height="140"
        className="images"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmnACGRjcVHqBatmS12H_M2yb5q7b5wF7eg&usqp=CAU"
      />
    
      <CardContent style={{ textAlign:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
        No Minimum order
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Order in for yourself or for the group, with no restrictions on order value
        </Typography>
      </CardContent>
     
    </Card>

    <Card sx={{ maxWidth: 345, background:"lightcoral", boxShadow:0}} className="columnCards">
      <CardMedia
        style = {{ margin: "auto", }}
        component="img"
        alt="green iguana"
        height="140"
        className="images"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw9eIFBld3boXNA_AoVd2kNVpC3d1WITHXkQ&usqp=CAU"
      />
      <CardContent style={{ textAlign:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
        Live Tracking
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Know where your order is at all times, from the restaurant to your doorstep
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 345, background:"lightcoral", boxShadow:0}} className="columnCards">
      <CardMedia
        style = {{ margin: "auto",}}
        component="img"
        alt="green iguana"
        height="140"
        className="images"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTllseOuMjfLz9wE0kQRtV1IdxojsPZKFcxRg&usqp=CAU"
      />
      <CardContent style={{ textAlign:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
        Fast Delivery
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Experience superfast delivery for food delivered fresh & on time
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}