
import "../Assets/css/Projects.css"
import staticImage from "../Assets/images/static.webp";
import fullImage from "../Assets/images/Full-Stock-Hero.png";
import full1 from "../Assets/images/full-stack-web-developer-1024x1024.jpg";

const Projects = (props) => {
    const { openPopup, openFullStackPopup } = props;

    return (
        <div id="projects">
            <h2 className="text-red-400 text-2xl text-center font-bold">My complete and ongoing projects</h2>
            <div className="projects-main-div flex justify-center items-center gap-3">
                <div>
                    <h2 className="text-red-400 text-center font-bold text-xl">Static web application</h2>
                    <img src={staticImage} alt="image" />
                    <button onClick={openPopup} className="bg-blue-700 text-white font-bold py-2 px-10">View Projects</button>
                </div>
                <div>
                    <h2 className="text-red-400 text-center font-bold text-xl">Full stack application</h2>
                    <img src={fullImage} alt="image" />
                    <button onClick={openFullStackPopup} className="bg-blue-700 text-white font-bold py-2 px-10">View Projects</button>
                </div>
            </div>
        </div>
    )
};

export default Projects;