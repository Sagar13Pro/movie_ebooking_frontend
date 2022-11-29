//
import Notfound from "../pages/error/Notfound"

//Elements
import Dash from "../pages/dash/Dash"
import Login from "../pages/user/Login"
import Reset from "../pages/user/password/Reset"
import Password from "../pages/user/password/Password"
import VerifyEmail from "../pages/user/VerifyEmail"
import Home from "../pages/Home"
import Movie from "../pages/movie/Movies"
import Profile from "../pages/dash/Profile"
import Booking from "../pages/movie/Booking"

//paths
import { DASHBOARD, RESET, PASSWORD, NOTFOUND, VERIFYEMAIL, INDEX, LOGIN, MOVIE, PROFILE, BOOKING } from "./Path"

const routes = [
    /* 
        path => url path on which assigned component should return
        element => component for this path
        exact => the path must be matched with URI
        public => is this component can be access with session or login
    */
    {
        path: BOOKING,
        element: Booking,
        exact: true,
        public: true
    },
    {
        path: INDEX,
        element: Home,
        exact: true,
        public: true
    },
    {
        path: LOGIN,
        element: Login,
        exact: true,
        public: true
    },
    {
        path: DASHBOARD,
        element: Dash,
        exact: true,
        public: false,
    },
    {
        path: PROFILE,
        element: Profile,
        exact: true,
        public: false
    },
    {
        path: RESET,
        element: Reset,
        exact: true,
        public: true
    },
    {
        path: PASSWORD,
        element: Password,
        exact: true,
        public: true
    },
    {
        path: VERIFYEMAIL,
        element: VerifyEmail,
        exact: true,
        public: true
    },
    {
        path: MOVIE,
        element: Movie,
        exact: true,
        public: true
    },
    {
        path: NOTFOUND,
        element: Notfound,
        exact: true,
        public: true
    }
]


export default routes