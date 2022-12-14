import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ListItem from '../ListItem/ListItem';
import styles from './UserList.module.css';

const UserList = ({ deleteContact, item }) => {
  // const item = useSelector(state => state.contacts.items);
  // const filter = useSelector(state => state.contacts.filter);
  // const normalize = filter.toLowerCase();

  // const filteredItems = item.filter(item =>
  //   item.name.toLowerCase().includes(normalize)
  // );

  return (
    <div className={styles.ListUsers}>
      <ul className={styles.list}>
        {item.map((items, id) => (
          <ListItem
            key={id}
            className={styles.item}
            {...items}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

UserList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default UserList;
