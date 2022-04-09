import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom"
import { logout } from '../../redux/auth/auth-operations';
import { getUser } from '../../redux/auth/auth-selectors';
import style from "../HeaderPage/headerPage.module.css"

const HeaderPage =()=>{
    const dispatch=useDispatch()
    const name=useSelector(getUser, shallowEqual).user.name
    const handleLogout=()=>{dispatch(logout())}
    return(
        <>
        <div className={style.header__menu}>
        <Link to ="/" className={style.link}>Main</Link>   
        {name ? <div className={style.userName}>Hello:{name}<button onClick={handleLogout}className={style.logoutBTN}>Logout</button></div>:<><Link to ="signup" className={style.link}>Register</Link>
        <Link to ="logIn"className={style.link}>Login</Link></>}
        </div>
        <Outlet />
       
        </>
    )
}

export default HeaderPage