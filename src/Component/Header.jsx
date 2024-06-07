// Packages
import {Link, NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavHashLink } from "react-router-hash-link";
import { useState, useEffect, useContext } from "react";

// Images
import logo from "../Assets/images/logo.png";

// Icons
import { FcAbout } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";

// Style
import "../Assets/css/Header.css";
import { ThemeContext } from "../Context/Context";

const Header = () => {

    const [ scroll, setScroll ] = useState(false);
    const { hash } = useLocation();
    const {isLightTheme} = useContext(ThemeContext);
    const [hide, setHide] = useState(true);

    useEffect( () => {
        
        const handleScroll = () => {
            const isScroll = window.scrollY > 0;
            setScroll(isScroll);
        };

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll);
    }, [scroll])

    useEffect(() => {
        if (hash) {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView();
          }
        }
      }, [hash]);

    const handleHamburger = () => {
        setHide(false)
        
    }

    const hideStyle = {
        display: "none"
    }

    return (
        <header className={ scroll ? "onScroll" : "" || !isLightTheme ? "isDark" : ""}>
            <nav>
                <img width="80" src={logo} alt="logo image" />
                <ul  className="phone-style">
                    <h2 className="only-phone">Menu</h2>
                    <Link className={` ${!isLightTheme ? "text-white" : ""} ${hash === "" ? "active-link" : ""}`} to="/"><FaHome className="mr-1 roboto-medium"/> Home</Link>
                    <Link className={` ${!isLightTheme ? "text-white" : ""} ${hash === "#about" ? "active-link" : ""}`} to="/#about"><FcAbout className="mr-1 roboto-medium"/> About</Link>
                    <Link className={` ${!isLightTheme ? "text-white" : ""} ${hash === "#services" ? "active-link" : ""}`} to="#services"><FaServicestack className="mr-1 roboto-medium"/> Services</Link>
                    <Link className={` ${!isLightTheme ? "text-white" : ""} ${hash === "#projects" ? "active-link" : ""}`} to="#projects"><FaProjectDiagram className="mr-1 roboto-medium"/> Projects</Link>
                </ul>
            </nav>
            <button onClick={handleHamburger} className="hmburger"><GiHamburgerMenu className="absolute top-5 right-4 text-xl"/></button>
        </header>
    )
};

export default Header;