import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React, { useEffect, useState } from 'react'
import Checkout from "../../components/CheckOut/CheckOut"
import Api from "../../apis/Api"
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK_KEY)

function Payment({ history, client }) {
    const state = history.location.state
    document.getElementsByTagName("body")[0].style.backgroundColor = "#fff";
    const [clientSecret, setClientSecret] = useState(client);
    useEffect(() => {
        if (state)
            Api.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/user/book`, { data: state })
                .then(async (r) => {
                    console.log(r)
                    const { client_secret } = r.data;
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
                        <Checkout clientSecret={clientSecret} history={history} />
                    </Elements>)
            }
        </>
    )
}

export default Payment