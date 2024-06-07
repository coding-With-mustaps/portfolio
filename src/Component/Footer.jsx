import "../Assets/css/Footer.css";
import Contact from "./Contact";

import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { Link } from "react-router-dom";


const Footer = () => {

    return (
        <footer className="my-3">
            <h1 className="text-center font-bold text-2xl my-3 text-red-400">Get In Touch !</h1>
            <Contact /> 
            <div>
                <div>
                    <div></div>
                    <div></div>
                    <div>
                        <Link to="/"><IoLogoYoutube className="text-red-500"/></Link>
                        <Link to=""><FaFacebookF className="text-blue-500"/></Link>
                        <Link to=""><FaInstagramSquare /></Link>
                        <Link to=""><FaGithub /></Link>
                        <Link to=""><ImLinkedin /></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;