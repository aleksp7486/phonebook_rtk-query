import PropTypes from 'prop-types';
import { Item, Text, Icon, Phone, Btn } from './ContactList.styled';
import { BsFillPersonFill, BsFillPersonXFill } from 'react-icons/bs';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = ({ contacts }) => {
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(selectFilter);

  if (!contacts) {
    return null;
  }

  const filterContact = (contacts, filter) => {
    if (!contacts) {
      return;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = filterContact(contacts, filter);

  return (
    <ul>
      {filteredContacts.map(({ name, phone, id }) => {
        return (
          <Item key={id} id={id}>
            <Icon>
              <BsFillPersonFill />
            </Icon>
            <Text>
              {name}:<Phone>{phone}</Phone>
            </Text>
            <Btn onClick={() => deleteContact(id)}>
              <BsFillPersonXFill />
            </Btn>
          </Item>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default ContactList;
