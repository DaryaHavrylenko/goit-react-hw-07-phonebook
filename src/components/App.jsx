import { Container } from './Container.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from './ThemeProvider/theme';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { ContactsWrapper } from './Contacts/ContactsWrapper';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Section title="Phonebook">
          <Form />
        </Section>

        <ContactsWrapper title="Contacts">
          <Filter></Filter>

          <Contacts></Contacts>
        </ContactsWrapper>
      </ThemeProvider>
    </Container>
  );
};
