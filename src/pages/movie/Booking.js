import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React, { useEffect, useState } from 'react'
import Checkout from "../../components/CheckOut/CheckOut"

const stripePromise = loadStripe("pk_test_51M8eJpIEQKqcK2hc2nESvdqYR0PiKNMJU0HGI5fFNA9BwNmNneNHS2sF06aduEZSRUn3DI5mgFVBCXwYIg6muSEl00QIcBp69d")

function Booking() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#fff";
    const [clientSecret, setClientSecret] = useState(null);

    useEffect(() => {
        fetch("http://localhost:4000/api/v1/user/book", { method: "POST" })
            .then(async (r) => {
                const { client_secret } = await r.json();
                setClientSecret(client_secret)
            })
    }, [])
    const options = {
        clientSecret,
        appearance: {
            theme: 'flat',
        }
    };
    return (
        <>
            {
                stripePromise && clientSecret && (
                    <Elements stripe={stripePromise} options={options}>
                        <Checkout />
                    </Elements>)
            }
        </>
    )
}

export default Booking