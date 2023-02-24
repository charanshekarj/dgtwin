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
    <div className='container'>
    <div className=' w-75 container-border content'>
    <table class="table  ">
  <thead>
    <tr className='text-center table-info '>
      <th scope="col">Sensor</th>
      <th scope="col">Temperature</th>
      <th scope="col">Humidity</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((item,i)=>(
            <tr className='text-center '>
            <th scope="row" onClick={()=>(alert(`Hiiiii ${i}`))}>{item.id}</th>
            <td>{item.temp}</td>
            <td>{item.humidity}</td>
          </tr>
        ))
    }
   
 
  </tbody>
</table>
    </div>
    </div>

    
    </>
  )
}

export default Dashboard
