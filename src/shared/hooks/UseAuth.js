import {getLogin}from "../../redux/auth/auth-selectors"
const { useSelector, shallowEqual } = require("react-redux")

 const UseAuth=()=>{
    const isLogin=useSelector(getLogin,shallowEqual)
    return isLogin
}

export default UseAuth