import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
	state = {
		isLightTheme: true,
		light: {
			txt: "d-black-c",
			ui: "l-grey-bg",
			bg: "c-white-bg",
			gt: "bw-g-bg",
			cbg: "d-black-bg",
			bgc: "c-white-c",
			color: "#fff",
			colorInvert: "#040413",
		},
		dark: {
			txt: "c-white-c",
			ui: "d-grey-bg",
			bg: "d-black-bg",
			gt: "bb-g-bg",
			cbg: "c-white-bg",
			bgc: "d-black-c",
			color: "#040413",
			colorInvert: "#fff",
		},
	};
	toggleTheme = () => {
		this.setState({ isLightTheme: !this.state.isLightTheme });
	};
	render() {
		return (
			<ThemeContext.Provider
				value={{ ...this.state, toggleTheme: this.toggleTheme }}
			>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}

export default ThemeContextProvider;
