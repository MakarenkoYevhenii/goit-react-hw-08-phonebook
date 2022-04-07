import { useState } from 'react';

const initialState = {
  name: '',
  password: '',
  email: '',
};

const RegisterPage = () => {
  const [form, setForm] = useState({...initialState});

  return (
    <form>
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
      </div>
    </form>
  );
};

export default RegisterPage;
