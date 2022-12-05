//Error
import Notfound from "../pages/error/Notfound"

// Index
import Home from "../pages/Home"

// User
import Dash from "../pages/user/dash/Dash"
import Login from "../pages/user/Login"
import Reset from "../pages/user/password/Reset"
import Password from "../pages/user/password/Password"
import VerifyEmail from "../pages/user/VerifyEmail"
import Profile from "../pages/user/dash/Profile"
import MovieDetails from "../pages/user/dash/Movie.user"
// Movie
import MovieList from "../pages/movie/MovieList"
import Movie from "../pages/movie/Movie"

// Event
import EventList from "../pages/events/EventList"
import Event from "../pages/events/Event"

import Booking from "../pages/movie/Booking"

// Admin
import AdminDash from "../pages/admin/dash/Index"
import AdminLogin from "../pages/admin/login/Admin.login"
import AddMovie from "../pages/admin/dash/AddMovie"

//paths
import { DASHBOARD, RESET, PASSWORD, NOTFOUND, VERIFYEMAIL, INDEX, LOGIN, MOVIE, PROFILE, MOVIELIST, BOOKING, EVENTLIST, ADMIN, ADMINLOGIN, ADDMOVIE, MOVIEDETAILS, EVENT } from "./Path"

const routes = [
    /* 
        path => url path on which assigned component should return
        element => component for this path
        exact => the path must be matched with URI
        public => is this component can be access with session or login
    */
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
        path: ADMINLOGIN,
        element: AdminLogin,
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
        path: ADMIN,
        element: AdminDash,
        exact: true,
        public: false
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
        path: MOVIELIST,
        element: MovieList,
        exact: true,
        public: true
    },
    {
        path: MOVIE,
        element: Movie,
        exact: false,
        public: true
    },
    {
        path: EVENTLIST,
        element: EventList,
        exact: true,
        public: true
    },
    {
        path: EVENT,
        element: Event,
        exact: false,
        public: true
    },
    {
        path: BOOKING,
        element: Booking,
        exact: false,
        public: false
    },
    {
        path: ADDMOVIE,
        element: AddMovie,
        exact: true,
        public: false
    },
    {
        path: MOVIEDETAILS,
        element: MovieDetails,
        exact: true,
        public: false
    },
    {
        path: NOTFOUND,
        element: Notfound,
        exact: true,
        public: true
    }
]


export default routes