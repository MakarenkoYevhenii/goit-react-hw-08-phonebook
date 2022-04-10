import { Navigate, Outlet, useLocation } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";

const PrivateRoute=()=>{
    const isLogin=UseAuth()
    const location =useLocation()
    if (!isLogin){
         return <Navigate to="/login" state={{from: location}} />

    }
    return <Outlet/>
}

export default PrivateRoute