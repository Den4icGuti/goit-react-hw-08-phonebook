import { useSelector } from 'react-redux';
import { authSelectors } from 'auth/auth-selectors';
import UserMenu from 'components/UserMenu';
import Navigation from '../Navigation';
import AuthNavigation from '../AuthNavigation';
import styles from '../AppBar/AppBar.module.css';
const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
};

export default AppBar;
