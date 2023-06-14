import { classNames } from "shared/lib/classNames/className"
import cls from "./AppLink.module.scss"
import { Link, type LinkProps } from "react-router-dom"
import { memo, type FC } from "react"

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
	INVERTED_PRIMARY = "inverted_primary",
	INVERTED_SECONDARY = "inverted_secondary",
	RED = "red",
}

export interface AppLinkProps extends LinkProps {
	className?: string
	theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
	const { className, theme = AppLinkTheme.PRIMARY, children, to, ...other } = props

	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [className, cls[theme]])}
			{...other}
		>
			{children}
		</Link>
	)
})
