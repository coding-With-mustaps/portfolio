import { Component } from "react";
import { ThemeContext } from "./Context";


class ThemeContextProvider extends Component{

    constructor(props){
        super(props);

        const isLightTheme = localStorage.getItem("theme") === "true";

        this.state = { isLightTheme };
    }

    toggleTheme = () => {
        const newTheme = !this.state.isLightTheme;
        this.setState({
            isLightTheme: newTheme
        });

        localStorage.setItem("theme", newTheme);
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider;