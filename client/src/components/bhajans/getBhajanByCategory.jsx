import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const GetBhajanByCategory = () => {
    const [open, setOpen] = useState(false);
    // const [activeBhajan, setActiveBhajan] = useState("second")
    const categoryLinks = [
        { name: "Shyam Bhajan", link: "/" },
        { name: "Shiv Bhajan", link: "/" },
        { name: "Durga Bhajan", link: "/" },
        { name: "Hanuman Bhajan", link: "/" },
        { name: "Ganesh Bhajan", link: "/" },
        { name: "Ramdev Bhajan", link: "/" },
        { name: "Krishna Bhajan", link: "/" },
        { name: "Pitar Ji Bhajan", link: "/" },
        { name: "Chalisa", link: "/" },
        { name: "Aarti ", link: "/" },
    ];
    return (
        <>
            <div className="block lg:hidden mb-6">
                <button onClick={() => {setOpen(!open);}} className={`bg-red-400 px-2 py-1 w-full flex justify-between items-center font-bold ${open ? "rounded-t-lg" : "rounded-lg"} tracking-wider border-4 border-transparent  `}>
                    Bhajans
                    {!open ? (
                        <AiFillCaretDown className="h-8" />
                    ) : (
                        <AiFillCaretUp className="h-8" />
                    )}
                </button>
                <div className={`bg-red-300 lg:hidden relative font-medium ${open ? "block rounded-b-lg" : "hidden"}`}>
                    <ul className="flex flex-col items-center">
                        {categoryLinks?.map((category, i) => (
                            <li onClick={() => setOpen(false)} key={i} className={`bhajanCategoryMobile`}>
                                <Link to={category?.link}>{category?.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="lg:block hidden">
                <ul className="px-7 ">
                    {categoryLinks?.map((category, i) => (
                        <li key={i} className={`bhajanCategoryDesktop`}>
                            <Link to={category?.link}>{category?.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default GetBhajanByCategory;
