import styled, { css, keyframes } from "styled-components";
import { useState } from "react";
const fadeOut = keyframes`
    0%{opacity: 1}
    25%{opacity: 0.7}
    50%{opacity: 0.5}
    75%{opacity: 0.3}
    100%{opacity: 0}
`
const AlertSuccess = css`
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
`
const AlertDanger = css`
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
}
`;
const AlertDiv = styled.div`
    width: 100%;
    display: ${props => props.display};
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    margin: 10px;
    animation: ${props => props.fade === true && fadeOut} ${props => props.timeout && props.timeout / 1000}s;
    ${props => props.variant === "success" && AlertSuccess}
    ${props => props.variant === "danger" && AlertDanger}
`;

export default function Alert({ message = "Hello, there", variant = "success", fade = true, timeout = 10000 }) {
    const [display, setDisplay] = useState("block")

    if (timeout !== 0) {
        setTimeout(() => {
            if (display === "block")
                setDisplay("none")
        }, 4000)
    }

    return (
        <>
            <AlertDiv id="alert" variant={variant} timeout={timeout} display={display} fade={fade}>
                <strong>{message}</strong>
            </AlertDiv>
        </>
    )
}