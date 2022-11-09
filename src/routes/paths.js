import Dash from "../Pages/user/Dash";
import SignLogin from "../Pages/user/SignLogin";


const routes = [
    {
        path: "/",
        element: SignLogin,
        exact: true
    },
    {
        path: "/dashboard/user",
        element: Dash,
        exact: true
    }
]


export default routes