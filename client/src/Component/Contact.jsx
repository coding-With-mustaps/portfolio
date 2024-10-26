
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import "../Assets/css/Contact.css";
import { useState } from "react";
import useSendEmail from "../Hooks/useSendEmail";

import toast from "react-hot-toast";

const Contact = () => {
    const { error, loading, sendEmail } = useSendEmail();

    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");

    const data  = { name, subject, message, email};
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        const response = await sendEmail(data); 
        
        toast.success(response.message);

        if(error) toast.error(error);
        
    };

    return (
        <div className="contact-component">
            <div className="inner-div">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input
                            className="text-xl"
                            type="text"
                            placeholder="Name"
                            aria-label="Enter your name"
                            onChange={(e) => setName(e.target.value)}
                            autoFocus
                            required
                        />
                        <input
                            className="text-xl"
                            type="email"
                            placeholder="Email"
                            aria-label="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className="text-xl"
                            type="text"
                            placeholder="Subject"
                            aria-label="Enter the subject name"
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Enter your message"
                            aria-label="Enter your message"
                            onChange={(e) => setMessage(e.target.value)}
                            cols="10"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <button className="text-2xl font-bold bg-red-400 text-white px-4 rounded-lg py-2" type="submit">{loading ? "Loading..." : "Send Message"}</button>
                    </div>
                </form>
                <div className="phoneSection">
                    <div className="flex flex-col justify-start items-center my-3">
                        <h1 className="flex justify-center items-center"><FiPhone className="text-2xl mr-5"/> Phone</h1>
                        <p className="ml-24 leading-10">+233 (0)20 616 3396</p>
                        <p className="ml-24 leading-10">+233 (0)25 664 8615</p>
                    </div>
                    <div className="flex flex-col justify-start items-center my-3">
                        <h1 className="flex justify-center items-center"><MdOutlineEmail className="text-2xl mr-5"/> Email</h1>
                        <p className="ml-24 leading-10">mustapha.dev85@gmail.com</p>
                    </div>
                    <div className="flex flex-col justify-start items-center my-3 ml-5">
                        <h1 className="flex justify-center items-center"><CiLocationOn className="text-2xl mr-5"/> Location</h1>
                        <p className="ml-20 mt-1">Africa, Ghana, Sunyani <br /> ( Kumasi, Garu)</p>
                    </div>    
                </div>
            </div>
        </div>
    )
};

export default Contact;