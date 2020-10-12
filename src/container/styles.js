import styled from 'styled-components';


export const SectionWrapper = styled.section`
    display: flex;
    flex-direction: ${props => props.responsive ? `column-reverse`: `column`};
    margin: 150px auto;
    align-items: center;
    text-align: center;
    @media (min-width: 769px){
        flex-direction: row;
        justify-content: space-around;
        margin: 200px auto;
        text-align: left;
    }
    h2{
        text-align: center;
    }
    
`
