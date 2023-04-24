import styled from 'styled-components';

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #444;
  border-radius: 4px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
`;
