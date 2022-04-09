import { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
import { getUser } from '../../redux/auth/auth-selectors';
import style from './RegisterPage.module.css'

const initialState = {
  name: '',
  password: '',
  email: '',
};
const RegisterPage = () => {
  const dispatch=useDispatch()

  console.log(useSelector(getUser, shallowEqual));
  const [form, setForm] = useState({ ...initialState });
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signup(form))
    setForm({...initialState});
  };
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,

    }));
  };

  return ( 
    <div className={style.wrapper}>
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.input}>
        <label htmlFor="">Name</label>
        <input value={form.name} onChange={handleChange} type="text" name="name" />
      </div>

      <div className={style.input}>
        <label htmlFor="">Password</label>
        <input value={form.password} onChange={handleChange} type="password" name="password" />
      </div>
      <div className={style.input}>
        <label htmlFor="">E-mail</label>
        <input value={form.email}  onChange={handleChange}  type="email" name="email" />
       
      </div>
      <button type="submit" className={style.btn}>Submit</button>
    </form>
    </div>
  );
};

export default RegisterPage;
