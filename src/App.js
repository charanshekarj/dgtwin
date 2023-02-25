
import { Route, Routes } from 'react-router';
import './App.scss';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login';
import logo from './Components/Logo.png'
import appRoute from './Approutes';
import { useRoutes } from 'react-router-dom';
import Header from './Components/Dashboard/Header';
import Footer from './Components/Dashboard/Footer';

function App() {
  // const element = useRoutes(appRoute);
  return (
    <div className="">
      {/* <h1>Digital twin</h1> */}
   
    <Header/>
    <div className='mt-5 justify-content-center'> 
    {/* <Login></Login> */}
   
    <div style={{minHeight:"60vh"}}>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
   {/* {element} */}
    </div>
    <footer className='footer-style'>
      <Footer />
    </footer>
    {/* <div className='mt-5 wpo-lower-footer bg-primary'>© Copyright 2023 MachineryMax.Com. All rights reserved. No part of this web page may be reproduced in any way without the prior written permission of MachineryMax.Com.</div> */}
    </div>
  );
}

export default App;
