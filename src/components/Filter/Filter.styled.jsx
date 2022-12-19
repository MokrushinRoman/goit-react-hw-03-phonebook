import styled from '@emotion/styled';

export const Label = styled.label`
  margin-top: ${({ theme }) => theme.space[0]}px;

  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.m};

  input {
    display: block;
    padding: ${({ theme }) => theme.space[0]}px;
    margin-top: ${({ theme }) => theme.space[0]}px;
  }
`;
