import cls from "./AppButton.module.scss"
import { classNames } from "shared/lib/classNames/className"
import { type ButtonHTMLAttributes, type FC } from "react"

export interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ThemeButton
}

export enum ThemeButton {
	CLEAR = "clear",
	OUTLINED = "outlined",
}

export const AppButton: FC<AppButtonProps> = (props) => {
	const { className, children, theme, ...otherProps } = props
	return (
		<button
			{...otherProps}
			className={classNames(cls.AppButton, {}, [className, cls[theme]])}
		>
			{children}
		</button>
	)
}
