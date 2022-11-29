import React from 'react'
import Button from "../../components/Button/Button"
import { LOGIN, INDEX } from "../../routes/Path"
import { Header, HeaderContainer, Container, HeaderWrapper, Logo, Menu, Items, 
    Link, Section, BurgerMenu, Banner, BannerThumb, BannerThumbImage, AnchorImage, BannerContent, H3Content, Tag, LanguageAnchor, MovieTypeAnchor, Duration, DurationArea, Item, ItemSpan, ItemHeader, Image, FafaI, BookSection, BookWrapper, LeftSide, BookButton, Thumb, CounterArea, CounterSpan, OdometerInsider, OdometerDigit, OdometerSpacer, OdometerInner, OdometerRibbon, OdometerRibbonInner, OdometerValue, ItemPara, DetailSection, Row, H3Title, DetailPhotos, MovieDetail, Column, OwlStageOuter, OwlItem, OwlStage, AnchorThumb, AnchorThumbImage, Summery, UlTab, LiTab, SpanTab, TabArea, Tabs, TabItem, H5Item, Para, TabHeader, TabH5, CastNavigator, CastingSlider } from "./Event.css"

function Event(props) {
    const Handle_Menu = (e) => {
        const bar = document.getElementById("bar");
        const leftmenu = document.getElementById("left-popup")
        if (!bar.classList.contains("active") && !leftmenu.classList.contains("active")) {
            bar.classList.add("active");
            leftmenu.classList.add("active")
        }
        else {
            bar.classList.remove("active")
            leftmenu.classList.remove("active")
        }
    }

    return (
    <>
    <Header>
        <HeaderContainer>
            <HeaderWrapper>
                <Logo>
                    <a href='/'>Logo</a>
                </Logo>
                <Menu id='left-popup'>
                    <Items><Link href={INDEX}>Home</Link></Items>
                    <Items><Link href="#0">Movies</Link></Items>
                    <Items><Link href="#0" className='active'>Events</Link></Items>
                    <Items><Button title="Login" func={() => props.history.push(LOGIN)} /></Items>
                </Menu>
                <BurgerMenu id='bar' onClick={Handle_Menu}>
                    <span></span><span></span><span></span>
                </BurgerMenu>
            </HeaderWrapper>
        </HeaderContainer>
    </Header>

    <Section className='details-banner bg_img'>
        <Container className='container'>
            <Banner className='details-banner-wrapper'>
                <BannerThumb className='details-banner-thumb'>
                    <BannerThumbImage src='assets/images/movie/venus.jpg'/>
                </BannerThumb>
                <BannerContent className='details-banner-content offset-lg-3'>
                    <H3Content>
                        Venus
                    </H3Content>
                    <Tag className='tags'>
                        <LanguageAnchor>English</LanguageAnchor>
                        {/* ::after */}

                        <LanguageAnchor>Hindi</LanguageAnchor>
                        <LanguageAnchor>Gujarati</LanguageAnchor>
                    </Tag>
                    <MovieTypeAnchor className='button'>
                        Horror
                    </MovieTypeAnchor>
                    <Duration className='social-and-duration'>
                        <DurationArea className='duration-area'>
                            <Item className='item'>
                                <FafaI className='fas fa-calendar-alt'>
                                    
                                </FafaI>
                                {/* ::before */}

                                <ItemSpan>06 Dec, 2020</ItemSpan>
                            </Item>
                            <Item className='item'>
                                <FafaI className='far fa-clock'>

                                </FafaI>
                                <ItemSpan>2 hrs 50 mins</ItemSpan>
                            </Item>
                        </DurationArea>
                    </Duration>
                </BannerContent>
            </Banner>
        </Container>
    </Section>

    <BookSection className='book-section bg-one'>
        <Container className='container'>
            <BookWrapper className='book-wrapper offset-lg-3'>
                <LeftSide className='left-side'>
                    <Item className='item'>
                        <ItemHeader className='item-header'>
                            <Thumb className='thumb'>
                                <Image src='assets/images/movie/tomato2.png'/>
                            </Thumb>
                            <CounterArea className='counter-area'>
                                <CounterSpan className='counter-item odometer odometer-auto-theme' data-odometer-final='88'>
                                    <OdometerInsider className='odometer-inside'>
                                        <OdometerDigit className='odometer-digit'>
                                            <OdometerSpacer className='odometer-digit-spacer'>8</OdometerSpacer>
                                            <OdometerInner className='odometer-digit-inner'>
                                                <OdometerRibbon className='odometer-ribbon'>
                                                    <OdometerRibbonInner className=''>
                                                        <OdometerValue className='odometer-value'>8</OdometerValue>
                                                    </OdometerRibbonInner>
                                                </OdometerRibbon>
                                            </OdometerInner>
                                        </OdometerDigit>

                                        <OdometerDigit className='odometer-digit'>
                                            <OdometerSpacer className='odometer-digit-spacer'>8</OdometerSpacer>
                                            <OdometerInner className='odometer-digit-inner'>
                                                <OdometerRibbon className='odometer-ribbon'>
                                                    <OdometerRibbonInner className=''>
                                                        <OdometerValue className='odometer-value'>8</OdometerValue>
                                                    </OdometerRibbonInner>
                                                </OdometerRibbon>
                                            </OdometerInner>
                                        </OdometerDigit>
                                    </OdometerInsider>
                                    {/* ::after */}
                                </CounterSpan>
                            </CounterArea>
                        </ItemHeader>
                        <ItemPara>
                            tomatometer
                        </ItemPara>
                    </Item>

                    {/* Item 2 */}
                    <Item className='item'>
                        <ItemHeader className='item-header'>
                            <Thumb className='thumb'>
                                <Image src='assets/images/movie/cake2.png'/>
                            </Thumb>
                            <CounterArea className='counter-area'>
                                <CounterSpan className='counter-item odometer odometer-auto-theme' data-odometer-final='88'>
                                    <OdometerInsider className='odometer-inside'>
                                        <OdometerDigit className='odometer-digit'>
                                            <OdometerSpacer className='odometer-digit-spacer'>8</OdometerSpacer>
                                            <OdometerInner className='odometer-digit-inner'>
                                                <OdometerRibbon className='odometer-ribbon'>
                                                    <OdometerRibbonInner className=''>
                                                        <OdometerValue className='odometer-value'>8</OdometerValue>
                                                    </OdometerRibbonInner>
                                                </OdometerRibbon>
                                            </OdometerInner>
                                        </OdometerDigit>

                                        <OdometerDigit className='odometer-digit'>
                                            <OdometerSpacer className='odometer-digit-spacer'>8</OdometerSpacer>
                                            <OdometerInner className='odometer-digit-inner'>
                                                <OdometerRibbon className='odometer-ribbon'>
                                                    <OdometerRibbonInner className=''>
                                                        <OdometerValue className='odometer-value'>8</OdometerValue>
                                                    </OdometerRibbonInner>
                                                </OdometerRibbon>
                                            </OdometerInner>
                                        </OdometerDigit>
                                    </OdometerInsider>
                                    {/* ::after */}
                                </CounterSpan>
                            </CounterArea>
                        </ItemHeader>
                        <ItemPara>
                            audience Score
                        </ItemPara>
                    </Item>

                    
                </LeftSide>
                <BookButton className='custom-button'>
                    book tickets
                </BookButton>
            </BookWrapper>
        </Container>
    </BookSection>

    <DetailSection className='movie-details-section padding-top padding-bottom'>
        <Container className='container'>
            <Row className='row justify-content-center flex-wrap-reverse mb--50'>
                <Column className='col-lg-9 mb-50'>
                    <MovieDetail className='movie-details'>
                        <H3Title className='title'>
                            Photos
                        </H3Title>
                        <DetailPhotos className='details-photos owl-carousel owl-loaded owl-drag'>
                            <OwlStageOuter className='owl-stage-outer'>
                                <OwlStage className='owl-stage'>
                                    <OwlItem className='owl-item active'>
                                        <Thumb className='thumb'>
                                            <AnchorThumb className='img-pop'>
                                                <AnchorThumbImage src="assets/images/movie/movie-details01.jpg">
                                                    
                                                </AnchorThumbImage>
                                            </AnchorThumb>
                                        </Thumb>
                                    </OwlItem>
                                </OwlStage>
                            </OwlStageOuter>
                        </DetailPhotos>


                        <Summery className='tab summery-review'>
                            <UlTab>
                                <LiTab className='active'>
                                    Summary 
                                </LiTab>
                                <LiTab className='active'>
                                    User Review
                                    <SpanTab>
                                        (147)
                                    </SpanTab>
                                </LiTab>
                            </UlTab>
                            <TabArea className='tab-area'>
                                <Tabs className='tab-item active'>
                                    <TabItem className='item'>
                                        <H5Item className='sub-title'>
                                            Synopsis
                                        </H5Item>
                                        <Para>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula eros sit amet est tincidunt aliquet. Fusce laoreet ligula ac ultrices eleifend. Donec hendrerit fringilla odio, ut feugiat mi convallis nec. Fusce elit ex, blandit vitae mattis sit amet, iaculis ac elit. Ut diam mauris, viverra sit amet dictum vel, aliquam ac quam. Ut mi nisl, fringilla sit amet erat et, convallis porttitor ligula. Sed auctor, orci id luctus venenatis, dui dolor euismod risus, et pharetra orci lectus quis sapien. Duis blandit ipsum ac consectetur scelerisque. 
                                        </Para>
                                    </TabItem>
                                    <TabItem className='item'>
                                        <TabHeader className='header'>
                                            <TabH5 className='sub-title'>
                                                cast
                                            </TabH5>
                                            {/* <CastNavigator className='navigation'>
                                            </CastNavigator> */}

                                            <CastingSlider className='casting-slider owl-carousel owl-loaded owl-drag'>

                                            </CastingSlider>
                                        </TabHeader>
                                    </TabItem>
                                </Tabs>
                            </TabArea>
                        </Summery>
                    </MovieDetail>
                </Column>
            </Row>
        </Container>
    </DetailSection>
    </>
  )
}

export default Event