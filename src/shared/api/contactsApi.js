import axios from "axios";


export const getContacts= async () =>{
    const {data}=await axios.get("https://connections-api.herokuapp.com/contacts")
    return data
}


export const addContact= async (data)=>{
    const {data:result}=await axios.post("https://connections-api.herokuapp.com/contacts", data)
    return result
}

export const deleteContact= async (id)=>{
    const {data:result}=await axios.delete(`https://connections-api.herokuapp.com/contacts/${id}` )
    return result
}