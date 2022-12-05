import Cookie from "js-cookie"
import { v4 as uuid4, validate } from "uuid"
import { decodeToken } from "react-jwt"
class Auth {
    constructor() {
        this.authenticated = false
    }
    login(token, callback) {
        Cookie.set("_uses", uuid4(), { expires: 60 * 60 * 24 })
        this.authenticated = true;
        if (validate(Cookie.get("_uses"))) {
            if (!localStorage.getItem("whoami"))
                localStorage.setItem("whoami", token)
            callback()
        }
        else
            window.location.reload();
    }
    logout(callback) {
        if (Cookie.get("_uses")) {
            if (validate(Cookie.get("_uses"))) {
                Cookie.remove("_uses")
                if (localStorage.getItem("whoami")) {
                    localStorage.removeItem("whoami")
                    this.authenticated = false
                    callback()
                }
            }
            else
                window.location.reload();
        }
    }
    isAuthenciated() {
        if (validate(Cookie.get("_uses"))) {
            this.authenticated = true
        } else {
            this.authenticated = false
        }
        return this.authenticated
    }
    getDetails() {
        const token = localStorage.getItem("whoami")
        if (token) {
            const { user } = decodeToken(token)
            const { fname, lname, email, _id } = user
            return { fname, lname, email, _id }
        }

        return false
    }

}

export default new Auth();