import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const GetBhajanByCategory = () => {
    const [open, setOpen] = useState(false);
    const [categoryBhajans, setCategoryBhajans] = useState("Bhajans")
    let params = useParams();
    const categoryLinks = [
        { id:"shyam", name: "Shyam Bhajan", link: "/category/shyam" },
        { id:"shiv", name: "Shiv Bhajan", link: "/category/shiv" },
        { id:"durga", name: "Durga Bhajan", link: "/category/durga" },
        { id:"hanuman", name: "Hanuman Bhajan", link: "/category/hanuman" },
        { id:"ganesh", name: "Ganesh Bhajan", link: "/category/ganesh" },
        { id:"ramdev", name: "Ramdev Bhajan", link: "/category/ramdev" },
        { id:"krishna", name: "Krishna Bhajan", link: "/category/krishna" },
        { id:"pitarji", name: "Pitar Ji Bhajan", link: "/category/pitarji" },
        { id:"chalisa", name: "Chalisa", link: "/category/chalisa" },
        { id:"aarti", name: "Aarti ", link: "/category/aarti" },
    ];
    
    return (
        <>
            <div className="block lg:hidden mb-6">
                <button onClick={() => {setOpen(!open);}} className={`bg-red-400 px-2 py-1 w-full flex justify-between items-center font-bold ${open ? "rounded-t-lg" : "rounded-lg"} tracking-wider border-4 border-transparent  `}>
                    {categoryBhajans}
                    {!open ? (
                        <AiFillCaretDown className="h-8" />
                    ) : (
                        <AiFillCaretUp className="h-8" />
                    )}
                </button>
                <div className={`bg-red-300 lg:hidden relative font-medium ${open ? "block rounded-b-lg" : "hidden"}`}>
                    <ul className="flex flex-col items-center">
                        {categoryLinks?.map((category, i) => (
                            <Link to={category?.link}>
                                <li onClick={() => {setOpen(false); setCategoryBhajans(category?.name)} } key={i} className={`bhajanCategoryMobile`}>{category?.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="lg:block hidden">
                <ul className="px-7 ">
                    {categoryLinks?.map((category, i) => (
                        <Link to={category?.link}>
                            <li key={i} className={`bhajanCategoryDesktop ${( params.id && params.id === category.id)? "activeLink":""}`}>{category?.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default GetBhajanByCategory;
