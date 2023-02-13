import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState(false);
    const menuLinks = [
        { name: "HOME", link: "/" },
        { name: "KHATU", link: "/mandir" },
        { name: "ABOUT", link: "/about" },
        { name: "LOGIN", link: "/login" }
    ];

    return (
        <>
            <div className="w-full h-14 pt-2 top-0 flex items-center font-josefin-sans font-light z-[999]">
                <div className="basis-1/5 flex justify-start">
                    <div onClick={() => setOpen(!open)} className={`z-[999] justify-end ${ open ? "text-gray-500" : "text-gray-900"} text-2xl lg:hidden mx-4`}>
                        <RxHamburgerMenu />
                    </div>
                </div>
                <div className={`lg:hidden absolute w:1/4 h-screen font-medium top-0 bg-white duration-300 ${open ? "left-0" : "left-[-100%]"}`}>
                    <ul className="flex flex-col items-center my-20 h-full gap-10 py-2 text-lg">
                        {menuLinks?.map((menu, i) => (
                            <li onClick={() => setOpen(false)} key={i} className="px-7 cursor-pointer ">
                                <Link to={menu?.link}>{menu?.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="basis-3/5 text-2xl flex justify-center">
                    <div className="lg:block hidden">
                        <ul className="flex gap-10 uppercase">
                            {menuLinks?.map((menu, i) => (
                                <li key={i} className="cursor-pointer">
                                    <Link to={menu?.link}>{menu?.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                <div className="basis-1/5 flex lg:justify-center justify-end text-lg">
                    <button className="sm:block hidden mr-10" type="submit">
                        <div className="border-2 border-black rounded-lg px-2.5"> {/*lg:block hidden*/}
                            <input type="text" placeholder="Search.." name="search" className="outline-none text-sm font-serif bg-inherit" />
                        </div>
                    </button>
                    <div onClick={() => setSearch(!search)} className={`z-[999] justify-end ${ search ? "text-gray-500" : "text-gray-900"} text-2xl sm:hidden mx-4`}>
                        <AiOutlineSearch />
                    </div>
                </div>

            </div>
            <div className={`${search?"visible":"hidden"} w-[97%] mx-auto top-16 sm:hidden`}>
                <button className="w-full left-0" type="submit">
                    <div className="border-2 border-black rounded-lg px-2.5">
                        <input type="text" placeholder="Search.." name="search" className="outline-none text-sm w-full h-8 font-serif" />
                    </div>
                </button>
            </div>
        </>
    );
};

export default Navbar;
