import styled, { css } from "styled-components";


export const ButtonCss = css`
    border-radius: 20px;
    border: 1px solid #FF4B2B;
    background-color: #FF4B2B;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    cursor: pointer;

    &:active {
        transform: scale(0.95);
    }

    &:hover {
        outline: none;
        background: pink;
    }

    &:disabled {
        cursor: not-allowed;
        background: pink;
    }
`;

const ButtonElement = styled.button`
    ${ButtonCss}
    ${props => props.variant === "secondary" && css`
        background-color: transparent;
        border-color: #FFFFFF;
    `}
`;


export default function Button({ title = "title", variant = "primary", disabled = false, type = "button", func, ...props }) {
    const callback = (func) => {
        if (func)
            func()
    }
    return (
        <>
            <ButtonElement variant={variant} {...props} onClick={() => callback(func)} disabled={disabled} type={type}>
                {title}
            </ButtonElement>
        </>
    )
}