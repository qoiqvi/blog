import { classNames } from "shared/lib/classNames/className"
import cls from "./Navbar.module.scss"
import { useState, type FC, useCallback, memo } from "react"
import { AppButton, ButtonTheme } from "shared/ui/AppButton"
import { useTranslation } from "react-i18next"
import { LoginModal } from "features/AuthByUserName"
import { useDispatch, useSelector } from "react-redux"
import { UserSliceActions, getUserAuthData } from "entities/User"

export interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className = "" }) => {
	const { t } = useTranslation()
	const [isAuthOpen, setIsAuthOpen] = useState(false)
	const dispatch = useDispatch()
	const onClose = useCallback(() => {
		setIsAuthOpen(false)
	}, [])
	const onOpen = useCallback(() => {
		setIsAuthOpen(true)
	}, [])
	const onLogOut = useCallback(() => {
		dispatch(UserSliceActions.logout())
	}, [dispatch])
	const authData = useSelector(getUserAuthData)

	if (authData) {
		return (
			<div className={classNames(cls.Navbar, {}, [className])}>
				<AppButton
					className={classNames(cls.links)}
					theme={ButtonTheme.BACKGROUND_INVERTED}
					onClick={onLogOut}
				>
					{t("Выйти")}
				</AppButton>
			</div>
		)
	}
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<AppButton
				className={classNames(cls.links)}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				onClick={onOpen}
			>
				{t("Войти")}
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
