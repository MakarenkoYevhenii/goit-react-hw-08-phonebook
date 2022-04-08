import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">email</label>
        <input
          value={form.email}
          onChange={handleChange}
          type="text"
          name="email"
        />
      </div>
      <div>
        <label htmlFor="">password</label>
        <input
          value={form.password}
          onChange={handleChange}
          type="text"
          name="password"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginPage;
