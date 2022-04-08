import { useState } from 'react';

const initialState = {
  name: '',
  password: '',
  email: '',
};

const RegisterPage = () => {
  const [form, setForm] = useState({...initialState});
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">name</label>
        <input value={form.name} type="text" name="name" />
      </div>

      <div>
        <label htmlFor="">password</label>
        <input value={form.password} type="password" name="password" />
      </div>
      <div>
        <label htmlFor="">email</label>
        <input value={form.email} type="email" name="email" />
        <button type='submit' >Submit</button>
      </div>
    </form>
  );
};

export default RegisterPage;
