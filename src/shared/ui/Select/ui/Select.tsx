import { type Mods, classNames } from "shared/lib/classNames/className"
import cls from "./Select.module.scss"
import { type ChangeEvent, memo, useMemo } from "react"

export interface SelectProps<T extends string> {
	className?: string
	onChange?: (value: T) => void
	options?: Array<SelectOptions<T>>
	placeholder?: string
	readonly?: boolean
	value?: T
}

export interface SelectOptions<T extends string> {
	value?: T
	content?: string
}

export const Select = <T extends string>(props: SelectProps<T>) => {
	const { className, options, onChange, placeholder, readonly = false, value } = props
	const optionList = useMemo(
		() =>
			options?.map(({ content, value }) => (
				<option
					value={value}
					key={value}
				>
					{content}
				</option>
			)),
		[options]
	)

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value as T)
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
}
