import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: square;
    padding: 5px;
`
export const Item = styled.li`
   display: flex; 
   align-items: baseline;
`
export const Text = styled.p`
        font-size: ${p => p.theme.fontSizes.l};
         font-weight: ${p => p.theme.fontWeights.list};
         text-transform: capitalize;
         color: #d8ddb3;
      
`
export const Button = styled.button`
text-align: center;
    width: 100px;
    height: 30px;
    margin-left: ${p => p.theme.space[4]}px;
        padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[2]}px;
    border: ${p => p.theme.borders.normal};
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};
  border: transparent;
  &:hover {
    background-color: #de6515;
    border-color: #b3f9f6;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`