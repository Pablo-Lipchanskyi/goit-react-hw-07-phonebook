import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSlice';
import { deleteContact } from 'redux/operations';
import { getFilter } from 'redux/filter/filterSlice';
import { fetchContacts } from 'redux/operations';
import { ContactsListStyled } from './ContactsList.styled';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (visibleContacts.length > 0) {
    return (
      <ContactsListStyled>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactsListItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteButton={id => dispatch(deleteContact(id))}
            ></ContactsListItem>
          );
        })}
      </ContactsListStyled>
    );
  }
};