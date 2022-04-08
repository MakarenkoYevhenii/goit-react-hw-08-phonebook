import { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
import { getUser } from '../../redux/auth/auth-selectors';


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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">name</label>
        <input value={form.name} onChange={handleChange} type="text" name="name" />
      </div>

      <div>
        <label htmlFor="">password</label>
        <input value={form.password} onChange={handleChange}  type="password" name="password" />
      </div>
      <div>
        <label htmlFor="">email</label>
        <input value={form.email}  onChange={handleChange}  type="email" name="email" />
       
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterPage;
