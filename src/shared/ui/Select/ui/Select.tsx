import { classNames } from "shared/lib/classNames/className"
import cls from "./Select.module.scss"
import { type ChangeEvent, memo, useMemo } from "react"

export interface SelectProps {
	className?: string
	onChange?: (value: string) => void
	data?: SelectData[]
	placeholder?: string
}

interface SelectData {
	value?: string
	content?: string
}

export const Select = memo((props: SelectProps) => {
	const { className, data, onChange, placeholder } = props
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
	console.log(optionList)
	return (
		<div className={classNames(cls.Wrapper, {}, [className])}>
			{placeholder && <span>{`${placeholder}>`}</span>}
			<select onChange={onChangeHandler}>{optionList}</select>
		</div>
	)
})
