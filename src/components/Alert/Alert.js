import styled, { css } from "styled-components";


const AlertSuccess = css`
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
`
const ALertDanger = css`
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
}
`;
export const Alert = styled.div`
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    margin: 10px;
    
    ${props => props.varaint === "success" && AlertSuccess}
    ${props => props.variant === "danger" && ALertDanger}
`;
