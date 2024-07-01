import "../Assets/css/Footer.css";
import Contact from "./Contact";

import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { Link } from "react-router-dom";


const Footer = () => {

    const date = new Date();
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
    const year = date.getFullYear();

    
    return (
        <footer className="mt-3">
            <h1 className="text-center font-bold text-2xl my-3 text-red-400">Get In Touch !</h1>
            <Contact /> 
            <div className="bg-neutral-700 text-white">
                <div className="footer-main-content flex justify-between items-center py-4 px-24">
                    <h2 className="mustapha-logo">Mustpha.</h2>
                    <div className="content">
                        <p>copyright &copy; {`${day}-${month}-${year}`},
                        I'm available for hiring. Good to meet <span>❤️</span>you</p>
                    </div>
                    <div className="social-links flex items-center justify-center">
                        <Link target="_blank" to="https://www.youtube.com/channel/UCn-elmhuDJfDkW8n15NeGXA"><IoLogoYoutube className="text-red-500"/></Link>
                        <Link to=""><FaFacebookF className="text-blue-500"/></Link>
                        <Link to=""><FaInstagramSquare className="text-white"/></Link>
                        <Link to=""><FaGithub className="text-white"/></Link>
                        <Link to=""><ImLinkedin className="text-white"/></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;