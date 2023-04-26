import PropTypes from 'prop-types';
import { StyledLi, StyledButton } from './StyledContactsElement';

const ContactsListElement = ({ name, number, id, handleDeleteBtnClick }) => {
  return (
    <>
      <StyledLi>
        <p>
          {name}: {number}
        </p>
        <StyledButton
          type="button"
          onClick={() => {
            handleDeleteBtnClick(id);
          }}
        >
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
  handleDeleteBtnClick: PropTypes.func.isRequired,
};
