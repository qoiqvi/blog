import { classNames } from "shared/lib/classNames/className"
import cls from "./Navbar.module.scss"
import type { FC } from "react"

export interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className = "" }) => {
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={classNames(cls.links)}></div>
		</div>
	)
}
