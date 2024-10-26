
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import "../Assets/css/StaticWebPopup.css"
const StaticWebPopup = (props) => {
    const { closePopup } = props;

    return(
        <div className="static-web-popup-main-div">
            <div className="static-web-popup relative rounded px-3">
                <h2 className="my-2 text-red-400 font-bold text-xl text-center">Static web application</h2>
                <div>
                    <div className="rounded my-2 bg-gray-400 p-3 flex justify-center items-center">
                        <p className="flex-1">Simple website</p>
                        <Link onClick={closePopup} className="text-blue-800" to="http://mustapha-hair-wesbite-project.s3-website.af-south-1.amazonaws.com">View Site</Link>
                    </div>
                    <div className="rounded my-2 bg-gray-400 p-3 flex justify-center items-center">
                        <p className="flex-1">Ecommerce website</p>
                        <Link onClick={closePopup} className="text-blue-800" to="">View Site</Link>
                    </div>
                    <div className="rounded my-2 bg-gray-400 p-3 flex justify-center items-center">
                        <p className="flex-1">Portfolio website</p>
                        <Link onClick={closePopup} className="text-blue-800" to="http://mustapha-tailwindcss-project.s3-website.af-south-1.amazonaws.com">View Site</Link>
                    </div>
                    <div className="rounded my-2 bg-gray-400 p-3 flex justify-center items-center">
                        <p className="flex-1">Small business website</p>
                        <Link onClick={closePopup} className="text-blue-800" to="">View Site</Link>
                    </div>
                </div>
                <div className="absolute w-full flex justify-center items-center">
                    <button onClick={closePopup} className="border-gray-400 rounded-full mr-10 p-2 border-2"><IoClose className="text-3xl"/></button>
                </div>
            </div>
        </div>
    )
};

export default StaticWebPopup;