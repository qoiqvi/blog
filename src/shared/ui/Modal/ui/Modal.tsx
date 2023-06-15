import { type Mods, classNames } from "shared/lib/classNames/className"
import cls from "./Modal.module.scss"
import { useState, type FC, type ReactNode, useRef, useEffect, useCallback } from "react"
import { Portal } from "shared/ui/Portal/Portal"

export interface ModalProps {
	className?: string
	children?: ReactNode
	isOpen?: boolean
	onClose?: () => void
	lazy?: boolean
}

const TIMEOUT_DELAY = 300

export const Modal: FC<ModalProps> = (props) => {
	const { className, children, isOpen, onClose, lazy } = props
	const [isClosing, setIsClosing] = useState(false)
	const [isMounted, setIsMounted] = useState(false)
	const closingRef = useRef<ReturnType<typeof setTimeout>>()
	const mods: Mods = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing,
	}
	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation()
	}
	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			closingRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, TIMEOUT_DELAY)
		}
	}, [onClose])

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") {
				closeHandler()
			}
		},
		[closeHandler]
	)

	useEffect(() => {
		if (isOpen) {
			window.addEventListener("keydown", onKeyDown)
		}
		return () => {
			clearTimeout(closingRef.current)
			window.removeEventListener("keydown", onKeyDown)
		}
	}, [isOpen, onKeyDown])
	useEffect(() => {
		if (isOpen) {
			setIsMounted(true)
		}
	}, [isOpen])

	if (lazy && !isMounted) {
		return null
	}
	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className])}>
				<div
					className={cls.overlay}
					onClick={closeHandler}
				>
					<div
						className={classNames(cls.content)}
						onClick={onContentClick}
					>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	)
}
