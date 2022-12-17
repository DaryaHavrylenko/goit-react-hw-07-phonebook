import styled from 'styled-components';

export const FormPhonebook = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[5]}px;
  width: 350px;
  border-radius: 10px;
  box-shadow: 10px 10px 58px 4px rgba(0,0,0,0.63);
`;

export const Label = styled.label`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.list};
  margin-bottom: ${p => p.theme.space[2]}px;
  color: whitesmoke;
`;
export const Input = styled.input`
  margin-bottom: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.l};
  width: 300px;
  border-radius: 4px;
    border: transparent;
  &:focus {
    outline: none;
    border: 2px solid;
    border-color: #47feff;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
export const Button = styled.button`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[2]}px;
  width: 100px;
  font-size: ${p => p.theme.fontSizes.m};
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};
  border: transparent;
  &:hover {
    background-color: #15d953;
    border-color: #b3f9f6;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;