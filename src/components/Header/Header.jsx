import Button from "../Button/Button.jsx";
import cls from './Header.module.css'
import ReactLogo from "../../assets/react.svg";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../Hooks/isAuth.js";
import {AUTH_STORAGE} from "../../constans/index.js";
import ThemeToggler from "../../features/ThemeToggler/ThemeToggler.jsx";

function Header() {

	const LoginHandler = () => {
		localStorage.setItem(AUTH_STORAGE,!isAuth);
		setIsAuth(!isAuth);
	}

	const navigate = useNavigate();
	const {isAuth, setIsAuth} = useAuth();



	return (
		<header className={cls.header}>
			<p onClick={() => navigate('/')}>
				<img
					src={ReactLogo}
					alt='react logo'
				/>
				<span>ReactCards</span>
			</p>

			<div className={cls.headerButtons}>
				<ThemeToggler/>
				{isAuth &&
					<Button OnClick={() => navigate('/addquestion')}>Add</Button>}
				<Button OnClick={LoginHandler} isActive={!isAuth}>{isAuth ? 'Logout' : 'Login'}</Button>
			</div>
		</header>
	);
}

export default Header;