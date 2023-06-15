import { classNames } from "shared/lib/classNames/className"
import cls from "./Text.module.scss"

export enum TextTheme {
	PRIMARY = "primary",
	ERROR = "error",
}

export enum TextAlingn {
	RIGHT = "right",
	LEFT = "left",
	CENTER = "center",
}

export interface TextProps {
	className?: string
	title?: string
	text?: string
	theme?: TextTheme
	align?: TextAlingn
}

export const Text = (props: TextProps) => {
	const { className, text, title, theme = TextTheme.PRIMARY, align = TextAlingn.LEFT } = props
	return (
		<div className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	)
}
