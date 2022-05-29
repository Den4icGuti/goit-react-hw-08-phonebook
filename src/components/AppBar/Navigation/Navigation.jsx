import { Link, Outlet } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css';
import { authSelectors } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <Link to="/" exact="true" className={styles.linkHome}>
        Home
      </Link>

      {isLoggedIn && (
        <Link to="contacts" className={styles.linkHome}>
          Contacts
        </Link>
      )}
      <Outlet />
    </nav>
  );
};

export default Navigation;
