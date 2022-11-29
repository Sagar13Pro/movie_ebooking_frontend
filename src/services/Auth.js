import Cookie from "js-cookie"
import { v4 as uuid4, validate } from "uuid"
class Auth {
    constructor() {
        this.authenticated = false
    }
    login(user, callback) {
        Cookie.set("_uses", uuid4(), { expires: 60 * 60 * 24 })
        this.authenticated = true;
        if (validate(Cookie.get("_uses"))) {
            if (!sessionStorage.getItem("whoami"))
                sessionStorage.setItem("whoami", JSON.stringify(user))
            callback()
        }
        else
            window.location.reload();
    }
    logout(callback) {
        if (Cookie.get("_uses")) {
            if (validate(Cookie.get("_uses"))) {
                Cookie.remove("_uses")
                if (sessionStorage.getItem("whoami")) {
                    sessionStorage.removeItem("whoami")
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
        let { email, fname, lname } = false
        if (sessionStorage.getItem("whoami")) {
            const { email, fname, lname } = JSON.parse(sessionStorage.getItem("whoami"));

            return { email, fname, lname }
        }

        return { email, fname, lname }
    }

}

export default new Auth();