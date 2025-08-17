import {createContext, useContext, useEffect, useState} from "react";
import {THEME__STORAGE} from "../constans/index.js";

export const ThemeContext = createContext(null)

function ThemeProvider({children}) {

	const savedTheme = localStorage.getItem(THEME__STORAGE) || 'light';

	const [theme, setTheme] = useState(savedTheme)

	const lightTheme = () => {
		document.body.classList.remove('dark-layout')
		document.body.classList.add('light-layout')
	}

	const darkTheme = () => {
		document.body.classList.remove('light-layout')
		document.body.classList.add('dark-layout')
	}

	useEffect(() => {

		const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
		if (prefersLight) {
			document.body.classList.add('light-theme');
		} else {
			document.body.classList.add('dark-theme');
		}

		theme === 'light' ? lightTheme() : darkTheme()

	}, [theme])

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme
			}}
		> {children}</ThemeContext.Provider>
	);
}

export default ThemeProvider;