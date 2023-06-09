import { classNames } from "shared/lib/classNames/className"
import cls from "./Navbar.module.scss"
import { useState, type FC } from "react"
import { AppButton, ButtonTheme } from "shared/ui/AppButton"
import { Modal } from "shared/ui/Modal"
import { useTranslation } from "react-i18next"

export interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className = "" }) => {
	const { t } = useTranslation()
	const [isAuthOpen, setIsAuthOpen] = useState(false)
	const onClose = () => {
		setIsAuthOpen(false)
	}
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<AppButton
				className={classNames(cls.links)}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				onClick={() => setIsAuthOpen(true)}
			>
				{t("Войти")}
			</AppButton>
			<Modal
				isOpen={isAuthOpen}
				onClose={onClose}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint hic debitis ullam voluptatum
				excepturi doloremque incidunt ipsam architecto quo porro unde dolorem fugit, commodi laboriosam ut,
				voluptatibus explicabo? Obcaecati?
			</Modal>
		</div>
	)
}
