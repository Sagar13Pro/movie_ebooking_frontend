import React from 'react'
import Layout from '../layout/movie/Layout.movie'

import { Container, CustomSection, Row, Col, Image, CardContent, H5, Card, CardHeader, CardThumb, RatingGroup, Rating } from "../layout/movie/layout.css"

function Movie(props) {

    const Movies = [{ p: 7 }]
    return (
        <>
            <Layout
                BannerTitle={"Get Your Ticket"}
                BannerPara={"Dont't miss the show..."}
                SearchSection={false}
                MovieSection={false}
                EventSection={false}
                Page={"Movie"}
                children={
                    <>
                        {/* Movie Section */}
                        <CustomSection>
                            <Container>
                                <Row className='flex-wrap-rev justify-content-center'>
                                    <Col className='col-lg-12 mb-50 mb-lg-0'>
                                        <div className='filter'>
                                            <div>
                                                <Card className='tab-item active'>
                                                    <Row className='mb-10 justify-content-center'>
                                                        {
                                                            Movies.map((res, ind) => (
                                                                <>
                                                                    <Col className='col-sm-6 col-lg-4'>
                                                                        <CardHeader>
                                                                            <CardThumb>
                                                                                <a href='#0'>
                                                                                    <Image src='assets/images/movie/movie01.jpg' />
                                                                                </a>
                                                                            </CardThumb>
                                                                            <CardContent>
                                                                                <RatingGroup>
                                                                                    <Rating>
                                                                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
                                                                                        <span>{res.p}</span>
                                                                                    </Rating>
                                                                                </RatingGroup>
                                                                                <H5 className='mb-0'>
                                                                                    <a href='#0'>
                                                                                        <span>Alone</span>
                                                                                    </a>
                                                                                </H5>
                                                                            </CardContent>
                                                                        </CardHeader>
                                                                    </Col>
                                                                </>
                                                            ))
                                                        }
                                                    </Row>
                                                </Card>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </CustomSection>
                    </>
                }
            />
        </>
    )
}

export default Movie