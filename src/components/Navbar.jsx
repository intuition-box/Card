import { FaAddressCard } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
// import { ImEye } from "react-icons/im";

const Navbar = () => {
    return (
        <nav className='w-max mx-auto rounded-full py-2 px-2 bg-black flex justify-center my-4'>
            <div className=" w-max flex gap-3">
                <a href="/" className="cursor-pointer rounded-full font-semibold bg-white leading-none text-black py-2 px-6 flex items-center gap-2">Intuit ID <FaAddressCard /> </a>
                <a href="https://intuitionflyer.ct.ws/" className="cursor-pointer text-left rounded-full font-semibold text-white leading-none py-2 px-6 flex items-center gap-2">Intuition <br /> Flier <RiFilePaper2Line /></a>
                {/* <button disabled className='blur-[1px] cursor-not-allowed font-extralight py-2 px-4 text-gray-300 flex items-center gap-2'>Coming soon <ImEye />  </button> */}
            </div>
        </nav>
    )
}

export default Navbar
