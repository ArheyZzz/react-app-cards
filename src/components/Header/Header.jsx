import Button from "../Button/Button.jsx";
import cls from './Header.module.css'
import ReactLogo from "../../assets/react.svg";

function Header() {
    return (
        <header className={cls.header}>
            <p>
                <img
                    src={ReactLogo}
                    alt='react logo'
                />
                <span>ReactCards</span>
            </p>

            <div className={cls.headerButtons}>
                <Button >Add</Button>
                <Button>Login</Button>
            </div>
        </header>
    );
}

export default Header;