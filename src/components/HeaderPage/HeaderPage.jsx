import { Link, Outlet } from "react-router-dom"


const HeaderPage =()=>{
    return(
        <>
        <Link to ="/">Main</Link>
 
        <Link to ="signup">register</Link>
        <Outlet />
        </>
    )
}

export default HeaderPage