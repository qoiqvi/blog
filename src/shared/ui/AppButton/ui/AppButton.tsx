import cls from "./AppButton.module.scss"
import { type Mods, classNames } from "shared/lib/classNames/className"
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
	OUTLINED_RED = "outlined_red",
	BACKGROUND = "background",
	BACKGROUND_INVERTED = "background_inverted",
}

export const AppButton: FC<AppButtonProps> = memo((props) => {
	const {
		className,
		square,
		size = ButtonSize.M,
		children,
		theme = ButtonTheme.OUTLINED,
		disabled,
		...otherProps
	} = props
	const mods: Mods = {
		[cls.square]: square,
		[cls.disabled]: disabled,
	}
	return (
		<button
			{...otherProps}
			disabled={disabled}
			className={classNames(cls.AppButton, mods, [className, cls[size], cls[theme]])}
		>
			{children}
		</button>
	)
})
