// Packages
import { Outlet } from "react-router-dom";
import Header from "../Component/Header";

// Icons
import { FaToggleOn } from "react-icons/fa6";
import { FaToggleOff } from "react-icons/fa6";
import { useContext } from "react";
import { ThemeContext } from "../Context/Context";
import Footer from "../Component/Footer";


const RootLayout = () => {

    const context = useContext(ThemeContext);
    const { isLightTheme, toggleTheme } = context;

    const lightTheme = {
        backgroundColor: "#edede9",
        color: "#2b2d42"
    }

    const darkTheme = {
        backgroundColor: "#171a22",
        color: "#edede9"
    }

    return (
        <div style={ isLightTheme ? lightTheme : darkTheme}>
           <Header /> 
           <button onClick={toggleTheme} className="absolute top-16 right-5"> 
                { isLightTheme ? <FaToggleOn className="text-3xl"/> : <FaToggleOff className="text-3xl"/> } 
           </button>

            <main> <Outlet /> </main>

            <Footer />
        </div>
    )
};

export default RootLayout;