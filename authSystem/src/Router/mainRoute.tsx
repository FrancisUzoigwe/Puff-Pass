import {createBrowserRouter} from "react-router-dom"
import FirstLayout from "../components/common/FirstLayout"
import LandingScreen from "../Pages/Auth/LandingScreen"
import SigninScreen from "../Pages/Auth/SigninScreen"
import SignupScreen from "../Pages/Auth/SignupScreen"
import Layout from "../components/common/Layout"
import HomeScreen from "../Pages/Home/HomeScreen"

export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <FirstLayout/>,
        children: [
            {
                index: true,
                element: <LandingScreen/>
            }
        ]
    },
    {
        path: "/signin",
        element: <SigninScreen/>
    },
    {
        path: "/signup",
        element: <SignupScreen/>
    },
    {
        path: "/home",
        element: <Layout/>,
        children: [
            {
                index: true, 
                element: <HomeScreen/>
            }
        ]
    }
])