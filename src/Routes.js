import App from "components/App"
import Signup from "./components/RegisterPage/RegisterPage"
import HeaderPage from "./components/HeaderPage/HeaderPage"
import Login from "./components/LoginPage/LogingPage"
import { shallowEqual, useSelector } from "react-redux"
import { getUser } from "./redux/auth/auth-selectors"
const { Routes, Route } = require("react-router-dom")

const MyRoutes=()=>{
  
    const userLogin=useSelector(getUser,shallowEqual).isLogin


    return(
        <Routes>
            <Route path="/" element={<HeaderPage />}>
            {userLogin?<><Route index element={<App />}></Route></>:""}
            <Route path="signup" element={<Signup />}/>
            <Route path="login" element={<Login />}/>
            </Route>
        </Routes>
    )
}

export default MyRoutes