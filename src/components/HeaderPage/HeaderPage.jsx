import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom"
import { logout } from '../../redux/auth/auth-operations';
import { getUser } from '../../redux/auth/auth-selectors';


const HeaderPage =()=>{
    const dispatch=useDispatch()
    console.log(useSelector(getUser, shallowEqual));
    const name=useSelector(getUser, shallowEqual).user.name
    const handleLogout=()=>{dispatch(logout())}
    return(
        <>
        <Link to ="/">Main</Link>   
        {name ? <div>{name}<button onClick={handleLogout}>logout</button></div>:<><Link to ="signup">register</Link>
        <Link to ="logIn">login</Link></>}
        <Outlet />
        </>
    )
}

export default HeaderPage