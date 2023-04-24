import PropTypes from 'prop-types';
import { StyledInput, StyledLabel } from './StyledFilter';

const Filter = ({ handleSearchInputChange }) => {
  return (
    <>
      <StyledLabel htmlFor="search">Find contacts by name</StyledLabel>
      <StyledInput type="text" name="search" onChange={handleSearchInputChange} />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  handleSearchInputChange: PropTypes.func.isRequired,
};
