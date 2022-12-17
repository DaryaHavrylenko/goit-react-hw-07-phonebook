import styled from 'styled-components';


export const Wrapper = styled.section `
    font-family: ${p => p.theme.fonts.heading};
     display: flex;
    flex-direction: column;
         margin: 0 auto;

padding-top: ${p => p.theme.space[4]}px;
padding-bottom: ${p => p.theme.space[4]}px;
padding-right: ${p => p.theme.space[4]}px;
padding-left: ${p => p.theme.space[4]}px;
`
export const FormChildren = styled.div`
    display: flex;
    flex-direction: column;
`
export const Caption = styled.h1`
    font-size: ${p => p.theme.fontSizes.xl};
    display: flex;
    justify-content: center;
    color: #e1d80d;
`