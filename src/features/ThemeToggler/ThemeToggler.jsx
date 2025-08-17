import './ThemeToggler.css';
import {useTheme} from "../../Hooks/useTheme.js";
import {THEME__STORAGE} from "../../constans/index.js";

export default function ThemeToggler() {

	const {theme, setTheme} = useTheme();

	const onChangeHandler =(e)=>{
		const updatedTheme = e.target.checked  ===  false ? 'light' : 'dark'
		setTheme(updatedTheme)
		localStorage.setItem(THEME__STORAGE, updatedTheme);
	}
	console.log(theme);

	return (
		<label className="theme-switch">
			<input
				type="checkbox"
				className="theme-switch__checkbox"
				onClick={onChangeHandler}
				checked={theme === 'light' ? false : true}
			/>

			<div className="theme-switch__container">
				<div className="theme-switch__clouds"></div>

				<div className="theme-switch__stars-container">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 144 55"
						fill="none"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M135.831 3.00688C135.055 3.85027 ... (обрезано для краткости) ..."
							fill="currentColor"
						></path>
					</svg>
				</div>

				<div className="theme-switch__circle-container">
					<div className="theme-switch__sun-moon-container">
						<div className="theme-switch__moon">
							<div className="theme-switch__spot"></div>
							<div className="theme-switch__spot"></div>
							<div className="theme-switch__spot"></div>
						</div>
					</div>
				</div>
			</div>
		</label>
	);
}
