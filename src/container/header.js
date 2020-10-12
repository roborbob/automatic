import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100vh;
    width: 100%;
    text-align: center;
    h1{
        margin-top: 150px;
        animation: scale-in-center 2s ease-out both;
    }
    @keyframes scale-in-center {
    0% {
        -webkit-transform: scale(0);
                transform: scale(0);
        opacity: 1;
    }
    100% {
        -webkit-transform: scale(1);
                transform: scale(1);
        opacity: 1;
    }
    }
    .arrow {
        position: relative;
        background: white;
        margin: 0 auto;
        width: 1px;
        height: 80px;
        animation: bounce 1s ease infinite alternate;
        &::after{
            content: '';
            position: absolute;
            top: 68px;
            transform-origin: center;
            transform: translateX(-6px) rotate(45deg);
            width: 10px;
            height: 10px;
            border-bottom: 1px solid white;
            border-right: 1px solid white;
        }
    }
    @keyframes bounce {
        0% {
            transform: scale(1) translateY(0);
        }
        100% {
            transform: scale(0.8) translateY(40px);
        }
    }

`

const Header = () => {
    return (
        <HeaderWrapper>
            <h1>automation</h1>
            <div className="arrow"/>
        </HeaderWrapper>  
    )
}

export default Header;