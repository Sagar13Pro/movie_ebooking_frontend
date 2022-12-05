/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { LOGIN } from "../../routes/Path"
import DropDown from "../../components/Dropdown/Dropdown"
import 'bootstrap/dist/css/bootstrap.css'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Layout from "../layout/movie/Layout.movie"
import Api from '../../apis/Api'
import Auth from '../../services/Auth'
import Seat from './Seats/Seat'
import Avatar from '../../components/Avatar/Avatar'
function Movie(props) {
    const [payload, setPayload] = useState({ showTime: "", cinemaName: "", date: "", movie: "" })
    const [item, setItem] = useState()
    // state that is passed from movie-list
    const ID = useParams();
    const history = useHistory();

    useEffect(() => {
        Api.get(`movie/${ID.name}`)
            .then(res => {
                if (res.data.status) {
                    setPayload({ ...payload, movie: res.data?.movie?.Title })
                    setItem(res.data.movie)
                }
            })
            .catch(err => console.log(err))
    }, [ID])

    const handle_Booking = (time) => {
        const cinema = document.getElementById("drop-value").value
        if (cinema !== "More Actions" && time) {
            setPayload({ ...payload, cinemaName: cinema, showTime: time })
        }
        //if login do ntg else redirect to login
        if (!Auth.getDetails().email) {
            history.push({ pathname: LOGIN, state: { fromMovie: true, redirect_url: history.location.pathname } })
        }
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
    );
    return (
        <>
            {
                (Auth.getDetails().email && payload.cinemaName && payload.showTime) || clientSecret ?

                    (<Seat payload={payload} props={props} />) :
                    (
                        <Layout
                            banner_section={false}
                            search_section={false}
                            movie_section={false}
                            event_section={false}
                            page={"Movie"}
                            props={props}
                            title={item?.Title}
                            children={
                                item && (
                                    <>
                                        <Container fluid>
                                            <Row>
                                                <Col xs={12}>
                                                    <Card>
                                                        <Card.Img
                                                            overview="hidden" src={item.Thumbnail} alt="Card Image" />
                                                    </Card>
                                                </Col>
                                            </Row>
                                            <Row className='my-3 p-3'>
                                                <Col xs={12} md={6}>
                                                    <h3>{item.Title}</h3>
                                                </Col>
                                            </Row>
                                            <Row className="my-2 justify-content-center">
                                                <Col xs={12} className="my-3">
                                                    <DropDown values={["Regal", "Showcase Lowell", "Showcase Boston"]} />
                                                </Col>
                                                <Col className="text-center d-flex justify-content-center" xs={12}>

                                                    {item.Dates.map((date, key) => (
                                                        <span key={key} className="mx-2">
                                                            <button className="btn btn-outline-danger" onClick={() => setPayload({ ...payload, date: date })} >{date}</button>
                                                        </span>
                                                    ))}
                                                </Col>
                                            </Row>
                                            <Row className="text-center my-5">
                                                <Col xs={12}>
                                                    <h6 className='my-4'>Cinemas | 2D/3D | Closed Captions | PG-13</h6>
                                                    {item.ShowTime.map((time, key) => (
                                                        <span key={key} className="mx-3">
                                                            <button className="btn btn-outline-secondary mx-2" onClick={() => handle_Booking(time)}>{time}</button>
                                                        </span>
                                                    ))}
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Row className='my-3'>
                                                    <Col>
                                                        <h4>Synopsis</h4>
                                                    </Col>
                                                    <Col xs={12} md={8}>
                                                        <p>{item?.Synosis}</p>
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginTop: "6rem" }}>
                                                    <Col>
                                                        <h4>Cast & Crew</h4>
                                                    </Col>
                                                    <Col className='d-flex' xs={12} md={8}>
                                                        {
                                                            item.Cast.map((el, index) => (
                                                                <Avatar
                                                                    name={el.name}
                                                                    role={el.roleName}
                                                                    src={el.image}
                                                                    key={index} />
                                                            ))
                                                        }
                                                    </Col>
                                                </Row>
                                            </Row>
                                        </Container>
                                    </>
                                )
                            }
                        />
                    )
            }
        </>
    )
}


export default Movie