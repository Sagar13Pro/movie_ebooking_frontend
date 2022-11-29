import React from 'react'
import Auth from '../../../services/Auth'
import Api from '../../../apis/Api'
import { PROFILE } from '../../../routes/Path'
import {
    Col,
    Dropdown,
    DropDownItem,
    DropDownMenu,
    DropDownMoreItems,
    Footer,
    LeftBar,
    LogoBar,
    NavBar,
    NavigationBar,
    RightBar,
    RightTop,
    RightTopUL,
    Row,
    VerticalMenu,
    Breadcrumbbar,
    BreadcrumbbarList,
    PageTitle,
    ContentBox
} from './layout.css'

function Layout({ Component, props, Breadcrumb = "None", Dashboard = "#0" }) {

    const Handle_DropDown = () => {
        const profile_menu = document.getElementById("menu");
        if (!profile_menu.classList.contains("show"))
            profile_menu.classList.add("show")
        else
            profile_menu.classList.remove("show")
    }

    const Handle_Logout = () => {
        Api.get("/user/logout", { Credential: true })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        if (Auth.isAuthenciated())
            Auth.logout(() => props.history.push("/"))
    }
    const { fname, lname } = Auth.getDetails();
    return (
        <>
            <LeftBar>
                <div className="sidebar">
                    <LogoBar>
                        <a href='#0'>
                            <img src="./assets/images/logo/logo.svg" alt="logo" className="img-fluid" />
                        </a>
                    </LogoBar>
                    <NavigationBar>
                        <VerticalMenu>
                            <li>
                                <a href={Dashboard}>
                                    <span className={Dashboard === "#0" ? "active" : ""}>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href='#0'>
                                    <span>Movies</span>
                                </a>
                            </li>
                        </VerticalMenu>
                    </NavigationBar>
                </div>
            </LeftBar>
            <RightBar>
                {/* mobile start */}
                {/* mobile  end  */}
                <NavBar>
                    <Row className='align-items-center'>
                        <Col className='col-md-12 align-self-center'>
                            <RightTop>
                                <RightTopUL>
                                    <li>
                                        <div className="profile-bar">
                                            <Dropdown>
                                                <a href='#0' role={"button"} onClick={Handle_DropDown}>
                                                    <img src='./assets/images/user/profile.svg' alt='user' />
                                                    <span id="icon" className="material-symbols-outlined">
                                                        expand_more
                                                    </span>
                                                </a>
                                                {/* <span>Hello, Sagar Patel</span> */}
                                                <DropDownMenu id='menu'>
                                                    <DropDownItem>
                                                        <div className="profile-name">
                                                            <h5>{(fname && lname) && ` ${fname} ${lname}`}</h5>
                                                        </div>
                                                    </DropDownItem>
                                                    <DropDownMoreItems>
                                                        <ul>
                                                            <li className='d-flex'>
                                                                <a href={PROFILE} className='icon'>
                                                                    <span className="material-symbols-outlined">
                                                                        person
                                                                    </span>
                                                                    <span> My Profile</span>
                                                                </a>
                                                            </li>
                                                            <li className='d-flex'>
                                                                <a href='#0' className='icon'>
                                                                    <span className="material-symbols-outlined">
                                                                        credit_card
                                                                    </span>
                                                                    <span> Credit Card</span>
                                                                </a>
                                                            </li>
                                                            <li className='d-flex'>
                                                                <a href='#0' className='icon' onClick={Handle_Logout}>
                                                                    <span className="material-symbols-outlined">
                                                                        logout
                                                                    </span>
                                                                    <span> Logout</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </DropDownMoreItems>
                                                </DropDownMenu>
                                            </Dropdown>
                                        </div>
                                    </li>
                                </RightTopUL>
                            </RightTop>
                        </Col>
                    </Row>
                </NavBar>

                {/* Breadcrumbbar */}
                <Breadcrumbbar>
                    <Row className='align-items-center'>
                        <Col className='col-md-8 col-lg-8'>
                            <PageTitle>
                                Hello,{(fname && lname) && ` ${fname} ${lname}`}
                            </PageTitle>
                            <BreadcrumbbarList>
                                <ol className='breadcrumb'>
                                    <li className='breadcrumb-item'>
                                        <a href='#0' >Home</a>
                                    </li>
                                    <span className="material-symbols-outlined">
                                        chevron_right
                                    </span>
                                    <li className='breadcrumb-item active'>
                                        {Breadcrumb}
                                    </li>
                                </ol>
                            </BreadcrumbbarList>
                        </Col>
                    </Row>
                </Breadcrumbbar>

                {/* Main Section */}
                <ContentBox>
                    <Row>
                        <Col className='col-sm-12 col-lg-12'>
                            {Component}
                        </Col>
                    </Row>
                </ContentBox>

                {/* Footer */}
                <Footer>
                    <footer>
                        <p>© 2022 Movie-eBooking - All Rights Reserved.</p>
                    </footer>
                </Footer>
            </RightBar>
        </>
    )
}

export default Layout