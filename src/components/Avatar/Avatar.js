import styled, { css } from "styled-components";
import React from 'react'
import { Container } from "react-bootstrap";

const AvatarImage = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
function Avatar({ src, name, role, alt = "img" }) {
    return (
        <Container style={{
            display: "flex",
            flexDirection: "column",
            justifContent: "center",
            alignItems: "center"
        }}>
            <AvatarImage src={src} alt={alt} />
            <h6>{name}</h6>
            <h6>{role}</h6>
        </Container>
    )
}

export default Avatar