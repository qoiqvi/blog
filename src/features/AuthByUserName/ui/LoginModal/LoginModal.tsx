import { classNames } from "shared/lib/classNames/className"
// import cls from "./LoginModal.module.scss"
import { Modal } from "shared/ui/Modal"
import { LoginForm } from "../LoginForm/LoginForm"

export interface LoginModalProps {
	className?: string
	isOpen?: boolean
	onClose?: () => void
}

export const LoginModal = (props: LoginModalProps) => {
	const { className, isOpen, onClose } = props
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			lazy
			className={classNames("LoginModal", {}, [className])}
		>
			<LoginForm />
		</Modal>
	)
}
