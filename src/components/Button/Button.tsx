import React, { FC, HTMLAttributes, SyntheticEvent } from "react";
import "./button.css";


interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    color: 'primary'|'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
    text: string,
    label: string,
    size?: 'small' | 'medium' | 'large';
    hasIcon?: boolean,
    iconSize?: 'small'|'medium'|'large',
    iconName?: string,
    iconColor?: 'primary'|'secondary'|'body'|'white',
    className?: string,
    disabled?: boolean,
    inverted?: boolean,
    expanded?: boolean,
    pressed?: boolean,
    tabIndex?: number,
    onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void,
    onKeydown?: (e: SyntheticEvent<HTMLButtonElement>) => void,
}

//Always use FC instead of React.FC 
//Deconstructing props in the functionial component arguments
const Button: FC<ButtonProps> = ({ color, text, label, className = '', 
    disabled = false, size, inverted, expanded = false, pressed = false, 
    tabIndex = 0, onClick, onKeydown, iconName = '', iconColor = 'white', 
    iconSize = 'small', hasIcon = false, }) => {
    return (
        <button 
        type="button"
        className={['storybook-button', `storybook-button--${size}`, `storybook-button--${color}`].join(' ')}
        aria-label={label} 
        aria-expanded={expanded}
        aria-pressed={pressed}
        disabled={disabled ? disabled : false}
        tabIndex={tabIndex}
        onClick={onClick}
        onKeyDown={onKeydown} >
            {text}
        </button>
    )
}

export default Button;

//Text of the button gets read by screen readers before the aria label