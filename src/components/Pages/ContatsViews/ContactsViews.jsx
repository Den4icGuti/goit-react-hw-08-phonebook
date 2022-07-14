import Form from '../Contacts/Filter/Form/Form';
import Filter from '../Contacts/Filter/Filter';
import UserList from '../Contacts/Filter/UserList/UserList';
// import { useState } from 'react';

const ContactsViews = () => {
  const data = ['Den', 'Dasha'];
  return (
    <div>
      <Form />
      <Filter />
      <UserList item={data} />
    </div>
  );
};

export default ContactsViews;
