//import PropTypes from 'prop-types';
import { List, Item, Text, Button } from './Contacts.styled';
import { getContact, getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);

  const filter = useSelector(getFilter);
  const normFilter = filter.toLowerCase();
  const filterContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normFilter)
  );

  return (
    <List>
      {filterContactList.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name}: {number}
          </Text>
          <Button
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

// Contacts.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.object),

// }
