
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import "../Assets/css/Contact.css";

const Contact = () => {


    return (
        <div className="contact-component">
            <div className="inner-div">
                <form>
                    <div>
                        <input
                            className="text-xl"
                            type="text"
                            placeholder="Name"
                            aria-label="Enter your name"
                            autoFocus
                        />
                        <input
                            className="text-xl"
                            type="email"
                            placeholder="Email"
                            aria-label="Enter your email"
                        />
                    </div>
                    <div>
                        <input
                            className="text-xl"
                            type="text"
                            placeholder="Subject"
                            aria-label="Enter the subject name"
                        />
                        <textarea
                            placeholder="Enter your message"
                            aria-label="Enter your message"
                            cols="10"
                            rows="4"
                        ></textarea>
                    </div>
                    <div>
                        <button className="text-2xl font-bold bg-red-400 text-white px-4 rounded-lg py-2" type="submit">Send Message</button>
                    </div>
                </form>
                <div className="phoneSection">
                    <div className="flex flex-col justify-start items-center my-3">
                        <h1 className="flex justify-center items-center"><FiPhone className="text-2xl mr-5"/> Phone</h1>
                        <p className="ml-24 leading-10">+233 (0)20 616 3396</p>
                    </div>
                    <div className="flex flex-col justify-start items-center my-3">
                        <h1 className="flex justify-center items-center"><MdOutlineEmail className="text-2xl mr-5"/> Email</h1>
                        <p className="ml-24 leading-10">mustaps@code.org.gh</p>
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