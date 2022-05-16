import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authOperation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from '../Registration/Registration.module.css';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const notify = () => toast.warn('All fields must be filled');

  const onHandleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (!name || !email || !password) {
      notify();
      return;
    }
    dispatch(register({ name, email, password }));
    reset();
  };

  return (
    <main>
      <ToastContainer theme="dark" position="top-center" autoClose={3000} />
      <form
        className={styles.registerForm}
        autoComplete="off"
        onSubmit={onHandleSubmit}
      >
        <h1 className={styles.form_title}>Registration</h1>
        <div className={styles.form_field}>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            value={name}
            onChange={onHandleChange}
          />
        </div>
        <div className={styles.form_field}>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            value={email}
            onChange={onHandleChange}
          />
        </div>
        <div className={styles.form_field}>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            value={password}
            onChange={onHandleChange}
          />
        </div>
        <button className={styles.button_register} type="submit">
          Registration
        </button>
      </form>
    </main>
  );
};

export default Registration;