import { Outlet } from "react-router-dom"
import FirstHeader from "../static/FirstHeader"
import Footer from "../static/Footer"

const FirstLayout = () => {
  return (
    <div>
        <FirstHeader/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default FirstLayout