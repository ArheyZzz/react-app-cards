import cls from './Button.module.css'

function Button({children, isActive, isDisabled}) {
    return (
        <button
            className={`${cls.button} ${isActive ? cls.active : ''}`}
            onClick={''}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
}

export default Button;