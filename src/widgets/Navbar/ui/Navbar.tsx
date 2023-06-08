import { classNames } from "shared/lib/classNames/className"
import cls from "./Navbar.module.scss"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/ui/AppLink"
import type { FC } from "react"
import { useTranslation } from "react-i18next"
import { RoutePath } from "shared/config/routeConfig/routeConfig"

export interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className = "" }) => {
	const { t } = useTranslation()
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={classNames(cls.links)}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.about}
					className={cls.mainLink}
				>
					{t("О странице")}
				</AppLink>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.main}
				>
					{t("Главная")}
				</AppLink>
			</div>
		</div>
	)
}
