import React, { useState } from "react";
import { Link } from "react-router-dom";

const GetBhajanByCategory = () => {
    const [active, setActive] = useState(false)
    const [key, setKey] = useState(-1)
    const menuLinks = [
        { name: "Shyam", link: "/" },
        { name: "Shiv", link: "/" },
        { name: "Durga", link: "/" },
        { name: "Hanuman ", link: "/" },
        { name: "Ganesh ", link: "/" },
        { name: "Ramdev Baba ", link: "/" },
        { name: "Krishna ", link: "/" },
        { name: "Pitar Ji", link: "/" },
        { name: "Chalisa", link: "/" },
        { name: "Aarti ", link: "/" },
    ];
    return (
        <div>
            <ul className="px-7 mt-5">
                {menuLinks?.map((menu, i) => (
                <li key={i} onClick={()=>{setActive(true); setKey(i)}} className={`borderBottom first-letter:uppercase `}> {/*borderBottom  ${active?"activeLink":""}*/}
                    <Link to={menu?.link}  className={``} >{menu?.name}  Bhajan</Link>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default GetBhajanByCategory;
