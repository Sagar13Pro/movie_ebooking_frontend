import React, { useState } from 'react'
import Auth from '../../services/Auth'
import Payment from "./Payment"

function Booking(props) {
    const { email } = Auth.getDetails();
    const [details, setDetails] = useState(props.location.state)
    const [status, setStatus] = useState();
    const screen = ["Aud 1", "Aud 2", "Aud 3", "Aud 4", "Aud 51"]

    const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
    )
    console.log(props)
    return (
        <>
            {
                (status || clientSecret) ? (<Payment data={props.location.state} history={props} client={clientSecret} />) :
                    (
                        details && (
                            <>
                                <h3>Booking as: {email}</h3>
                                <h3>location: {details.cinemaName}</h3>
                                <h3>Screen: {screen[0]}</h3>
                                <h3>On: Dec 2</h3>
                                <h3>Time: {details.showTime}</h3>
                                <h3>Seats: {details.seats.map(seat => `${seat},`)}</h3>
                                <h3>
                                    Adult : {details.tickets.adult}<br />
                                    Child: {details.tickets.child}<br />
                                    Senior: {details.tickets.senior}<br /><br />

                                    Total : {details.price}
                                </h3>

                                <button onClick={() => setStatus(true)}>Continue to Pay</button>
                            </>)
                    )
            }        </>
    )
}

export default Booking