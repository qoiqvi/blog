import { classNames } from "shared/lib/classNames/className"
import cls from "./Navbar.module.scss"
import { useState, type FC, useCallback, memo } from "react"
import { AppButton, ButtonTheme } from "shared/ui/AppButton"
import { useTranslation } from "react-i18next"
import { LoginModal } from "features/AuthByUserName"
import { useDispatch, useSelector } from "react-redux"
import { UserSliceActions, getUserAuthData } from "entities/User"
import { Text, TextTheme } from "shared/ui/Text"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink"
import { RoutePath } from "shared/config/routeConfig/routeConfig"

export interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className = "" }) => {
	const { t } = useTranslation()
	const [isAuthOpen, setIsAuthOpen] = useState(false)
	const dispatch = useDispatch()
	const authData = useSelector(getUserAuthData)

	const onClose = useCallback(() => {
		setIsAuthOpen(false)
	}, [])

	const onOpen = useCallback(() => {
		setIsAuthOpen(true)
	}, [])

	const onLogOut = useCallback(() => {
		dispatch(UserSliceActions.logout())
	}, [dispatch])

	if (authData) {
		return (
			<div className={classNames(cls.Navbar, {}, [className])}>
				<Text
					title={t("Habr 2.0")}
					className={cls.appName}
					theme={TextTheme.INVERTED}
				/>
				<AppLink
					to={RoutePath.article_create}
					theme={AppLinkTheme.INVERTED_PRIMARY}
					className={cls.createLink}
				>
					{t("Create Article")}
				</AppLink>
				<AppButton
					className={classNames(cls.links)}
					theme={ButtonTheme.BACKGROUND_INVERTED}
					onClick={onLogOut}
				>
					{t("Log out")}
				</AppButton>
			</div>
		)
	}
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Text
				title={t("Habr 2.0")}
				className={cls.appName}
				theme={TextTheme.INVERTED}
			/>
			<AppButton
				className={classNames(cls.links)}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				onClick={onOpen}
			>
				{t("Log in")}
			</AppButton>
			{isAuthOpen && (
				<LoginModal
					isOpen={isAuthOpen}
					onClose={onClose}
				></LoginModal>
			)}
		</div>
	)
})
