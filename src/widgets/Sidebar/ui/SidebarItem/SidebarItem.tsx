import { classNames } from "shared/lib/classNames/className"
import cls from "./SidebarItem.module.scss"
import { useTranslation } from "react-i18next"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink"
import { memo } from "react"
import { useSelector } from "react-redux"
import { getUserAuthData } from "entities/User"
import { getSidebarItems } from "widgets/Sidebar/model/selectors/getSidebarItems"

export interface SidebarItemProps {
	className?: string
	collapsed?: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
	const { className, collapsed } = props
	const { t } = useTranslation()
	const auth = useSelector(getUserAuthData)
	const SidebarItemsList = useSelector(getSidebarItems)

	return (
		<div className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed }, [className])}>
			<div>
				{SidebarItemsList.map(({ path, text, Icon, authRequire }) => {
					const Links = (
						<AppLink
							key={path}
							to={path}
							className={cls.item}
							theme={AppLinkTheme.INVERTED_PRIMARY}
						>
							{collapsed ? (
								<Icon className={cls.icon} />
							) : (
								<>
									<Icon className={cls.icon} />
									<span className={cls.link}>{t(text)}</span>
								</>
							)}
						</AppLink>
					)
					if (authRequire) {
						if (auth) {
							return Links
						}
						return <></>
					}
					return Links
				})}
			</div>
		</div>
	)
})
