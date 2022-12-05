import Cookie from "js-cookie"
import { v4 as uuid4, validate } from "uuid"
import { decodeToken } from "react-jwt"

class AdminAuth {
    constructor() {
        this.authenticated = false
    }
    login(token, callback) {
        Cookie.set("_admin", uuid4(), { expires: 60 * 60 * 24 })
        this.authenticated = true;
        if (validate(Cookie.get("_admin"))) {
            if (!localStorage.getItem("admin"))
                localStorage.setItem("admin", token)
            callback()
        }
        else
            window.location.reload();
    }
    logout(callback) {
        if (Cookie.get("_admin")) {
            if (validate(Cookie.get("_admin"))) {
                Cookie.remove("_admin")
                if (localStorage.getItem("admin")) {
                    localStorage.removeItem("admin")
                    this.authenticated = false
                    callback()
                }
            }
            else
                window.location.reload();
        }
    }
    isAuthenciated() {
        if (validate(Cookie.get("_admin"))) {
            this.authenticated = true
        } else {
            this.authenticated = false
        }
        return this.authenticated
    }
    getDetails() {
        const token = localStorage.getItem("admin")
        if (token) {
            const { user } = decodeToken(token)
            const { fname, lname, email, _id } = user
            return { fname, lname, email, _id }
        }

        return false
    }

}

export default new AdminAuth();