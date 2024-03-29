import React, { useEffect, useState } from 'react'
import Button from "../../../components/Button/Button"
import { LOGIN, INDEX, MOVIELIST, EVENTLIST } from "../../../routes/Path"
import TypewriterComponent from 'typewriter-effect';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"
import Api from '../../../apis/Api';

import {
    Header, Container, HeaderWrapper, Logo, Menu, Items, Link, Section, BurgerMenu, Banner, BannerContent, Title, Span, SearchSections, SearchTab, Row, Col, SearchHeader, TabMenuUl, TabForm, TabArea, TabFormGroup, TabFormInput, TabImage, TabItem, TabMenuList, TabThumbnail, CustomSection, CustomHeader, CustomTabArea, CarouselImage, CarouselItems, CarouselThumb, HeaderLeft, HeaderLeftTitle, HeaderRight, HeaderRightList, FooterArea, FooterContent, FooterLeft, FooterLinks, FooterSection
} from "./layout.css"

function Base({ banner_title, banner_paragraph, banner_section = true, search_section = true, event_section = true, movie_section = true, page = "Home", title, children, props }) {

    document.title = title;
    const [Thumbnail, setThumbnail] = useState([]);
    const [EventThumb, setEventThumb] = useState([]);

    useEffect(() => {
        Api.get(`/movie/all`)
            .then(res => {
                if (res.data.status)
                    setThumbnail(res.data.movies)
            })
            .catch(er => console.log(er))
        Api.get(`/event/all`)
            .then(res => {
                if (res.data.status)
                    setEventThumb(res.data.events)
            })
            .catch(er => console.log(er))
    }, [])


    const handle_Search_Btn = () => {
        let movieBtn = document.getElementById("movie-btn")
        let eventBtn = document.getElementById("event-btn")

        let movieSearch = document.getElementById("movie-search")
        let eventSearch = document.getElementById("event-search")

        if (movieBtn.classList.contains("active") && movieSearch.classList.contains("active")) {
            eventBtn.classList.add("active")
            movieBtn.classList.remove("active")

            eventSearch.classList.add("active")
            movieSearch.classList.remove("active")
        } else {
            movieBtn.classList.add("active")
            eventBtn.classList.remove("active")

            movieSearch.classList.add("active")
            eventSearch.classList.remove("active")
        }
    }
    // burger bar
    const Handle_Menu = () => {

        const bar = document.getElementById("bar")
        const menu = document.getElementById("menu")

        if (!bar.classList.contains("active") && !menu.classList.contains("active")) {
            bar.classList.add("active")
            menu.classList.add("active")
        }
        else {
            bar.classList.remove("active")
            menu.classList.remove("active")
        }
    }
    return (
        <div style={{ color: "#fff" }}>
            <Header>
                <Container>
                    <HeaderWrapper>
                        <Logo>
                            <a href='/'>Logo</a>
                        </Logo>
                        <Menu id='menu'>
                            <Items><Link href={`${page === "Home" ? "#0" : INDEX}`} className={`${page === "Home" ? "active" : ''}`}>Home</Link></Items>
                            <Items><Link href={`${page === "Movie" ? "#0" : MOVIELIST}`} className={`${page === "Movie" ? "active" : ''}`}>Movies</Link></Items>
                            <Items><Link href={`${page === "Event" ? "#0" : EVENTLIST}`} className={`${page === "Event" ? "active" : ''}`} >Events</Link></Items>
                            <Items><Button title="Login" func={() => props.history.push(LOGIN)} /></Items>
                        </Menu>
                        <BurgerMenu id='bar' onClick={Handle_Menu}>
                            <span></span><span></span><span></span>
                        </BurgerMenu>
                    </HeaderWrapper>
                </Container>
            </Header>

            {
                banner_section && (
                    <>
                        <Section>
                            <Banner style={{ "backgroundImage": "url('./assets/images/sign_login/sign_login_bg.jpg')" }}></Banner>
                            <Container>
                                <BannerContent>
                                    <Title>
                                        {banner_title ?
                                            (
                                                banner_title
                                            ) :
                                            (
                                                <>
                                                    <Span>book your</Span>
                                                    ticket for <TypewriterComponent options={{
                                                        strings: ["Movie", "Events"],
                                                        autoStart: true,
                                                        loop: true,
                                                    }} />
                                                </>
                                            )
                                        }
                                    </Title>
                                    <p>
                                        {
                                            banner_paragraph ? (banner_paragraph) : (<>Safe, secure, reliable ticketing.Your ticket to live entertainment!</>)
                                        }
                                    </p>
                                </BannerContent>
                            </Container>
                        </Section>
                    </>
                )
            }

            {/* Search Section */}
            {
                search_section && (
                    <>
                        <SearchSections>
                            <Container>
                                <SearchTab>
                                    <Row>
                                        <Col>
                                            <SearchHeader>
                                                <h6>welcome to movie ebooking</h6>
                                                <h3>what are you looking for</h3>
                                            </SearchHeader>
                                        </Col>
                                        <Col>
                                            <TabMenuUl>
                                                <TabMenuList id='movie-btn' className='active' onClick={handle_Search_Btn}>
                                                    <TabThumbnail>
                                                        <TabImage src='../assets/images/icons/popcorn.png' />
                                                    </TabThumbnail>
                                                    <span>Movie</span>
                                                </TabMenuList>
                                                <TabMenuList id='event-btn' onClick={handle_Search_Btn}>
                                                    <TabThumbnail>
                                                        <TabImage src='../assets/images/icons/events.png' />
                                                    </TabThumbnail>
                                                    <span>Events</span>
                                                </TabMenuList>
                                            </TabMenuUl>
                                        </Col>
                                    </Row>
                                    {/* Movie Search */}
                                    <TabArea className='active' id='movie-search'>
                                        <TabItem>
                                            <TabForm>
                                                <TabFormGroup className='w-100'>
                                                    <TabFormInput type={"search"} placeholder="Search For Movies" />
                                                </TabFormGroup>
                                            </TabForm>
                                        </TabItem>
                                    </TabArea>
                                    <TabArea className='d-none' id='event-search'>
                                        <TabItem>
                                            <TabForm>
                                                <TabFormGroup className='w-100'>
                                                    <TabFormInput type={"search"} placeholder="Search For Events" />
                                                </TabFormGroup>
                                            </TabForm>
                                        </TabItem>
                                    </TabArea>
                                </SearchTab>
                            </Container>
                        </SearchSections>
                    </>
                )
            }

            {/* Movie Section */}
            {
                movie_section && (
                    <>
                        <CustomSection>
                            <Container>
                                <div>
                                    <CustomHeader>
                                        <HeaderLeft>
                                            <HeaderLeftTitle>Movies</HeaderLeftTitle>
                                            <p>Be sure to get your seats</p>
                                        </HeaderLeft>
                                        <HeaderRight>
                                            <HeaderRightList className='active'>Now Showing</HeaderRightList>
                                            <HeaderRightList>Exclusive</HeaderRightList>
                                        </HeaderRight>
                                    </CustomHeader>
                                    <CustomTabArea>
                                        <Carousel autoPlay={true} showStatus={false} infiniteLoop={true} centerMode={true}>
                                            {
                                                Thumbnail.map((poster, index) => (
                                                    <CarouselItems key={index}>
                                                        <CarouselThumb >
                                                            <CarouselImage src={poster.Thumbnail} alt={poster.Title} />
                                                        </CarouselThumb>
                                                    </CarouselItems>

                                                ))
                                            }
                                        </Carousel>
                                    </CustomTabArea>
                                </div>
                            </Container>
                        </CustomSection>
                    </>
                )
            }

            {/* Event Section */}
            {
                event_section && (
                    <>
                        <CustomSection>
                            <Container>
                                <div>
                                    <CustomHeader>
                                        <HeaderLeft>
                                            <HeaderLeftTitle>Events</HeaderLeftTitle>
                                            <p>Here is what you looking for</p>
                                        </HeaderLeft>
                                        <HeaderRight>
                                            <HeaderRightList className='active'>Now Showing</HeaderRightList>
                                            <HeaderRightList>Exclusive</HeaderRightList>
                                        </HeaderRight>
                                    </CustomHeader>
                                    <CustomTabArea>
                                        <Carousel autoPlay={true} showStatus={false} infiniteLoop={true} centerMode={true} showThumbs={false}>
                                            {
                                                EventThumb.map((event, index) => (
                                                    <CarouselItems key={index}>
                                                        <CarouselThumb >
                                                            <CarouselImage src={event.Thumbnail} alt={event.Title} />
                                                        </CarouselThumb>
                                                    </CarouselItems>

                                                ))
                                            }
                                        </Carousel>
                                    </CustomTabArea>
                                </div>
                            </Container>
                        </CustomSection>
                    </>
                )
            }

            {/* Passed Child */}
            {
                <CustomSection>
                    {children}
                </CustomSection>
            }

            {/* Footer */}
            <FooterSection>
                <Container>
                    <FooterContent>
                        <FooterArea>
                            <FooterLeft>
                                <p>Copyright © 2020.All Rights Reserved By <a href="#0">Movie eBooking </a></p>
                            </FooterLeft>
                            <FooterLinks>
                                <li>
                                    <a href="#0">Terms Of Use</a>
                                </li>
                                <li>
                                    <a href="#0">About</a>
                                </li><li>
                                    <a href="#0">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#0">FAQ</a>
                                </li>
                                <li>
                                    <a href="#0">Feedback</a>
                                </li>
                            </FooterLinks>
                        </FooterArea>
                    </FooterContent>
                </Container>
            </FooterSection>
        </div>
    )
}

export default Base