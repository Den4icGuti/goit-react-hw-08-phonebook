import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from 'auth/auth-selectors';
import defaultAvatar from './514-5147412_default-avatar-icon.png';
import styles from '../UserMenu/UserMenu.module.css';
import { logOut } from 'auth/auth-operation';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div className={styles.userMenu}>
      <img className={styles.avatar} src={avatar} alt="" width="32" />
      <span>Welcome {name}</span>
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
