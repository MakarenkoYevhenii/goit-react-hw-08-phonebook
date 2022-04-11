import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import style from './LoginPage.module.css'

const { useState } = require('react');
const initialState = {
  password: '',
  email: '',
};
const LoginPage = () => {
    const dispatch=useDispatch()
  const [form, setForm] = useState({ ...initialState });
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(form))
  };
  const handleChange = ({target} ) => {
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
        <label htmlFor="">E-mail</label>
        <input
          value={form.email}
          onChange={handleChange}
          type="text"
          name="email"
        />
      </div>
      <div className={style.input}>
        <label htmlFor="">Password</label>
        <input
          value={form.password}
          onChange={handleChange}
          type="text"
          name="password"
        />
      </div>
      <button type="submit"className={style.btn}>Submit</button>
    </form>
    </div>
  );
};

export default LoginPage;
