import { classNames } from "shared/lib/classNames/className"
import cls from "./Input.module.scss"
import { useState, type ChangeEvent, type InputHTMLAttributes, useEffect, useRef, memo } from "react"

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value">
export interface InputProps extends HTMLInputProps {
	className?: string
	value?: string
	autofocus?: boolean
	type?: string
	onChange?: (value: string) => void
	placeholder?: string
}

export const Input = memo((props: InputProps) => {
	const { className, autofocus, value, onChange, type = "text", placeholder, ...otherProps } = props
	const [focus, setFocus] = useState(false)
	const [caretPosition, setCaretPosition] = useState(0)
	const ref = useRef<HTMLInputElement>()
	const onFocus = () => {
		setFocus(true)
	}
	const onBlur = () => {
		setFocus(false)
	}
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
		setCaretPosition(e.target.value.length)
	}
	const onSelect = (e: any) => {
		setCaretPosition(e?.target?.selectionStart || 0)
	}
	useEffect(() => {
		if (autofocus) {
			setFocus(true)
			ref?.current?.focus()
		}
	}, [autofocus])
	return (
		<div className={classNames(cls.InputWrapper, {}, [className])}>
			{placeholder && <div>{`${placeholder}>`}</div>}
			<div className={cls.caretWrapper}>
				<input
					ref={ref}
					type={type}
					value={value}
					className={cls.input}
					onChange={onChangeHandler}
					onFocus={onFocus}
					onBlur={onBlur}
					autoFocus={focus}
					onSelect={onSelect}
					{...otherProps}
				/>
				{focus && (
					<span
						className={cls.caret}
						style={{ left: `${caretPosition * 9}px` }}
					/>
				)}
			</div>
		</div>
	)
})
