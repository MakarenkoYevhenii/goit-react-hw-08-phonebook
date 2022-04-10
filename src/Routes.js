import MainPage from "./pages/MainPage/MainPage"
import Signup from "./pages/RegisterPage/RegisterPage"
import HeaderPage from "./components/HeaderPage/HeaderPage"
import Login from "./pages/LoginPage/LoginPage"

import PrivateRoute from "./shared/components/PrivateRoute/PrivateRoute";
import PublicRoute from "./shared/components/PublicRoute/PublicRoute";
const { Routes, Route } = require("react-router-dom")

const MyRoutes=()=>{



    return(
        <Routes>
            <Route path="/" element={<HeaderPage />}>
            <Route element={<PrivateRoute />}>
            <Route index element={<MainPage />}></Route>
            </Route>
            <Route element={<PublicRoute />}>
            <Route path="signup" element={<Signup />}/>
            <Route path="login" element={<Login />}/>
            </Route>
            </Route>
        </Routes>
    )
}

export default MyRoutes