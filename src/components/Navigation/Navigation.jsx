import { Link } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <Link to="/" exact="true" className={styles.linksNav}>
        Home Page
      </Link>
    </nav>
  );
};
export default Navigation;
