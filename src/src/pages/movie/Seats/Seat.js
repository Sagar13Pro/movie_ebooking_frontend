import React, { useState } from 'react'
import "./index.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router-dom"
import { BOOKING } from '../../../routes/Path';

function Seat({ payload }) {
    const history = useHistory();
    const ticketsPrice = { adult: 10.98, child: 9.8, senior: 10.50 }
    const [tickets, setTickets] = useState({ adult: 0, child: 0, senior: 0 })
    const [seat, setSeat] = useState([
        "A1",
        "A2",
        "A3",
        "A4",
        "A5",
        "A6",
        "A7",
        "A8",
        "A9",
        "A10",
        "A11",
        "A12",
        "A13",
        "A14",
        "A15",
        "A16",
        "A17",

        "B1",
        "B2",
        "B3",
        "B4",
        "B5",
        "B6",
        "B7",
        "C1",
        "C2",
        "C3",
        "C4",
        "C5",
        "C6",
        "C7",
        "C8"
    ])
    const [availableSeat, setAvailableSeat] = useState([
        "A1",
        "A2",
        "A3",
        "A4",
        "A5",
        "A6",
        "A7",
        "A8",
        "A9",
        "A10",
        "A11",
        "A12",
        "A13",
        "A14",
        "A15",
        "A16",
        "A17",

        "B1",
        "B2",
        "B3",
        "B4",
        "B5",
        "B6",
        "B7",
        "C1",
        "C2",
        "C3",
        "C4",
        "C5",
        "C6",
        "C7",
        "C8"
    ])
    const [reservedSeat, setReservedSeat] = useState([])
    const [selectedSeat, setSelectedSeat] = useState([])
    const [totalSeat, setTotalSeat] = useState(0);
    const [MaxTotalSeat, setMaxTotalSeat] = useState(0);

    const onClickData = (seat) => {
        if (reservedSeat.indexOf(seat) > -1) {
            setAvailableSeat(availableSeat.concat(seat))
            setReservedSeat(reservedSeat.filter((res) => res === seat))
        } else {
            setReservedSeat(reservedSeat.concat(seat))
            setAvailableSeat(availableSeat.filter((res) => res === seat))
        }
    }

    const checktrue = (row) => {
        if (selectedSeat.indexOf(row) > -1) {
            return false;
        } else {
            return true;
        }
    }

    const Handle_Seats = () => {
        setSelectedSeat(selectedSeat.concat(reservedSeat))
        setReservedSeat([])
        payload.seats = reservedSeat
        setTotalSeat(reservedSeat.length)
        setMaxTotalSeat(reservedSeat.length)
    }
    const Handle_Tickets = () => {
        let totalPrice = 0;
        for (const [key, value] of Object.entries(tickets)) {
            if (key === "adult") {
                totalPrice += value * ticketsPrice.adult
            } else if (key === "child") {
                totalPrice += value * ticketsPrice.child
            } else {
                totalPrice += value * ticketsPrice.senior
            }
        }
        payload.tickets = tickets
        payload.price = Math.ceil(totalPrice)
        if (payload.tickets)
            history.push({ pathname: `${BOOKING}`, state: payload })
    }

    const CounterIncrement = (ticketType) => {
        if (totalSeat > 0) {
            setTotalSeat(totalSeat - 1)
            switch (ticketType) {
                case "Adult": { setTickets({ ...tickets, adult: tickets.adult + 1 }); break; }
                case "Child": { setTickets({ ...tickets, child: tickets.child + 1 }); break; }
                case "Senior": { setTickets({ ...tickets, senior: tickets.senior + 1 }); break; }
                default: break;
            }
        }
    }
    const CounterDecrement = (ticketType) => {
        if (totalSeat < MaxTotalSeat) {
            setTotalSeat(totalSeat + 1)
            switch (ticketType) {
                case "Adult": { setTickets({ ...tickets, adult: tickets.adult - 1 }); break; }
                case "Child": { setTickets({ ...tickets, child: tickets.child - 1 }); break; }
                case "Senior": { setTickets({ ...tickets, senior: tickets.senior - 1 }); break; }
                default: break;
            }
        }
    }
    return (
        <>
            {MaxTotalSeat}
            <div>
                <h1>Seat Reservation System</h1>
                <h3>You selected seats: {reservedSeat && `${reservedSeat},`}</h3>
                <DrawGrid
                    seat={seat}
                    available={availableSeat}
                    reserved={reservedSeat}
                    selected={selectedSeat}
                    onClickData={onClickData}
                    checktrue={checktrue}
                    handleSubmited={Handle_Seats}
                />
            </div>
            {
                MaxTotalSeat && (
                    <Row className='my-5'>
                        <h4>{totalSeat}</h4>
                        <Col xs={12} className="d-flex">
                            <button type='button' disabled={tickets.child > 0} onClick={() => CounterDecrement("Adult")}>-</button>
                            <div>{tickets.adult} Adult - ${ticketsPrice.adult}</div>
                            <button type='button' disabled={tickets.adult === MaxTotalSeat} onClick={() => CounterIncrement("Adult")}>+</button>
                        </Col>
                        <Col xs={12} className="d-flex">
                            <button type='button' disabled={totalSeat === 0 && tickets.child > 0} onClick={() => CounterDecrement("Child")}>-</button>
                            <div>{tickets.child} Children (2-12) - ${ticketsPrice.child}</div>
                            <button type='button' onClick={() => CounterIncrement("Child")}>+</button>
                        </Col>
                        <Col xs={12} className="d-flex">
                            <button type='button' disabled={totalSeat === 0 && tickets.child > 0} onClick={() => CounterDecrement("Senior")}>-</button>
                            <div>{tickets.senior} Senior (60+) - ${ticketsPrice.senior}</div>
                            <button type='button' onClick={() => CounterIncrement("Senior")}>+</button>
                        </Col>
                        {totalSeat === 0 && (<Col>
                            <button onClick={Handle_Tickets}>Confirm</button>
                        </Col>)}
                    </Row>
                )
            }
        </>
    )
}

const DrawGrid = ({ seat, available, reserved, selected, onClickData, checktrue, handleSubmited }) => {
    const onClickSeat = (row) => onClickData(row);
    return (
        <Row xs={12}>
            <Col>
                <table className="grid">
                    <tbody>
                        <tr>
                            {seat.map((row) => (
                                <td
                                    className={
                                        selected.indexOf(row) > -1
                                            ? "reserved"
                                            : reserved.indexOf(row) > -1
                                                ? "selected-seat"
                                                : "available"
                                    }
                                    key={row}
                                    onClick={
                                        checktrue(row)
                                            ? (e) => onClickSeat(row)
                                            : null
                                    }
                                >
                                    {row}{" "}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
                <button
                    type="button"
                    className="btn-success btnmargin"
                    onClick={() => handleSubmited()}
                >
                    Confirm Seat
                </button>
            </Col>
        </Row>
    )
}
export default Seat