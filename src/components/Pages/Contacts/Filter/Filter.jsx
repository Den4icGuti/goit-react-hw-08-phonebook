import styles from './Filter.module.css';
// import { useState } from 'react';
// import { searchByName } from 'redux/ItemSlice';
// import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  return (
    <div className={styles.BoxFilter}>
      <h2>Find contacts by name</h2>
      <label className={styles.Filter}>
        Find contacts by name
        <input type="text" onChange={null} />
      </label>
    </div>
  );
};

export default Filter;
