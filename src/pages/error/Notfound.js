import React from 'react'
import styled from "styled-components"
import { LOGIN } from "../../routes/Path"
import { ButtonCss } from '../../components/Button/Button';
// css

const Section = styled.section`
    width:100%;
    margin: 12px auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
`;

const Container = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    margin: 3rem 0;
    margin-left: auto;
    margin-right: auto;
`;
const Thumbnail = styled.div`
    max-width: 596px;
    margin: 0 auto 34px;
`;
const Image = styled.img`
    width: 100%;
    border-style:none;
    vertical-align: middle;
`;
const Title = styled.h3`
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 40px;
    margin: 0;
    line-height: 1.3;
    color: #fff;
`;
const HomeLink = styled.a`
    margin-top: 15px;
    ${ButtonCss}
`;

function Notfound() {
    return (
        <Section>
            <Container>
                <Thumbnail>
                    <Image src={"/assets/images/error/404.png"} />
                </Thumbnail>
                <Title>OOPS, Page Not Found</Title>
                <HomeLink href={LOGIN}>Back to home</HomeLink>
            </Container>
        </Section>
    )
}

export default Notfound