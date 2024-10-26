import "../Assets/css/Services.css"

import image1 from "../Assets/images/image1.jpeg";
import image3 from "../Assets/images/images.jpeg";
import image2 from "../Assets/images/image2.jpeg";
import image4 from "../Assets/images/image4.jpeg";
import React, { useContext } from "react";
import { ThemeContext } from "../Context/Context";

const serviceData = [
    {
        id: 1,
        description: "Web3 development",
        image: image1
    },
    {
        id: 2,
        description: "Mobile development",
        image: image2
    },
    {
        id: 3,
        description: "Responsive design",
        image: image3
    },
    {
        id: 4,
        description: "Full stack app",
        image: image4
    },
]


const Services = () => {
    
    const { isLightTheme } = useContext(ThemeContext);
    console.log(isLightTheme)

    return (
        <div className={ !isLightTheme ? "isLightTheme" : ""} id="services">
            <h2 className="text-red-400 text-2xl text-center font-bold">What do I offer...</h2>
            <p></p>
            <div className="service-description">
                <h2>
                    As a highly skilled and experienced MERN Stack developer, I bring a robust set of capabilities and a proven track record of delivering dynamic and high-performance web applications. Here’s what I offer to employers seeking a top-tier MERN Stack developer:
                </h2>
                <ul>
                    <li><span className="font-bold">MongoDB:</span> Proficient in designing efficient schemas, managing databases, and performing CRUD operations to ensure robust data handling.</li>
                    <li><span className="font-bold">Express.js:</span> Skilled in building scalable server-side applications, creating RESTful APIs, and integrating middleware for seamless backend processes.</li>
                    <li><span className="font-bold">React.js:</span> Expert in developing responsive, interactive, and user-friendly front-end interfaces using modern React practices, including hooks, context API, and component-based architecture.</li>
                    <li><span className="font-bold">Node.js:</span> Strong command over server-side JavaScript to create fast, scalable, and high-performance backend services.</li>
                </ul>
            </div>
            <div className="service-description">
                <h2>Full-Stack Development Proficiency:</h2>
                <ul>
                    <li>
                        Ability to manage end-to-end development processes from conception to deployment.
                    </li>
                    <li>
                        Experience with version control systems (Git), continuous integration/continuous deployment (CI/CD) pipelines, and automated testing to ensure code quality and reliability.
                    </li>
                </ul>
            </div>
            <div className="services-inner-div">
                {
                    serviceData && serviceData.map(({id, image, description}) => {
                        return (
                            <div key={id} className={`section-div ${!isLightTheme ? "isLightTheme" : ""}`}>
                                <p>{description}</p>
                                <img width="150" height="150" src={image} alt="services" />
                            </div>
                        )
                    })
                }
               
            </div>
        </div>
    )
};

export default React.memo(Services);