import PropTypes from 'prop-types';
import {Section,Caption,Find} from './ContactsWrapper.styled';

export const ContactsWrapper = ({ title, children }) => {
  return (
    <Section>
      {title && <Caption>{title}</Caption>}
      <Find>{children}</Find>
    </Section>
  );
};

ContactsWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
