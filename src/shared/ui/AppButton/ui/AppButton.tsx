import cls from "./AppButton.module.scss"
import { classNames } from "shared/lib/classNames/className"
import { memo, type ButtonHTMLAttributes, type FC } from "react"

export interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ButtonTheme
	square?: boolean
	size?: ButtonSize
	disabled?: boolean
}

export enum ButtonSize {
	M = "size_m",
	L = "size_l",
	XL = "size_xl",
}

export enum ButtonTheme {
	CLEAR = "clear",
	OUTLINED = "outlined",
	BACKGROUND = "background",
	BACKGROUND_INVERTED = "background_inverted",
}

export const AppButton: FC<AppButtonProps> = memo((props) => {
	const { className, square, size = ButtonSize.M, children, theme, disabled, ...otherProps } = props
	return (
		<button
			{...otherProps}
			disabled={disabled}
			className={classNames(cls.AppButton, { [cls.square]: square, [cls.disabled]: disabled }, [
				className,
				cls[size],
				cls[theme],
			])}
		>
			{children}
		</button>
	)
})
