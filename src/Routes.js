import App from "components/App"
import Signup from "./components/RegisterPage/RegisterPage"
const { Routes, Route } = require("react-router-dom")

const MyRoutes=()=>{
    return(
        <Routes>
            <Route index element={<App />}></Route>
            <Route path="signup" element={<Signup />}></Route>
        </Routes>
    )
}

export default MyRoutes