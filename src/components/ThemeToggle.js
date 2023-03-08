import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
	const { toggleTheme } = useContext(ThemeContext);
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? dark : light;

	return (
		<button
			className={`mode ${theme.bg} ${theme.txt}`}
			onClick={toggleTheme}
		>
			{isLightTheme ? "L" : "D"}
		</button>
	);
};

export default ThemeToggle;
