import styled from 'styled-components';

export const Section = styled.div`
  font-family: ${p => p.theme.fonts.heading};
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
`;
export const Caption = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  display: flex;
  flex-direction: column;
  align-items:center;
  color: #e1d80d;
`;
export const Find = styled.div`
color: whitesmoke;
`