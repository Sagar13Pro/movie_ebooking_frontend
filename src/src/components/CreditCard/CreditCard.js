import styled, { css } from "styled-components";

const FlexCSS = css`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    algin-items: ${props => props.alginItems};
    justify-content: ${props => props.justifyContent};
    max-width: 420px;
`;

const CreditCardStyled = styled.div`
    ${props => props.isFlex && FlexCSS};

    margin: ${props => props.margin};
    padding: ${props => props.padding};
    background: ${props => props.background};
    border: ${props => props.border};
    border-radius: 0.75rem; 
`;

const InnerCard = styled.div`
    height: 200px;
    width: 100%;
    max-width: 385px;
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 15px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
    background-size: cover;
    background-position: 50%;
    color: #eee;
    filter: drop-shadow(1px 3px 10px #222);
    animation: fadeIn .2s linear 1;
`;

const InnerCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
`;
const InnerCardBody = styled.div`
        justify-content: center;
        height: 60%;
        display: flex;
        flex-direction: row;
        align-items: center;
`;
const InnerCardFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 75px;
`;

const ChipImage = styled.div`
    width: 50px;
    height: 40px;
    background-image: url(https://images.pexels.com/photos/728471/pexels-photo-728471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
    background-position: 50%;
    background-size: cover;
    object-fit: contain;
    border-radius: 5px;

    & > div > img {
        max-width: 60px;
    }
`;
const CreditCard = ({ isFlex, flexDirection, alginItems, justifyContent, border, margin = "0 0 1rem", padding = "1rem", background = "#100f10", name }) => {
    return (
        <CreditCardStyled
            isFlex={isFlex}
            flexDirection={flexDirection}
            alginItems={alginItems}
            justifyContent={justifyContent}
            margin={margin}
            padding={padding}
            background={background}
            border={border}
        >
            <InnerCardHeader>
                <ChipImage />
                <div>
                    <img className="logo" src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png" alt="Card logo" />
                </div>
            </InnerCardHeader>
            <InnerCardBody>
                <h2>#### #### #### ####</h2>
            </InnerCardBody>
            <InnerCardFooter>
                <div><h5>Card Holder</h5><h3>{name ? name : "Your Full Name"}</h3></div>
                <div><h5>Expires</h5><h3>MM / YYYY</h3></div>
            </InnerCardFooter>
        </CreditCardStyled>
    )
}

export default CreditCard