import styled, { css } from "styled-components";

// Left side bar
export const LeftBar = styled.div`
    width: 250px;
    height: 100%;
    position: fixed;
    background: #ffffff;
    border-right: 1px solid rgba(0, 0, 0, 0.03);
    z-index: 9;
    transition: all 0.3s ease;

    @media (max-width: 767px)
    .leftbar {
        position: fixed;
        margin-left: -250px;
    }
}
`;

export const LogoBar = styled.div`
    padding: 15px 0;
    margin-bottom: 15px;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);

    & a {
        color: #0080ff;
    }

    & a img {
        width: 128px;
    }

    & a img.img-fluid {
        max-width: 100%;
        height: auto;
    }
`;

export const NavigationBar = styled.div`
    height: calc(100vh - 100px);
    overflow: auto;
    transition: 0.5s;
`;

export const VerticalMenu = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    & > li {
        position: relative;
        margin: 0;
        padding: 0;
    }

    & > li > a {
        padding: 10px 30px;
        display: block;
        color: #263a5b;
        text-decoration: none;
    }

    & > li > a > span {
        vertical-align: middle;
    }
    & > li > a > span.active {
        color: #00f;
    }

    &  li:hover > a > span {
        color: #00f;
    }
`;


export const RightBar = styled.div`
    margin-left: 250px;
    overflow: hidden;
    min-height: 500px;
    transition: all 0.3s ease;

    @media (max-width: 767px) {
        & {
            margin-left: 0 !important;
        }
    }
`;
export const NavBar = styled.div`
    background-color: #ffffff;
    padding: 15px 30px;
    position: fixed;
    z-index: 1;
    left: 250px;
    right: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    @media (max-width: 767px){
        .topbar {
            display: none;
        }
    }
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;

    &.align-items-center {
        align-items: center !important;
    }
`;

export const Col = styled.div`
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;

        &.align-self-center {
            align-self: center !important;
        }
        @media (min-width: 576px)
            &.col-sm-12 {
                -ms-flex: 0 0 100%;
                flex: 0 0 100%;
                max-width: 100%;
            }
        }
        @media (min-width: 768px){
            &.col-md-8 {
                flex: 0 0 66.666667%;
                max-width: 66.666667%;
            }
            &.col-md-12 {
                flex: 0 0 100%;
                max-width: 100%;
            }
        }

        @media (min-width: 768px){
            &.col-md-4 {
                flex: 0 0 auto;
                width: 33.33333333%;
            }
            &.col-lg-6 {
                flex: 0 0 auto;
                max-width: 50%;
            }
            &.col-lg-8 {
                flex: 0 0 66.666667%;
                max-width: 66.666667%;
            }
        }
        @media (min-width: 1200px)
            &.col-xl-12 {
                flex: 0 0 100%;
                max-width: 100%;
            }
        }
`;

export const RightTop = styled.div`
    display: inline-block;
    float: right;
`;

export const RightTopUL = styled.ul`
        margin-top: 0;
        padding-left: 0;
        list-style: none;
        margin-bottom: 0 !important;

        & li {
            display: inline-block;
        }

        & > li {
            margin-left: 0;
            margin-right: 0;
        }
`;
export const Dropdown = styled.div`
        position: relative;

        & a {
            padding: 15px 8px 5px;
            border-radius: 3px;
            white-space: nowrap;
        }
        & a img {
            width: 26px;
            max-width: 100%;
            height: auto;
            vertical-align: middle;
            border-style: none;
        }

        & a span {
            vertical-align: middle;
        }
`;

export const DropDownMenu = styled.div`
    padding: 5px 0;
    font-size: 15px;
    border: none;
    box-shadow: 0px 0px 30px 0px rgb(0 0 0 / 10%);
    background-color: #ffffff;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 0.25rem;
    &.show {
        display: block;
        position: absolute;
        transform: translate3d(-118px, 26px, 0px);
        top: 0px;
        left: 0px;
        will-change: transform;
    }
    .profile-bar & {
        top: 15px !important;
        border-radius: 3px;
        text-align: center;
        padding: 0;
    }
    &.dropdown-right {
        right: 0;
        left: auto;
    }
`;

const DropDownItemCSS = css`
    display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;

    .d-flex {
        display: flex;
        align-items: flex-start;
    }
`;
export const DropDownItem = styled.div`
    ${DropDownItemCSS}

    ${DropDownMenu} & {
        padding: 0.5rem 1rem;
        color: #8a98ac;
    }
    .profile-bar ${DropDownMenu} & {
        border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    }

    & > profile-name {
        padding: 5px 0;
    }
    & > .profile-name > h5 {
        margin-top: .4rem;
        margin-bottom: .4rem;
        font-size: 16px;
        color: #0080ff;
    }
`;

export const DropDownMoreItems = styled.div`
    margin-top: 7px;
    margin-bottom: 5px;

    & ul {
        padding-left: 0;
        list-style: none;
        margin-bottom: 0 !important;
    }

    ${DropDownItemCSS}

    & > ul > li {
        border-bottom: 1px solid rgba(0, 0, 0, 0.03);
        padding: 0.5rem 1rem;
        color: #8A98AC;
    }
    & > ul > li: hover > a {
        color: #0000ff;
    }

    & > ul >li > a {
        padding: 0;
        color: #263a5b;
        border-radius: 3px;
        text-decoration: none;
    }

    & > ul > li > a > span {
        margin-right: 5px;
    }
`;

// Breadcumb

export const Breadcrumbbar = styled.div`
    margin: 100px 30px 0 30px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 3px;
`;

export const PageTitle = styled.h4`
    font-size: 18px;
    color: #263a5b;
    margin-bottom: 5px;
    margin-top: 0;
`;

export const BreadcrumbbarList = styled.div`
    text-align: left;
    margin-top: 3px;
    & ol {
        display: flex;
        flex-wrap: wrap;
        padding: 0.75rem 1rem;
        margin-bottom: 1rem;
        list-style: none;
        background-color: #e9ecef;
        border-radius: 0.25rem;

        margin: 0;
        padding: 0;
        display: inline-flex;
        background-color: transparent;
    }

    & ol li {
        display: flex;
    }

    & ol li a {
        text-decoration: none;
        color: #8A98AC;
    }

    & ol span {
        font-size: 17px;
        line-height: 1.3;
    }
    ol li.active {
        color: #263a56;
    }
`;


// ? mobile menu 
export const MobileNavBar = styled.div`
    display: none;
    background-color: #ffffff;
    padding: 15px 25px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
`;

// Main section
export const ContentBox = styled.div`
    padding: 30px;
    margin-bottom: 30px;
`;

//Footer 
export const Footer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 250px;
    padding: 20px 30px;
    text-align: center;
    background-color: #ffffff;

    & footer p {
            margin-bottom: 0!important;
    }
`;