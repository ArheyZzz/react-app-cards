import {useContext} from "react";
import {ThemeContext} from "../theme/ThemeProvider.jsx";


export const useTheme = () => {
	return useContext(ThemeContext);
}