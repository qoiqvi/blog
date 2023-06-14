import { classNames } from "shared/lib/classNames/className"
// import cls from "./LoginModal.module.scss"
import { Modal } from "shared/ui/Modal"
import { LoginFormAsync } from "../LoginForm/LoginForm.async"
import { Suspense } from "react"
import { Loader } from "shared/ui/Loader"

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
			<Suspense fallback={<Loader />}>
				<LoginFormAsync onSuccess={onClose} />
			</Suspense>
		</Modal>
	)
}
