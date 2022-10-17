
import './App.css';
import LandingPage from "./Components/LandingPage"
import Cards from "./Components/Cards";
import {Routes,Route,Navigate} from "react-router-dom";
import Navbar from "./Components/Navbar";
import CardDetails from './Components/CardDetails';
import OrderPage from './Components/OrderPage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useState } from 'react';
import Carts from './Components/Carts';



function App() {
  const[carts,setCarts]=useState([]);
  return (
    <div>
      <Navbar/>
      <Routes>
       
      <Route path="/" element={<><LandingPage/></> }/>
      {/* <Route path="/" element = {<LandingPage/>}/> */}

      <Route path="/foodDetails/:id" element = {<CardDetails/>}/>
      <Route path="/cards" element = {
    //  <ProtectedRoute>

      <Cards carts={carts} setCarts={setCarts}/>
    //  </ProtectedRoute>
      
    } />
    <Route path="/carts" element={<Carts carts={carts}/>}/>
      <Route path="/order/:name/:cost" element = {<OrderPage/>}/>
      <Route path="/login" element = {<Login/>}/>
      {/* <Route path="/" element ={ <Navigate replace to="/login"/> }/> */}
      <Route path="/signup" element = {<Signup/>}/>

      </Routes>
    </div>
  );
}

function  ProtectedRoute({children}){
  const isAuth =localStorage.getItem('access_token');
  return isAuth? children : <Navigate replace ="/signup" />
}
export default App;
