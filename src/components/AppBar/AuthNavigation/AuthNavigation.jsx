import { Link } from 'react-router-dom';
import styles from '../AuthNavigation/AuthNav.module.css';

const AuthNavigation = () => {
  return (
    <nav>
      <Link className={styles.authNav} to="/register">
        Sign up
      </Link>
      <Link className={styles.authNav} to="/login">
        Sign in
      </Link>
    </nav>
  );
};

export default AuthNavigation;
