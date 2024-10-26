
import aboutImage from "../Assets/images/about_image.jpg";
import "../Assets/css/About.css";

const About = () => {
    
    return (
        <div id="about" className="my-10">
            <h2 className="text-2xl text-red-400 text-center">About Me</h2>
            <div className="about-description gap-10 m-2">
                <div>
                    <img src={aboutImage} loading="lazy" alt="image" />
                </div>
                <div className="about-row2">
                    <div>
                        <p className="text-gray-500">
                        Throughout my career, I've had the opportunity to work on a diverse range of projects, from building user-centric web applications to developing robust backend systems. My proficiency in a wide range of programming languages and frameworks allows me to adapt and excel in any project I undertake.

                        This portfolio showcases some of my most impactful work, highlighting my problem-solving abilities and technical expertise.  Dive in and explore my projects to gain a deeper understanding of my approach and development philosophy.
                        </p>
                        <div>
                            <div className="language-line my-4">
                                <h2>HTML</h2>
                                <p className="lines"></p>
                                <h2>95%</h2>
                            </div>
                            <div className="language-line my-4">
                                <h2>CSS</h2>
                                <p className="lines line2"></p>
                                <h2>86%</h2>
                            </div>
                            <div className="language-line my-4">
                                <h2>JavaScript</h2>
                                <p className="lines line3"></p>
                                <h2>65%</h2>
                            </div>
                            <div className="language-line my-4">
                                <h2>React</h2>
                                <p className="lines line4"></p>
                                <h2>85%</h2>
                            </div>
                            <div className="language-line my-4">
                                <h2>MERN</h2>
                                <p className="lines line5"></p>
                                <h2>59%</h2>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <h2 className="text-center text-2xl text-red-400">Call to Action</h2>
                        <p className="text-gray-500">I'm always seeking new opportunities to leverage my skills and tackle fresh challenges. If you have an interesting project or a problem that needs solving, don't hesitate to reach out!</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;