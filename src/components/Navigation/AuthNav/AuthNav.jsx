import { Link } from 'react-router-dom';
import styles from '../AuthNav/AuthNav.module.css';

const AuthNav = () => {
  return (
    <nav>
      <Link to="/register" className={styles.authNav}>
        Sign up
      </Link>
      <Link to="/login" className={styles.authNav}>
        Sign in
      </Link>
    </nav>
  );
};

export default AuthNav;
