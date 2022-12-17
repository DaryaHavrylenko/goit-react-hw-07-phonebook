import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormPhonebook, Label, Input, Button } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { getContact } from 'redux/selectors';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContact);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const correctName = name.toLowerCase();
    const IsContactList = contacts.find(
      contact => contact.name.toLowerCase() === correctName
    );

    IsContactList
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact({ name, number, id: nanoid() }));
    if (!IsContactList) {
      setName('');
      setNumber('');
    }
  };
  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        console.log('Invalid subscription type');
    }
  };

  const modelId = nanoid();
  const numberId = nanoid();

  return (
    <FormPhonebook autoComplete="off" onSubmit={handleSubmit}>
      <Label htmlFor={modelId}>Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        value={name}
        id={modelId}
      />
      <Label htmlFor={numberId}>Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        value={number}
        id={numberId}
      />
      <Button type="submit">Add contact</Button>
    </FormPhonebook>
  );
};
// };
