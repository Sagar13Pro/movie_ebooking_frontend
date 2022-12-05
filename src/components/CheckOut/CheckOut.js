import React, { useEffect, useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements,
    AddressElement
} from "@stripe/react-stripe-js";
import "./style.css"
import Api from "../../apis/Api";
import Auth from "../../services/Auth";
import { DASHBOARD } from "../../routes/Path";
import { useHistory } from "react-router-dom";



export default function CheckOut({ history }) {
    const location = useHistory();
    const data = history.location.state
    const { email } = Auth.getDetails()
    // const return_url = props.location.pathname
    const stripe = useStripe();
    const elements = useElements();
    const [status, setStatus] = useState(false)
    const [message, setMessage] = useState({ message: "", status: false });
    const [isLoading, setIsLoading] = useState(false);

    const Redirect = () => {
        setTimeout(() => {
            location.push(DASHBOARD)
        }, 4000)
    }

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }
        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded": {
                    setMessage("Payment succeeded!");
                    setStatus(true)
                    Api.post(`/user/book/movie`, { paymentIntent: paymentIntent, cinema_details: JSON.parse(sessionStorage.getItem("data")) })
                        .then(res => {
                            if (res.status)
                                Redirect()
                        })
                        .catch(e => console.log(e))
                    break;
                }
                case "processing":
                    setStatus(true)
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setStatus(false)
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setStatus(false)
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setIsLoading(true);
        sessionStorage.setItem("data", JSON.stringify(data))
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${process.env.REACT_APP_FRONTEND_BASE_URL}/booking/status`,
                receipt_email: email,
            },
        });
        if (error.type === "card_error" || error.type === "validation_error") {
            localStorage.removeItem("payload")
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }
        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs"
    }

    return (
        <div id="container">
            {
                status ? (<>
                    {message && <div id="payment-message">{message}</div>}</>) :
                    (
                        <>
                            <form id="payment-form" onSubmit={handleSubmit}>
                                <h4 className="font-color-dark">Amount To Pay: {data?.price}</h4>
                                <label htmlFor="email">Login as</label>
                                <input
                                    id="email"
                                    type="text"
                                    placeholder="Enter email address"
                                    value={email}
                                    readOnly
                                />

                                <PaymentElement id="payment-element" options={paymentElementOptions} />
                                <AddressElement options={{
                                    mode: "billing", allowedCountries: ['US'],
                                    blockPoBox: true,
                                    fields: {
                                        phone: 'always',
                                    }
                                }} />
                                <button disabled={isLoading || !stripe || !elements} id="submit" className="payment-btn">
                                    <span id="button-text">
                                        {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                                    </span>
                                </button>
                            </form>
                        </>
                    )
            }
        </div>
    );
}