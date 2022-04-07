import axios from "axios";

const signup =async(data)=>{
    const result =await axios.post("https://connections-api.herokuapp.com/users/signup",data)
    return result
}
const authApi={
    signup
}
export default authApi