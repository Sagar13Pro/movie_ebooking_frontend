import React, { useEffect } from 'react'
import { useJwt } from "react-jwt"
import Api from "../../apis/Api"
import { LOGIN } from "../../routes/Path"

function VerifyEmail(props) {
    const token = props.location.search.split("=")[1];
    const { decodedToken, isExpired } = useJwt(token);

    useEffect(() => {
        if (decodedToken && isExpired) {
            Api.get(`/user/verify/${token}`)
                .then(res => {
                    console.log(res)
                    if (res.data.status) {
                        setTimeout(() => props.history.push(LOGIN), 4000)
                    }
                })
                .catch(err => console.log(err))
        }
    }, [decodedToken, token, props, isExpired])
    return (
        <>
            <div style={{ color: "#fff" }}>
                {isExpired ?
                    <div style={{ position: "absolute", top: "50%", left: "50%" }}>Expired Page</div> :
                    <div style={{ position: "absolute", top: "50%", left: "50%" }}>Please Wait...</div>}
            </div>
        </>
    )
}

export default VerifyEmail