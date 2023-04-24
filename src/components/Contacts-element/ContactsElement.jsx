import PropTypes from 'prop-types';
import { StyledLi, StyledButton } from './StyledContactsElement';

const ContactsListElement = ({ name, number, id, handleDeleteBtnClick }) => {
  return (
    <>
      <StyledLi>
        <p>
          {name}: {number}
        </p>
        <StyledButton type="button" id={id} onClick={handleDeleteBtnClick}>
          Delete
        </StyledButton>
      </StyledLi>
    </>
  );
};

export default ContactsListElement;

ContactsListElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleDeleteBtnClick: PropTypes.func.isRequired,
};
