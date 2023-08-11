import Link from 'next/link'
import React from 'react'
import { navbarItems, navbarLinks } from "../../constants/index"
import { CiShoppingCart, CiSearch } from "react-icons/ci";



export default function Navbar() {
    return (
        <nav className='flex w-full p-10 m-auto justify-between fixed z-20 backdrop-blur-sm bg-black/30 text-[#D2C1A1] drop-shadow-md'>
            <div className="w-full px-2">
                <Link href='/' className="flex flex-col text-start justify-start items-start hover:text-[white] transition duration-300">
                    <h1 className='text-3xl font-bold '>Home Decor</h1>
                    <p className='text-sm font-extralight'>Furniture Shop</p>

                </Link>
            </div>

            <div className="w-full px-2 flex justify-center items-center text-center">

                <div>
                    {navbarLinks.map((link) => {
                        return (
                            <Link
                                href={link.route}
                                key={link.label}
                                className='uppercase px-2 hover:text-[white] transition duration-300'
                            >{link.label}</Link>
                        )
                    })}
                </div>

                <div className="px-2 hover:text-[white] transition duration-300">
                    <CiSearch size={30} />
                </div>

            </div>

            <div className="w-full gap-2 flex justify-end items-center text-center">
                <div>
                    {navbarItems.map((link) => {
                        return (
                            <Link
                                href={link.route}
                                key={link.label}
                                className='uppercase hover:text-[white] transition duration-300 p-2'
                            >{link.label}</Link>
                        )
                    })}
                </div>
                <div>< CiShoppingCart size={30} className='hover:text-[white] transition duration-300'/></div>
                <div className='hover:scale-125 transition duration-300 '>Profile</div>
            </div>
        </nav>
    )
}
