import { type Mods, classNames } from "shared/lib/classNames/className"
import cls from "./Select.module.scss"
import { type ChangeEvent, memo, useMemo } from "react"

export interface SelectProps {
	className?: string
	onChange?: (value: string) => void
	data?: SelectData[]
	placeholder?: string
	readonly?: boolean
	value?: string
}

export interface SelectData {
	value?: string
	content?: string
}

export const Select = memo((props: SelectProps) => {
	const { className, data, onChange, placeholder, readonly = false, value } = props
	const optionList = useMemo(
		() =>
			data?.map(({ content, value }) => (
				<option
					value={value}
					key={value}
				>
					{content}
				</option>
			)),
		[data]
	)

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value)
	}

	const mods: Mods = {
		[cls.readonly]: readonly,
	}

	return (
		<div className={classNames(cls.Wrapper, mods, [className])}>
			{placeholder && <span className={cls.placeholder}>{`${placeholder}>`}</span>}
			<select
				defaultValue={value}
				disabled={readonly}
				onChange={onChangeHandler}
				className={cls.select}
			>
				{optionList}
			</select>
		</div>
	)
})
