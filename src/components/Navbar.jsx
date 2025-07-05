import { FaAddressCard } from "react-icons/fa";
import { ImEye } from "react-icons/im";

const Navbar = () => {
    return (
        <nav className='w-max mx-auto rounded-full py-2 px-2 bg-black flex justify-center my-2'>
            <div className=" w-max flex gap-3">
                <button className='cursor-pointer rounded-full font-semibold bg-gray-600 text-white py-2 px-6 flex items-center gap-2'>Intuit ID <FaAddressCard /> </button>
                <button disabled className=' cursor-not-allowed font-extralight py-2 px-4 text-gray-300 flex items-center gap-2'>Coming soon <ImEye />  </button>
            </div>
        </nav>
    )
}

export default Navbar
