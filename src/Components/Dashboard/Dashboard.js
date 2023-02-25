import React, {useEffect, useState} from 'react'
import Footer from './Footer'
import Header from './Header'
import Chart from "./Chart";
import { useNavigate } from 'react-router';
import office from './office.png';
import axios from 'axios';
const Dashboard = () => {
  


  const [open, setOpen] = useState(false);


//   const navigate=useNavigate();
//   const logoutHandler=()=>{
//       localStorage.removeItem("token");
//       navigate('/');
//   }

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

    const openChart = (id) => {
      
      open ? setOpen(false) : setOpen(true);
      
    }

    useEffect(()=>{
        axios.get("")
        .then((res)=>{
            console.log(res.data)
        })
    })

    // const submitHandler = e => {
    //     e.preventDefault();
    //     let validated = validateDetails(formValues);
    //     const str = id.join();
    //     const fullPhoneNumber = parseInt(
    //       `${d.phoneCountryCodes[inputPhoneCode.slice(0, 2)]}${
    //         formValues.mobilephone
    //       }`
    //     );
    //     if (Object.keys(validated).length === 0) {
    //       setLoading(true);
    //       const data = {
    //         cultureUIName: "en",
    
    //         cultureName: "en",
    
    //         fboUserName: formValues.username,
    
    //         actingUserName: formValues.username,
    
    //         items: {
    //           AddedCategories: str,
    
    //           agreements: "True",
    
    //           City: formValues.city,
    
    //           confirmEmail: formValues.confirmemail,
    
    //           ConfirmPassword: formValues.cpassword,
    
    //           Country: formValues.country,
    
    //           Email: formValues.email,
    
    //           FirstName: formValues.firstname,
    
    //           LastIP: "192.168.1.1",
    
    //           LastName: formValues.lastname,
    
    //           Newsletter: formValues.newsletter,
    
    //           Password: formValues.password,
    
    //           StateRegion: formValues.stateregion,
    
    //           Street1: formValues.street1,
    
    //           Street2: formValues.street2,
    
    //           UserName: formValues.username,
    
    //           ZipPostal: formValues.zippostal,
    
    //           MMX_HomePhone: formValues.homephone,
    
    //           MMX_MobilePhone: fullPhoneNumber,
    
    //           "How did you Hear about us": formValues.hearabout,
    
    //           Industry: formValues.industry,
    //         },
    
    //         raw: null,
    //       };
    
    //       axios
    //         .post("user/register", data)
    //         .then(() => {
    //           const userData = { phoneUpdated: false, emailUpdated: false };
    //           navigate(`/user-verification?username=${formValues.username}`, {
    //             state: { data: userData },
    //           });
    //           setFormValues(initialValues);
    //           setLoading(false);
    //         })
    //         .catch(err => {
    //           setLoading(false);
    //           setError(true);
    //           setErrorMessage(err.response.data.errorMessage);
    //         });
    //     } else {
    //       setFormError(validateDetails(formValues));
    //     }
    //   };
    


  return (
    <>
  <div className='container'  >
                    
   <div className='mb-5'>
    <img  style={{height:"500px",width:"1000px"}} src={office}></img>
    {/* <div style={{backgroundImage:`./${office}`,height:"500px",width:"1500px"}}/> */}
   </div>
       { /* <button className='theme-btngrad btn' onClick={logoutHandler}>Logout</button> */}
    

    <div className=' w-75 container-border content'>
  
    <table className="table" >
  <thead>
    <tr className='text-center' style={{backgroundColor:"#40C1AC"}}>
      <th scope="col">Sensor</th>
      <th scope="col">Current Temperature</th>
      <th scope="col">Current Humidity</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((item,i)=>(
            <tr className='text-center ' onClick={() => setOpen(!open)} >
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

    {open ? <Chart /> : ''}
    
    </>
  )
}

export default Dashboard
