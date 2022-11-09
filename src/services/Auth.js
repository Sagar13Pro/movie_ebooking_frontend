class Auth {
    constructor() {
        this.authenticated = false
    }
    login(user, callback) {
        localStorage.setItem("user", JSON.stringify(user));
        this.authenticated = true;
        callback();
    }
    logout(callback) {

        if (localStorage.getItem("user")) {
            localStorage.removeItem("user");
            this.authenticated = false;
        }
        callback()
    }
    isAuthenciated() {
        if (localStorage.getItem("user")) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
        return this.authenticated
    }

}

export default new Auth();