import {Wrapper,Caption,FormChildren} from './Section.styled';

export const Section = ({title,children}) => {
    return (
        <Wrapper>
            {title && <Caption>{title}</Caption>} 
            <FormChildren>{ children}</FormChildren>
            
    </Wrapper>
)
}