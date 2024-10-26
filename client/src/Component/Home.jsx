import { Link } from "react-router-dom";
import useLooping from "../Hooks/useLooping";

import "../Assets/css/Home.css";

// import logo1 from "../Assets/images/logo1.png";
import logo2 from "../Assets/images/logo2.png";
import logo3 from "../Assets/images/logo3.png";
import logo4 from "../Assets/images/logo4.webp";
import logo5 from "../Assets/images/logo5.png";
import logo10 from "../Assets/images/Untitled.png";
// import logo11 from "../Assets/images/logo11.png";

import { FaDownload } from "react-icons/fa6";

import mustapha from "../Assets/images/mustapha.jpg";
import mustapha1 from "../Assets/images/myImage.png";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import StaticWebPopup from "./StaticWebPopup";
import { useState } from "react";
import FullStackWebPopup from "./FullStackWebPopup";

import { Toaster } from "react-hot-toast";


const Home = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isFullStackPopupOpen, setIsFullStackPopupOpen] = useState(false);

    const TitleArray = ["Web developer", "Software engineer", "Full stack developer", "JavaScript developer"];
    const imagesArray = [logo4, logo5, logo10, logo2, logo3];
    const myImagesArray = [mustapha1]

    const { currentIndex } = useLooping(TitleArray)
    const { currentIndex: index } = useLooping(myImagesArray)

    const openPopup = () => {
        setIsPopupOpen(true);
    }

    const closePopup = () => {
        setIsPopupOpen(false)
    }

    const openFullStackPopup = () => {
        setIsFullStackPopupOpen(true);
    }

    const closeFullStackPopup = () => {
        setIsFullStackPopupOpen(false)
    }
    
    return (
        <div className="mt-12">
            <Toaster 
                toastOptions={{
                    success: {
                        style: {
                            backgroundColor: "green",
                            color: "white"
                        }
                    },

                    error: {
                        style: {
                            backgroundColor: "red",
                            color: "white"
                        }
                    }
                }}
            />
            <section>
                <div className="flex flex-wrap justify-center items-center gap-x-16 mt-5 p-4">
                    <div className="description-div">
                        <h1 className="roboto-medium text-4xl">Hi 
                            <span>👋</span> 
                            <span className="roboto-medium text-red-400">I'm Mustapha base in Ghana</span>
                            <br />
                            <span className="roboto-medium">I'm a <span     className="text-blue-400 roboto-medium">{ TitleArray[currentIndex] }</span>
                            </span>
                        </h1>
                        <p className="text-gray-500">I am a passionate developer who thrives on tackling new challenges. Each problem I encounter fuels my desire to learn and master the latest technologies. Dive into my portfolio to explore my work experience and the diverse projects I've successfully completed.</p>
                        <div className="contactme-button my-5 flex gap-x-3">
                            <Link className="roboto-medium text-blue-400" to="">Hire Me</Link>
                            {/* Remember to fetch CV from server for download  */}
                            <a href="/CV-Resume.pdf" download className="roboto-medium flex justify-center items-center w-fit">Download CV <FaDownload className="text-xl pl-1"/> </a>
                        </div>
                        <div>
                            <h3 className="text-blue-400 text-center">Technologies</h3>
                            <div className="logo-div">
                                {
                                    imagesArray.map( (logo, index) => (
                                        <img width="50" key={index} src={logo} loading="lazy" alt="Web development logo" />
                                    )) 
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-3 text-center">
                        <img width="500" src={myImagesArray[index]} loading="lazy" alt="Web development logo" />
                    </div>
                </div>
            </section>
            <About />
            <Services />
            <Projects 
                openPopup={openPopup}
                openFullStackPopup={openFullStackPopup}
            />
            {
                isPopupOpen ? 
                <StaticWebPopup 
                    closePopup={closePopup}
                /> : ""
            }
            {
                isFullStackPopupOpen ? 
                    <FullStackWebPopup 
                        closeFullStackPopup={closeFullStackPopup}
                    /> : ""
            }
        </div>
    )
};

export default Home;