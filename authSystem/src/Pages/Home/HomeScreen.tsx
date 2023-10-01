import { useDispatch } from "react-redux"
import { logOut } from "../../Global/globalState"
const HomeScreen = () => {

  const dispatch = useDispatch()
  return (
    <div className="flex justify-center items-center w-full h-screen" onClick={() => {
      dispatch(logOut())
    }}>
      <button className="px-5 py-2 hover:cursor-pointer rounded-lg bg-purple-400 text-white font-semibold">Logout</button>
    </div>
  )
}

export default HomeScreen