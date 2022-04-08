import App from "components/App"
import Signup from "./components/RegisterPage/RegisterPage"
import HeaderPage from "./components/HeaderPage/HeaderPage"
const { Routes, Route } = require("react-router-dom")

const MyRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<HeaderPage />}>
            <Route index element={<App />}></Route>
            

            <Route path="signup" element={<Signup />}/>
            </Route>
        </Routes>
    )
}

export default MyRoutes