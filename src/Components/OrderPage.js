import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';



export default function OrderPage(){
  
  
  const[total,setTotal] = useState(0.0)
  const navigate = useNavigate();
  const params = useParams();
  // console.log("params",params.name)
  const API = "https://order-management-backend.herokuapp.com";
  const formik = useFormik({
    initialValues : {
      name:"",
      phone:"",
      address:"",
      cost:params.cost,
      food: params.name,
      ordered_items:""
        
    },
    
    onSubmit: 
    
    (values) => {console.log("onSubmit",values)
    navigate("/cards")
    

  },
  });

  
  const updateDetails = (values) =>{

    // console.log(values)

    const data = {
        name:values.name,
        phone:values.phone,
        address:values.address,
        food:values.food,
        cost:values.cost,
        ordered_items:values.ordered_items,
        total_cost:values.ordered_items * params.cost,
        ordered_time:new Date()
    }
        fetch(`${API}/updateuser`,
          {
            method:"POST",
            headers:{
              "Content-type":"application/json",
            },
            body: JSON.stringify(data),
          }
        )
        .then((res) => res.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

  };



  function onChange(e){
    console.log(e.target.value,formik.values.ordered_items)

        setTotal(e.target.value)
}
console.log(total)
    return(
      <div className='orderPage'>
    <form onSubmit = {formik.handleSubmit} style={{marginTop:"60px",alignItems:"center", color:"black"}}>

        <center>
            <h1>Order Food</h1>
         <Stack
      
      sx={{
        width: '25ch',
        
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
        
   <TextField
          id="standard-password-input"
          label="Name"
          name="name"
          variant="standard"
          value={formik.values.name}
          onChange={formik.handleChange}

        />
    <TextField
          id="standard-password-input"
          label="Phone"
          name="phone"
          variant="standard"
          value={formik.values.phone}
          onChange={formik.handleChange}

        />

    <TextField
          id="standard-password-input"
          label="Address"
          name="address"
          variant="standard"
          value={formik.values.address}
          onChange={formik.handleChange}

        />

<TextField
          id="standard-password-input"
          label="Food"
          name="food"
          variant="standard"
          value={formik.values.food}
          onChange={formik.handleChange}

        />

      <TextField
          id="standard-password-input"
          label="Cost"
          name="cost"
          variant="standard"
          value={formik.values.cost}
          onChange={formik.handleChange}

        />
      
 <TextField
          id="standard-password-input"
          label="Quantity"
          name="ordered_items"
          variant="standard"
          value={formik.values.ordered_items}
           inputProps={{

              onInput:e => onChange(e)
            }}
          onChange={
            formik.handleChange
            
            
          }/>

<TextField
          id="standard-password-input"
          label="Total Cost"
          name="total_cost"
          variant="standard"
          value={total*params.cost}
          
          onChange={formik.handleChange}
         

        />



        <br></br>
        <button type="submit" style={{background:"#ff1a75", color:"whitesmoke", border:0, borderRadius:"20px", padding:"10px"}} onClick={() =>updateDetails(formik.values)}>SUBMIT</button>
        </Stack>
        </center>
        </form>
        </div>      
    )
}