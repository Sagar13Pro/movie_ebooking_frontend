import styled, { keyframes } from "styled-components";

const show = keyframes`
    0%,49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%,100% {
        opacity: 1;
        z-index: 5;
    }
`;
export const OverlayContainer = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
`;

export const Overlay = styled.div`
    background: #FF416C;
    background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
    background: linear-gradient(to right, #FF4B2B, #FF416C);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #FFFFFF;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`;

export const MainDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 580px;
    margin: 3rem 0;

    &.active .sign-up-container {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: ${show} 0.6s;
    }

    &.active .sign-in-container {
        transform: translateX(100%);
    }

    &.active ${OverlayContainer} {
        transform: translateX(-100%);
    }

    &.active ${Overlay} {
        transform: translateX(50%);
    }
    &.active .overlay-left {
        transform: translateX(0);
    }
    &.active .overlay-right {
        transform: translateX(20%);
    }
`;

export const FormContainer = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    &.sign-up-container {
        left: 0;
        width: 50%;
        opacity: 0;
        z-index: 1;
    }
    

    &.sign-in-container {
            left: 0;
            width: 50%;
            z-index: 2;
    }
    
`;

export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;

    &.overlay-left {
        transform: translateX(-20%);
    }

    &.overlay-right {
        right: 0;
        transform: translateX(0);
    }
`;

export const SocialContainer = styled.div`
    margin: 10px 0;
`;

export const SocialLink = styled.a`
    border: 1px solid #DDDDDD;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;

    & > svg {
        color: #fff;
    }
`;

export const DividerWrapper = styled.div`
    display: block;
    width: 100%;
    color: #ccc;
`;

export const Divider = styled.div`
    &::before,&::after {
        border-top: 1px solid #ccc;
        content: " ";
        display: inline-block;
        vertical-align: middle;
        width: 45%;
        margin-top: 10px;
    }

    &::before {
        float: left;
    }
    &::after {
        float: right;
    }
`;

export const Footer = styled.footer`
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;

    & p {
        margin: 10px 0;
    }

    & i {
        color: red;
    }

    & a {
        color: #3c97bf;
        text-decoration: none;
    }
`;

export const Form = styled.form`
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
` ;

export const InputWrapper = styled.div`
    width: 100%;
`;

export const Input = styled.input`
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;

    &[readonly] {
        cursor: not-allowed;
    }

    & ~ svg {
        position: relative;
        top: -35px;
        float: right;
        margin-right: 8px;
        cursor: pointer;
    }
`;

export const TextArea = styled.textarea`
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
`;
export const Para = styled.p`
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
`;

export const Anchor = styled.a`
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
`;