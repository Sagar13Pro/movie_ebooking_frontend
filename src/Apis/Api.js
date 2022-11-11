import axios from 'axios'
class Api {
    constructor() {
        this.axios = axios.create({
            baseURL: `${process.env.REACT_APP_BACKEND_BASE_URL}`
        })
    }

    async get(endpoint) {
        if (endpoint)
            return this.axios.get(endpoint)
        console.warn("Get method require an endpoint for requesting")
    }

    async post(endpoint, payload) {
        if (endpoint)
            return this.axios.post(endpoint, payload)
        console.warn("Post method require an endpoint for requesting")
    }

    async put(endpoint, payload) {
        if (endpoint)
            return this.axios.put(endpoint, payload)
        console.warn("Put method require an endpoint for requesting")
    }

    async delete(endpoint) {
        if (endpoint)
            return this.axios.delete(endpoint)
        console.warn("Delete method require an endpoint for requesting")
    }
}
export default new Api();