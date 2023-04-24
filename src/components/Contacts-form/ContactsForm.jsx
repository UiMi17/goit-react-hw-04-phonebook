import PropTypes from 'prop-types';
import { StyledForm, StyledLabel, StyledInput, StyledButton } from './StyledContactsForm';

const ContactsForm = ({ handleFormSubmit }) => {
  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <StyledLabel htmlFor="name">Name</StyledLabel>
      <StyledInput
        type="text"
        name="name"
        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <StyledLabel htmlFor="number">Number</StyledLabel>
      <StyledInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};

export default ContactsForm;

ContactsForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};
