import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../Autorization/Authorization.module.css';

const Authorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch();

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const onHandleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      toast.warn('All fields must be filled');
    }
    reset();
  };

  return (
    <main>
      <ToastContainer theme="dark" position="top-center" autoClose={3000} />
      <form className={styles.authorization} onSubmit={onHandleSubmit}>
        <h1 className={styles.form_title}>Authorization</h1>
        <div className={styles.form_field}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onHandleChange}
            placeholder="Email..."
            autoComplete="off"
          />
        </div>
        <div className={styles.form_field}>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onHandleChange}
            placeholder="Password..."
          />
        </div>
        <button className={styles.button_register} type="submit">
          Authorization
        </button>
      </form>
    </main>
  );
};

export default Authorization;
