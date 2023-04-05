// import PropTypes from 'prop-types';
import { ContactsItem } from 'components/ContactItem/ContactItem';
import { Filter } from 'components/Filter/Filter';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  getFilterContactsValue,
  getContactsValue,
  getIsLoading,
  getError,
} from 'redux/selectors';

import { fetchContacts } from 'redux/contactsOperations';

import {
  ContactsListBox,
  ContactsListTitle,
  ContactItems,
} from './ContactsList.styled';

export const ContactsListWrapper = () => {
  const contacts = useSelector(getContactsValue);
  const filterContactsState = useSelector(getFilterContactsValue);

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onFilterContacts = () => {
    if (filterContactsState) {
      const normFilter = filterContactsState.toLowerCase();
      return contacts.filter(contactEl =>
        contactEl.name.toLowerCase().includes(normFilter)
      );
    }
  };

  const onDataContacts = () => {
    // if (filterContactsState !== '') {
    if (filterContactsState) {
      return onFilterContacts();
    }
    return contacts;
  };

  return (
    // { isLoading && !error && <b>Request in progress...</b>}
    (onDataContacts().length !== 0 || filterContactsState !== '') && (
      <ContactsListBox>
        {/* <ContactsListTitle>Contacts</ContactsListTitle> */}
        <ContactsListTitle>Contacts</ContactsListTitle>
        <Filter />
        <ContactItems>
          {onDataContacts().map(({ name, phone, id }) => (
            <ContactsItem
              key={id}
              id={id}
              name={name}
              phone={phone}
              // phone={number}
            ></ContactsItem>
          ))}
        </ContactItems>
      </ContactsListBox>
    )
  );
};

// ContactsListWrapper.propTypes = {
//   dataContacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
