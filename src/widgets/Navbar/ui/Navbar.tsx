import { classNames } from "shared/lib/classNames/className"
import cls from "./Navbar.module.scss"
import { useState, type FC } from "react"
import { AppButton, ButtonTheme } from "shared/ui/AppButton"
import { useTranslation } from "react-i18next"
import { LoginModal } from "features/AuthByUserName"

export interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className = "" }) => {
	const { t } = useTranslation()
	const [isAuthOpen, setIsAuthOpen] = useState(false)
	const onClose = () => {
		setIsAuthOpen(false)
	}
	const onOpen = () => {
		setIsAuthOpen(true)
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
			<LoginModal
				isOpen={isAuthOpen}
				onClose={onClose}
			></LoginModal>
		</div>
	)
}
