import styles from './List-item.module.css';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/ItemSlice';
import PropType from 'prop-types';

const ListItem = ({ id, name, number }) => {
  // const dispatch = useDispatch();

  return (
    <>
      <li className={styles.item} key={id}>
        <span className={styles.nameUser}>{name} </span>
        <span className={styles.phoneNum}>{number} </span>
        <button type="button" className={styles.btnDel} onClick={id}>
          Delete
        </button>
      </li>
    </>
  );
};

ListItem.propType = {
  ListItem: PropType.node.isRequired,
};

export default ListItem;
