import { classNames } from "shared/lib/classNames/className"
import cls from "./Card.module.scss"
import { useTranslation } from "react-i18next"
import { HTMLAttributes, ReactNode, memo } from "react"

export enum CardTheme {
	NORMAL = "normal",
	OUTLINED = "outlined",
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
	theme?: CardTheme
	children: ReactNode
}

export const Card = memo((props: CardProps) => {
	const { className, children, theme = CardTheme.NORMAL, ...otherProps } = props
	const { t } = useTranslation()
	return (
		<div
			className={classNames(cls.Card, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</div>
	)
})
