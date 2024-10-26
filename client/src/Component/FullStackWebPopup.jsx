import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../Assets/css/StaticWebPopup.css"

const FullStackWebPopup = (props) => {
    const { closeFullStackPopup } = props;

    return(
        <div className="static-web-popup-main-div">
            <div className="static-web-popup relative rounded px-3">
                <h2 className="my-2 text-red-400 font-bold text-xl text-center">Full stack application</h2>
                <div>
                    <div className="rounded my-2 bg-gray-400 p-3 flex justify-center items-center">
                        <p className="flex-1">MERN Ecommerce app</p>
                        <Link onClick={closeFullStackPopup} className="text-blue-800" to="">View Site</Link>
                    </div>
                    <div className="rounded my-2 bg-gray-400 p-3 flex justify-center items-center">
                        <p className="flex-1">Voting system</p>
                        <span className="bg-red-400 text-white p-1 mx-1">Not public</span>
                    </div>
                    <div className="rounded my-2 bg-gray-400 p-3 flex justify-center items-center">
                        <p className="flex-1">Employee management system</p>
                        <Link onClick={closeFullStackPopup} className="text-blue-800" to="">View Site</Link>
                    </div>
                    <div className="rounded my-2 bg-gray-400 p-3 flex justify-center items-center">
                        <p className="flex-1">Online saling of courses platform</p>
                        <Link onClick={closeFullStackPopup} className="text-blue-800" to="">View Site</Link>
                    </div>
                </div>
                {/* <button onClick={closeFullStackPopup} className="absolute bottom-0 right-0 m-2 py-2 px-5 border-2">Close</button> */}
                <div className="absolute w-full flex justify-center items-center">
                    <button onClick={closeFullStackPopup} className="border-gray-400 rounded-full mr-10 p-2 border-2"><IoClose className="text-3xl"/></button>
                </div>
            </div>
        </div>
    )
};

export default React.memo(FullStackWebPopup);