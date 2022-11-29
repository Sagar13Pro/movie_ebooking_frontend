import styled from "styled-components";

export const Card = styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-clip: border-box;
        border: none;
        border-radius: 3px;
        background-color: #ffffff;
        margin-bottom: 30px;
`;
export const CardBody = styled.div`
        flex: 1 1 auto;
        min-height: 1px;
        padding: 1.25rem;
`;

export const ContentContainer = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const ContentBody = styled.div`
    word-break: break-word;
    flex: 1;

    &  h1,h2,h3,h5,h6 {
        margin-bottom: .5rem !important;
        text-align: left;
    }

    & p {
        margin-bottom: 0 !important;
    }
`;