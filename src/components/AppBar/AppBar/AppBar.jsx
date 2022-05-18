import Navigation from '../Navigation';
import AuthNavigation from '../AuthNavigation';
import styles from '../AppBar/AppBar.module.css';
const AppBar = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <AuthNavigation />
    </header>
  );
};

export default AppBar;
