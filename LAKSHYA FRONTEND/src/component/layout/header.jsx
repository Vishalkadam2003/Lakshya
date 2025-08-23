import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";


// const phoneNumber = "+800-123-4567 6587";
const address = "∞ 1000 Patents. Infinite Possibilities";



let socialList = [
    { icon: <FaYoutube size={30} />, siteLink: 'https://www.youtube.com/channel/UCPHjTAcGw--4dgwCxPL6ZwQ' },
    { icon: <FaLinkedinIn size={30} />, siteLink: '#' },
    { icon: <FaInstagram size={30} />, siteLink: '#' },
    { icon: <FaWhatsapp size={30} />, siteLink: '#' },
    { icon: <FaFacebookF size={30} />, siteLink: '#' },
];

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFiexd, setHeaderFiexd] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFiexd(true);
        } else {
            setHeaderFiexd(false);
        }
    });

    return (
        <header className={`header-section ${headerFiexd ? "header-fixed fadeInUp" : ""}`}>
            <div className={`header-top ${socialToggle ? "open" : ""}`}>
                <div className="container">
                    <div className="header-top-area">
                        <div className="flex flex-col gap-3 text-sm font-medium">
                            {/* YouTube */}

                            {/* Phone */}
                            {/* <p className="flex items-center gap-2">
    📞 {phoneNumber}
  </p> */}

                            {/* Address */}
                            <p className="flex items-center gap-3 text-xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                <span className="text-2xl">∞</span>
                                1000 Patents. Infinite Possibilities
                            </p>

                        </div>

                        <ul className="flex items-center gap-6">
                            {socialList.map((val, i) => (
                                <li key={i}>
                                    <a
                                        href={val.siteLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
                                    >
                                        {val.icon}

                                        {val.siteLink.includes("youtube.com") && (
                                            <span className="ml-2 text-sm font-semibold text-red-500">
                                                Subscribe
                                            </span>
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <Link to="/"><img src="assets/images/logo/01.png" alt="logo" /></Link>
                        </div>
                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Home</a>
                                        <ul className="lab-ul dropdown-menu">
                                            {/* <li><NavLink to="/">Home One</NavLink></li> */}
                                            <li><NavLink to="#/index-2">About Us</NavLink></li>
                                            <li><NavLink to="#/index-3">Road map</NavLink></li>
                                            <li><NavLink to="#/index-4">Programs</NavLink></li>
                                            <li><NavLink to="#/index-5">Instructor</NavLink></li>
                                            <li><NavLink to="#/index-6">Program Details</NavLink></li>
                                            {/* <li><NavLink to="/index-7">Home Seven</NavLink></li> */}
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Knowledge Bank</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/course">Patent</NavLink></li>
                                            <li><NavLink to="/course-single">Design</NavLink></li>
                                            <li><NavLink to="/course-view">Trademark</NavLink></li>
                                            <li><NavLink to="/course-view">Copyright</NavLink></li>
                                            <li><NavLink to="/course-view">FTO</NavLink></li>
                                            <li><NavLink to="/course-view">Government Scheme</NavLink></li>
                                            <li><NavLink to="/course-view">Internal Filling</NavLink></li>
                                            <li><NavLink to="/course-view"> IP Audit </NavLink></li>
                                            <li><NavLink to="/nda"> NDA </NavLink></li>

                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Events</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="#/blog">Event</NavLink></li>
                                            <li><NavLink to="#/blog-2">Event Details</NavLink></li>
                                            {/* <li><NavLink to="/blog-3">Blog Style 3</NavLink></li>
                                            <li><NavLink to="/blog-single">Blog Single</NavLink></li> */}
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Advance</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="#/about">Download E-Book</NavLink></li>
                                            <li><NavLink to="#/team">FAQS</NavLink></li>
                                            <li><NavLink to="#/instructor">Sign In</NavLink></li>
                                            <li><NavLink to="#/shop">Register</NavLink></li>
                                            <li><NavLink to="#/shop-single">Blog</NavLink></li>
                                            {/* <li><NavLink to="/cart-page">Shop Cart Page</NavLink></li>
                                            <li><NavLink to="/search-page">Search Page</NavLink></li>
                                            <li><NavLink to="/search-none">Search None</NavLink></li> */}
                                            <li><NavLink to="/404">404</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to="/contact">Contact</NavLink></li>
                                </ul>
                            </div>

                            <Link to="/login" className="login"><i className="icofont-user"></i> <span>LOG IN</span> </Link>
                            <Link to="/signup" className="signup"><i className="icofont-users"></i> <span>SIGN UP</span> </Link>

                            <div className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`} onClick={() => setMenuToggle(!menuToggle)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="ellepsis-bar d-lg-none" onClick={() => setSocialToggle(!socialToggle)}>
                                <i className="icofont-info-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;