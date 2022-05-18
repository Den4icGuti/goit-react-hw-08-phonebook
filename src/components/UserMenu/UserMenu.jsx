import defaultAvatar from './514-5147412_default-avatar-icon.png';
import styles from '../UserMenu/UserMenu.module.css';

const UserMenu = () => {
  
  const avatar = defaultAvatar;

  return (
    <div className={styles.userMenu}>
      <img className={styles.avatar} src={avatar} alt="" width="32" />
      <span>Welcome, email</span>
      <button
        onClick={() => null}
        className={styles.btnLogOut}
        type="button"
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
