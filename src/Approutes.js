import Dashboard from "./Components/Dashboard/Dashboard";
import Default from "./Components/Layout/Default";
import Login from "./Components/Login";

const appRoute = [
    {
        element:<Default/>,
        children:[
            {
                path:'/',
                element:<Login/>
            },
            {
                path:'/dashboard',
                element:<Dashboard/>
            }
        ]
    }
]
export default appRoute;