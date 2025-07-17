import cls from './Button.module.css'

function Button({children, isActive, isDisabled, OnClick}) {
    return (
        <button
            className={`${cls.button} ${isActive ? cls.active : ''}`}
            onClick={OnClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
}

export default Button;