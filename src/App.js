
import { Route, Routes } from 'react-router';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login';
import logo from './Components/Logo.png'
import appRoute from './Approutes';
import { useRoutes } from 'react-router-dom';

function App() {
  const element = useRoutes(appRoute);
  return (
    <div className="container">
      {/* <h1>Digital twin</h1> */}
   
    
    <div className='mt-5 justify-content-center'> 
    {/* <Login></Login> */}
    {/* <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes> */}
   {element}
    </div>
    {/* <div className='mt-5 wpo-lower-footer bg-primary'>© Copyright 2023 MachineryMax.Com. All rights reserved. No part of this web page may be reproduced in any way without the prior written permission of MachineryMax.Com.</div> */}
    </div>
  );
}

export default App;
