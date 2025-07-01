import React from 'react'

const Navbar = () => {
    return (
        <nav className='py-3 bg-black flex justify-center'>
            <div className=" px-3 w-max flex gap-3">
                <button className='border cursor-pointer bg-black text-white py-2 px-4 underline'>Intuit ID</button>
                <button disabled className=' border cursor-not-allowed py-2 px-4 bg-black text-white'>Coming soon</button>
            </div>
        </nav>
    )
}

export default Navbar
