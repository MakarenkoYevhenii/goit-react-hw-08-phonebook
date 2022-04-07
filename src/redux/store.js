import { configureStore } from "@reduxjs/toolkit"
import contactsReducer from "./contacts/contacts-slice"
import authReducer from "./auth/auth-slice"


const store =configureStore({
    
    reducer:{auth:authReducer,
        contacts:contactsReducer}
})


export default store