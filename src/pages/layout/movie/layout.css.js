import styled, { keyframes } from "styled-components"

// keyframes 
const FadeInLeft = keyframes`
    0%{
        opacity: 0;
        transform: translateX(-20px);
    }
    100%{
        opacity: 1;
        transform: translateX(0px);
    }
`;

// css
export const Header = styled.header`
    background: #0a1e5e;
    border-bottom: 1px solid rgba(255, 255, 255, 0.102);
    padding: 21px 0;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 9999;
    color: #000;
`;
export const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
    @media (min-width: 1200px) {
        max-width: 1170px;
    }
`;
export const HeaderWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    align-items: center;
`;
export const Logo = styled.div`
    width: 140px;
`;
export const Menu = styled.ul`
    margin:0;
    padding:0;
    display:none;

    & li{
        list-style:none;
        margin: 0 20px;
    }

    @media (max-width: 991px){
        ${HeaderWrapper} & {
            display: none;
            position: fixed;
            background: #0a1e5e;
            width: 100%;
            max-width: 500px;
            top: 80px;
            left: 0;
            padding-left: 15px;
            height: calc(100vh - 80px);
            overflow-y: scroll;
            padding-top: 20px;
            padding-bottom: 20px;
        }
         ${HeaderWrapper} &.active {
            animation-name: ${FadeInLeft};
            animation-duration: 1s;
            display: block;
        }
    }

    @media (max-width: 991px) and (min-width: 576px)
        ${HeaderWrapper} & {
            padding-left: 45px;
        }
    }
    @media (max-width: 991px) and (min-width: 768px)
        ${HeaderWrapper} & {
            padding-left: 50px;
        }
    }
    @media (min-width: 992px) {
        & {
            display:flex;
            flex-wrap:wrap;
            align-items:center;
        }
    }
    
`;

export const Items = styled.li`

    @media (max-width: 991px)
        ${HeaderWrapper} ${Menu} & {
        width: 100%;
        padding: 0;
    }

    @media (min-width: 992px) {
        ${HeaderWrapper} ${Menu} & {
            padding: 5px;
        }
    }
    @media (min-width: 992px) and (max-width: 1199px){
        ${HeaderWrapper} ${Menu} & {
            padding: 5px 12px;
            position: relative;
        }
    }    
`;

export const Link = styled.a`
    display: inline-block;
    background-color: transparent;
    text-decoration: none;

    @media (max-width: 991px) {
        ${HeaderWrapper} ${Menu} ${Items} & {
            display: flex;
            align-items: center;
            color: #e9eeff;
            text-transform: uppercase;
            padding-right: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 7px;
            padding-bottom: 7px;
        }
    }
    @media (min-width: 992px) {
        ${HeaderWrapper} ${Menu} > ${Items} > & {
            position: relative;
        }
    }

    @media (min-width: 992px) {
        ${HeaderWrapper} ${Menu} ${Items} & {
            color: #fff;
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase;
            padding: 5px;
        }
        ${HeaderWrapper} ${Menu} ${Items} &::before{
            width: calc(100% - 10px);
            height: 2px;
            background: #31d7a9;
            top: calc(100% + 30px);
            position: absolute;
            content: "";
            transform: scaleX(0);
            transition: all ease 0.3s;
            transform-origin: left;
        }
        ${HeaderWrapper} ${Menu} ${Items} &.active&::before {
            transform: scaleX(1);
        }
    }
    @media (min-width: 992px) and (max-width: 1199px) {
        ${HeaderWrapper} ${Menu} ${Items} & {
        font-size: 14px;
        }
    }
`;
export const BurgerMenu = styled.div`
    width: 30px;
    height: 25px;
    cursor: pointer;
    position: relative;

    & > span {
        display: inline-block;
        height: 3px;
        width: 100%;
        -webkit-transition: all ease 0.3s;
        transition: all ease 0.3s;
        background-color: #ffffff;
        position: absolute;
        left: 0;
    }

    & span:first-child {
        top:0;
    }

    & span:nth-child(2) {
        top: 52%;
        transform: translateY(-65%);
    }

    & span:last-child {
        bottom:0;
    }

    &.active span:first-child {
        transform: rotate(45deg) translate(6px, 13px);
    }
    &.active span:nth-child(2) {
        opacity: 0;
    }
    &.active span:last-child {
        transform: rotate(-45deg) translate(3px, -9px);
    }

    @media (min-width: 992px) {
        & {
            display: none !important;
        }
    }
    
`;

export const Section = styled.section`
    padding: 250px 0 200px;
    color: #fff;
`;
export const Banner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;
export const BannerContent = styled.div`
        margin: 0 auto;
        text-align: center;
        max-width: 840px;
            position: relative;
            z-index: 3;
`;
export const Title = styled.h1`
    color: #ffffff;
    font-size: 80px;
    line-height: 1.1;
    text-transform: uppercase;
    margin-bottom: 18px;
    font-weight: 800;
    & ~ p {
        font-size: 24px;
        line-height: 1.4;
        margin-left: auto;
        margin-right: auto;
    }
`;
export const Span = styled.span`
    display: block;
    padding: 0.2rem 0;
    font-size: 80px;
`;

// Search Section
export const SearchSections = styled.section`
    color: #fff;
    margin-top: -150px;
    position: relative;
    z-index: 9;
    padding-top: 80px;
    @media (min-width: 992px) {
        padding-top: 0px;
    }
`;
export const SearchTab = styled.div`
    padding: 40px 30px;
    position: relative;

    &::before {
        background-image: -webkit-linear-gradient(0deg, #9d50bb 0%, #6e48aa 100%);
        opacity: 0.8;
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`;
export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
    align-items: center;
    margin-bottom: -20px;

    &.flex-wrap-rev {
        flex-wrap: wrap-reverse !important;
    }

    &.justify-content-center {
        justify-content: center !important;
    }
`;

export const Col = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px){
        &.col-sm-6 {
            flex: 0 0 50%;
            max-width: 50%;
        }
    }
    @media (min-width: 992px) {
        // & {
        //     flex: 0 0 50%;
        //     max-width: 50%;
        // } 

        // & {
        //     flex: 0 0 100%;
        //     max-width: 100%;
        // }

        &.col-lg-4 {
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }
    }
`;
export const TabArea = styled.div`
    padding: 30px;
    position: relative;
    box-shadow: 0px 5px 15px 0px rgb(44 41 157 / 50%);
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    margin-top: 53px;
    background-color: black;
    opacity: 0.4;
    width: 100%;
    height: calc(100% + 1px);
    top: 0;
    left: 0;
    display:none;

    &.active {
        display: block;
    }
    // &.d-none {
    //     display:none;
    // }
`;
export const SearchHeader = styled.div`
    text-transform: uppercase;

    & > h6 {
        color: #f00;
        font-weight: 600;
        margin-bottom: 16px;
    }   

    & > h3 {
        font-size: 28px;
    }
    @media (min-width: 576px) {
        & > h6 {
            font-size: 18px;
            margin-top: -5px;
        }
        & > h3 {
            margin-top: -10px;
        }
    }
`;
export const TabMenuUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: -10px;
    margin:0;
    padding:0;
`;
export const TabMenuList = styled.li`
    display: flex;
    justify-content: space-evenly;
    padding: 5px 10px;
    min-height: 50px;
    align-items: center;
    width: calc(50% - 10px);
    background-color: #7d78ff;
    border-radius: 25px;
    transition: all ease 0.3s;
    margin-bottom: 10px;
    cursor: pointer;

    &.active {
        background: linear-gradient(to right, #ff4e50, #f9d423);
    }
`;

export const TabThumbnail = styled.div`
    width: 40px;

    & ~ span {
        margin: 0 6px;
        color: #ff0000;
        font-weight: 600;
    }
`;

export const TabImage = styled.img`
    max-width: 100%;
`;

export const TabItem = styled.div`
    animation: fadeInUp;
    animation-duration: 1s;
`;

export const TabForm = styled.form`
    display: flex;
    flex-wrap:wrap;
    margin-bottom: -20px;
    justify-content: space-between;
`;

export const TabFormGroup = styled.div`
    margin-bottom: 20px;
    position: relative;
    align-items: center;
    display:flex;
    flex-wrap: wrap;

    ${TabForm} .w-100 {
        width: 170px;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
        ${TabForm} &.w-100 {
            width: 100%;
        }

        ${TabForm} & {
            width: calc(33.33% - 10px);
        }
    }
`;

export const TabFormInput = styled.input`
    border: none;
    border-bottom: 1px solid #9eb1eb;
    border-radius: 0;
    padding: 0;
    height: 45px;
    padding-right: 50px;
    background:transparent;
    color: #dbe2fb;
    width: 100%;
    outline: none;
`;

// Movie And Event Section
export const CustomSection = styled.section`
    padding-top: 80px;
    padding-bottom: 80px;

    @media (min-width: 992px) {
        & {
            padding-top: 120px;
            padding-bottom: 120px;
        }
    }
`;

export const CustomHeader = styled.div`
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
    display: flex;
    flex-wrap: wrap;
`;

export const HeaderLeft = styled.div`
    width: calc(40% - 15px);
`;

export const HeaderLeftTitle = styled.h2`
    text-transform: uppercase;
    margin-bottom: 19px;

    & ~p {
        margin: -11px;
        text-align: center;
    }
    & ~p:last-child {
        margin-bottom: -8px !important;
    }
    @media (min-width: 576px) {
        font-size: 50px;
        line-height: 60px;
        margin-top: -13px;
    }
`;
export const HeaderRight = styled.ul`
    align-items: center;
    margin: 0 -5px -10px;
    justify-content: flex-end;
    width: calc(60% - 15px);
    display: flex;
    flex-wrap: wrap;
    padding: 0;
`;
export const HeaderRightList = styled.li`
        list-style: none;
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 30px;
        border: 1px solid #11326f;
        padding: 9px 27px;
        border-radius: 25px;
        margin: 0 5px 10px;
        transition: all ease 0.3s;

        &:hover {
                box-shadow: 0px 10px 15px 0px rgb(59 55 188 / 50%);
        }
        &.active {
            background: linear-gradient(to right,#ff4e50,#f9d423);
        }
`;

export const CustomTabArea = styled.div`
    margin-bottom: -30px !important;

    & > .carousel-root > .carousel {
        width: 50% !important;
        margin: 0 auto !important;
    }
`;

export const CarouselItems = styled.div`
    margin-bottom: 30px;
    overflow: hidden;
    border-radius: 7px 7px 5px 5px;
`;
export const CarouselThumb = styled.div`
        position: relative;
        overflow: hidden;

        & a {
            display: block;
            transition: all ease 0.3s;
            background-color: transparent;
            text-decoration: none;
        }
`;

export const CarouselImage = styled.img`
        width: 100%;
        transition: all ease 0.3s;
        border-style: none;
        vertical-align: middle;
`;

export const FooterSection = styled.footer`
    position: relative;
    display: block;
    bottom: 0;
    right: 0;
    left: 0;
    top: 80px;
    background: #0a1e5e;
    content: '';
`;

export const FooterContent = styled.div`
    padding: 25px 0;
`;
export const FooterArea = styled.div`
    margin-bottom: -25px;
    flex-wrap: wrap-reverse;
    position: relative;
    z-index: 1;
    justify-content: space-between;
    display:flex;
`;

export const FooterLeft = styled.div`
    & > p > a {
        color: #31d7a9;
        transition: all ease 0.3s;    
        background-color: transparent;    
        text-decoration: none;
    }
`;

export const FooterLinks = styled.ul`
    margin: 0 -15px;
    margin-bottom: 25px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    & > li {
        padding: 0 15px;
        list-style: none;
    }

    & > li > a {
        margin-top: 10px;
        color: #dbe2fb;    
        transition: all ease 0.3s;    
        background-color: transparent;    
        text-decoration: none;
    }
`;


export const Card = styled.div`
    &.card-item {
        display: none;
        animation-name: fadeInUp;
        -webkit-animation-name: fadeInUp;
        -moz-animation-name: fadeInUp;
        animation-duration: 1s;
        -webkit-animation-duration: 1s;
        -moz-animation-duration: 1s;
    }
    &.card-item.active {
        display: block;
    }
`;

export const CardHeader = styled.div`
        margin-bottom: 30px;
        overflow: hidden;
        border-radius: 7px 7px 5px 5px;

    & > .movie-content {
        padding: 0 20px;
    }
    & > .movie-content > .title {
        padding: 23px 0;
        text-transform: capitalize;
        border-bottom: 1px dashed #11326f;
    }
`;
export const CardThumb = styled.div`
    overflow: hidden;
    position: relative;
    transition: all ease 0.3s;

    & > a { 
        display: block;
    }
    & > a > img {
        width: 100%;
        -webkit-transition: all ease 0.3s;
        transition: all ease 0.3s;
    }
    & > img {
        width: 100%;
        -webkit-transition: all ease 0.3s;
        transition: all ease 0.3s;
    }

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`;
export const Image = styled.img`
    vertical-align: middle;
    border-style: none;
    width: 100%;
    transition: all ease 0.3s;
    border-style: none;

`;

export const CardContent = styled.div`
        padding: 0 10px;
        background-color: #032055;
`;
export const H5 = styled.h5`
    font-size: 20px;
    margin-top: -6px;
    font-weight: 600;
    padding: 23px 0;
    text-transform: capitalize;
    border-bottom: 1px dashed #11326f;

    &.mb-0 {
        margin-bottom: 0!important;
    }

    & > span{
        padding: 0 .5rem;
        overflow: hidden;
        display: block;
        text-overflow: ellipsis;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
        letter-spacing: .03125em;
        text-decoration: inherit;
        text-transform: inherit;
        font-smooth: auto;
        line-height: 1.25rem;
        color: #fff;
        cursor: pointer
    }
    & > span:hover {
        text-decoration: underline;
    }
    @media (min-width: 576px)
        h5 {
            font-size: 24px;
            margin-top: -8px;
        }
    }
`;

export const RatingGroup = styled.div`
    padding: 0 0.5rem;
    position: relative;
    min-height: 36px;
    display: flex;
    align-items: center;
    margin: 0px;
    border: 0px;
    font: inherit;
    vertical-align: baseline;
`;
export const Rating = styled.span`
    margin-right: 0.5rem;
    display: inline-flex;
    align-items: baseline;
    margin: 0px;
    padding: 0px;
    border: 0px;
    font: inherit;
    vertical-align: baseline;

    svg:not(svg) {
        overflow: hidden;
    }
    & > svg {
        vertical-align: middle;
        height: 0.8em;
        width: 1em;
        margin-right: 0.15em;
        color: #ffca0a;
    }
`;