import { BiLogoBaidu } from "react-icons/bi";
import {Link} from "react-router-dom"
const FirstHeader = () => {
  return (
    <div className="w-full h-[60px] flex justify-center items-center bg-black text-white">
      <div className="w-[97%] h-[40px] flex justify-between items-center">
        <div className="hover:cursor-pointer transition-all duration-300 ">
          <BiLogoBaidu className="text-4xl" />
        </div>
        <div className="flex justify-between items-center min-w-[170px]">
         <Link to="/signin">
         <div className="px-3 py-1 rounded-md bg-white text-black font-semibold hover:cursor-pointer ">
            Sigin
          </div></Link>
       <Link to="/signup">
       <div className="px-3 py-1 rounded-md bg-white text-black font-semibold hover:cursor-pointer ">
            Signup
          </div>
       </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;
