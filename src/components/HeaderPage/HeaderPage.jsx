import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom"
import { logout } from '../../redux/auth/auth-operations';
import { getUser } from '../../redux/auth/auth-selectors';
import style from "../HeaderPage/headerPage.module.css"

const HeaderPage =()=>{
    const dispatch=useDispatch()
    const name=useSelector(getUser, shallowEqual).user.email

    const handleLogout=()=>{dispatch(logout())}
    return(
        <>
        <div className={style.header__menu}>
        <NavLink to ="/" className={style.link}style={({ isActive }) =>({color: isActive ? 'blue' : ''})} >Main</NavLink>   
        {name ? <div className={style.userName}>Hello:{name}<button onClick={handleLogout}className={style.logoutBTN}>Logout</button></div>:<><NavLink to ="signup" className={style.link} style={({ isActive }) =>({color: isActive ? 'blue' : ''})}>Register</NavLink>
        <NavLink to ="logIn"className={style.link} style={({ isActive }) =>({color: isActive ? 'blue' : ''})}>Login</NavLink></>}
        </div>
        <Outlet />
       
        </>
    )
}

export default HeaderPage