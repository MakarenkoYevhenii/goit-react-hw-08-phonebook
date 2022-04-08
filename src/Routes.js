import App from "components/App"
import Signup from "./components/RegisterPage/RegisterPage"
import HeaderPage from "./components/HeaderPage/HeaderPage"
import Login from "./components/LoginPage/LogingPage"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { current } from "./redux/auth/auth-operations"
const { Routes, Route } = require("react-router-dom")

const MyRoutes=()=>{
    const dispatch=useDispatch()
    useEffect(()=> {
        dispatch(current());
      }, [dispatch])
    
    return(
        <Routes>
            <Route path="/" element={<HeaderPage />}>
            <Route index element={<App />}></Route>
            <Route path="signup" element={<Signup />}/>
            <Route path="login" element={<Login />}/>
            </Route>
        </Routes>
    )
}

export default MyRoutes