import cls from "./Sidebar.module.scss"
import { classNames } from "shared/lib/classNames/className"
import { type FC, useState } from "react"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import { LanguageSwitcher } from "widgets/LanguageSwitcher"
import { AppButton, ButtonTheme } from "shared/ui/AppButton"
import { ButtonSize } from "shared/ui/AppButton/ui/AppButton"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink"
import { useTranslation } from "react-i18next"
import MainIcon from "shared/assets/icons/Vector.svg"
import AboutIcon from "shared/assets/icons/clarity_list-outline-badged.svg"

export interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [collapsed, setCollaped] = useState<boolean>(true)
	const { t } = useTranslation()
	const onToggle = () => {
		setCollaped(!collapsed)
	}
	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<div className={cls.items}>
				<div>
					<AppLink
						theme={AppLinkTheme.INVERTED_PRIMARY}
						to={RoutePath.about}
						className={cls.item}
					>
						{collapsed ? (
							<MainIcon className={cls.icon} />
						) : (
							<>
								<MainIcon
									// width={50}
									// height={50}
									className={cls.icon}
								/>
								<span className={cls.link}>{t("О странице")}</span>
							</>
						)}
					</AppLink>
				</div>
				<div>
					<AppLink
						theme={AppLinkTheme.INVERTED_PRIMARY}
						to={RoutePath.main}
						className={cls.item}
					>
						{collapsed ? (
							<AboutIcon className={cls.icon} />
						) : (
							<>
								<AboutIcon className={cls.icon} />
								<span className={cls.link}>{t("Главная")}</span>
							</>
						)}
					</AppLink>
				</div>
			</div>
			<AppButton
				data-testid="sb-button"
				onClick={onToggle}
				square={true}
				className={cls.collapseBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				size={ButtonSize.L}
			>
				{collapsed ? ">" : "<"}
			</AppButton>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LanguageSwitcher
					short={collapsed}
					className={cls.lang}
				/>
			</div>
		</div>
	)
}
