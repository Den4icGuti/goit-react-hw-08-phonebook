import { authSelectors } from 'redux/authSelectors';
import { logOut } from 'redux/authOperation';
import { useDispatch, useSelector } from 'react-redux';
import defaultAvatar from './514-5147412_default-avatar-icon.png';
import styles from '../UserMenu/UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div className={styles.userMenu}>
      <img className={styles.avatar} src={avatar} alt="" width="32" />
      <span>Welcome, {name}</span>
      <button
        onClick={() => dispatch(logOut())}
        className={styles.btnLogOut}
        type="button"
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
