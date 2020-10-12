import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.section`
    position: relative;
    display: block;
    height: 50vh;
    width: 100%;
    margin: 200px auto 0;
    
`
const Button = styled.button`
    border: 1px solid #fafbff;
    border-radius: 30px;
    padding: 20px 15px;
    height: auto;
    background: none;
    color: #fafbff;
    font-family: Helvetica Neue;
    font-spacing: 0.5em;
    font-size: 20px;
    font-weight: 300; 
    transition: 0.3s;
    &:hover {
        cursor: pointer;
        border: 1px solid lightyellow;
        color: lightyellow;
    }
`

const ContactWrapper = styled.div`
    display: flex;
    width: 500px;
    margin: auto;
    justify-content: space-between;
`

const Footer = () => {
    return (
        <FooterWrapper>
            <ContactWrapper>
                <Button>Enquire Now</Button>
                <Button>Information</Button>
            </ContactWrapper>
        </FooterWrapper>
    )
}

export default Footer;