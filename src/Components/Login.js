import React, {  useState } from 'react'
import { useNavigate } from 'react-router';
import { UserAuthentication } from '../Consts/Userauthentication';

const Login = () => {

    const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [error,setError]=useState(false)
  const [formError, setFormError] = useState({});
  const [auth,setAuth] = useState('');
  const navigate=useNavigate()




//   const token = localStorage.getItem("mmx_storage");
//   const [type, setType] = useState("password");
//   const [picon, setPicon] = useState("fa-eye-slash");

  const ChangeHandler = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormError({ ...formError, [name]: "" });
  };

  const handleSubmit = e => {
    //e.preventDefault();


    e.preventDefault();
    
    UserAuthentication.forEach((user) => {
        console.log(user, formValues);
        if(user.username===formValues.username && user.password===formValues.password ){
          navigate('/dashboard')
          localStorage.setItem("token",user.token)
        
      }

    })
    


    let errors = validate(formValues);
    if (Object.values(errors).length === 0)  {
    //   dispatch(login(formValues, navigate, location));
      setFormValues(initialValues);
      
    //   navigate("/dashboard")

    } else {
        setError(true)
        setFormError(errors)};
  };

//   const handleIcon = () => {
//     if (type === "password") {
//       setPicon("fa-eye");
//       setType("text");
//     } else {
//       setPicon("fa-eye-slash");
//       setType("password");
//     }
//   };

  const validate = values => {
    let errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required!!";
    } else if (values.password.length < 6) {
      errors.password = "Password should be atleast 6 characters long";
    }
   
    return errors;
  };



  return (
    <section className="">
   <div className="container">
      <div className="row">
        {/* <div className="col-md-1"><img className="imgsign" src="https://mmaxstorage.blob.core.windows.net/assets/media/webassets/home/Group337.svg" alt="slide-right"/></div> */}
        <div className='col-md-3 col-sm-0'></div>
        <div className="card col-md-6 col-sm-12">
          <div className=" m-5">
            <div className="form-group">
              <h3 className="fw-bold  mb-3">Log In</h3>
              {/* signinlabel  */}
              <label htmlFor="username fw-bold ">Username</label>
              <input
                value={formValues.username}
                onChange={ChangeHandler}
                type="text"
                name="username"
                className="form-control logboxin mt-2"
                placeholder="Enter username"
              />
            </div>
            {error && <p className="text-danger">{formError.username}</p>}
            <div className="form-group mt-1">
              <label htmlFor="password">Password</label>
              <div className="d-flex">
                <input
                  value={formValues.password}
                  name="password"
                  onChange={ChangeHandler}
                  type="password"
                  className="form-control logboxin mt-2"
                  placeholder="Password"
                />
                {/* <span>
                  <button
                    onClick={handleIcon}
                    style={{ marginLeft: "-35px", marginTop: "3px" }}
                    className={`fa ${picon} py-3 pe-5 position-absolute justify-content-end align-item-end`}
                  ></button>
                </span> */}
              </div>
            </div>
           {error && <p className="text-danger">{formError.password}</p>}
           
            <button
              className="d-flex px-5 btn btn-primary mt-3 align theme-btngrad"
            //   disabled={isLoading}
              onClick={handleSubmit}
            >
              {/* {d.signIn.submit} {isLoading && <Spinner />} */}
              {/* Sign In */}
              Sign In
            </button>
            
            {/* {error && <p className="text-danger">{errorMessage}</p>} */}
            {/* <Link to="/account/forgetpassword">
              <h6 className="mt-3 text-orange">{d.signIn.forgotPassword}</h6>
            </Link> */}
          </div>
        </div>

        {/* <div className="col-md-6">
    
          <div className="m-5 mt-0">
            <h3 className="mb-3 mt-5">NOT A MEMBER YET? </h3>
            <p className="mb-2">
              Join MachineryMax.Com to browse all auction items, Bid on
              Machinery, Sell Machinery, and view past auction results.
            </p>

            <p className="m-4">
              - Become a member - FREE! <br />- Access equipment - Sell
              Machinery - Place Bids
            </p>
            <p className="m-4">Receive notices of upcoming auctions</p>
            <Link to="/register">
              <h4 className="text-orange"> Create Free Account</h4>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  </section>
  )
}

export default Login;
