import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.jpg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <a>
                            <img className="logo" src={logo} alt="" width={50} height={50}/>
                        </a>
                    </Link>
                </li>
                {/* <li><Link href="/"> Akhand Jyoti Path </Link></li> */}
                <li className="heading-center">
                    <Link href="/mandir">Mandir</Link>
                </li>
                <li>
                    <Link href="/Bhajans">Bhajan</Link>
                </li>
                {/* <li><Link href="/contactMail"> Contact Us</Link></li> */}
            </ul>

            {/* <ul>
                <li>
                    <form>
                        <button className="btn" type="submit">
                            <input type="text" placeholder="  Search.." name="search" />
                            <i className="fas fa-search searchLogo"></i>
                        </button>
                    </form>
                </li>
            </ul>
            <Script src="https://kit.fontawesome.com/768f6ece77.js" crossorigin="anonymous"></Script> */}
        </nav>
    );
};

export default Navbar;
