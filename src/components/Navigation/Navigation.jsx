import { Link } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css';

const Navigation = () => {
  return (
    <header>
      <nav>
        <Link to="/" className={styles.links}>
          Home
        </Link>

        <Link to="register" className={styles.links}>
          Sign up
        </Link>
        <Link to="login" className={styles.links}>
          Sign in
        </Link>

        <hr />
      </nav>
    </header>
  );
};

export default Navigation;
