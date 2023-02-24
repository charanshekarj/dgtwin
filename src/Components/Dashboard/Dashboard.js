import React from 'react'
import Footer from './Footer'
import Header from './Header'



const Dashboard = () => {
    const data= [
      {
        id:1,
        temp:90,
        humidity:101,
        time:2
      },
      {
        id:2,
        temp:91,
        humidity:102,
        time:3
      },
      {
        id:3,
        temp:91,
        humidity:102,
        time:5
      },

    ]
  return (
    <>
    
    <div>
    <table class="table  table-striped">
  <thead>
    <tr>
      <th scope="col">Sensor</th>
      <th scope="col">Temperature</th>
      <th scope="col">Humidity</th>
      {/* <th scope="col">Handle</th> */}
    </tr>
  </thead>
  <tbody>
    {
        data.map((item,i)=>(
            <tr>
            <th scope="row" onClick={()=>(alert(`Hiii ${i}`))}>{item.id}</th>
            <td>{item.temp}</td>
            <td>{item.humidity}</td>
            {/* <td>@mdo</td> */}
          </tr>
        ))
    }
   
 
  </tbody>
</table>
    </div>
    
    </>
  )
}

export default Dashboard
