import { ReactNode } from "react"
import { Listbox as HListbox } from "@headlessui/react"
import cls from "./Listbox.module.scss"
import { AppButton } from "shared/ui/AppButton"
import { Mods, classNames } from "shared/lib/classNames/className"

type DropDownDirection = "top" | "down"

export interface ListboxItem {
	value: string | undefined
	content: ReactNode
	disabled?: boolean
}

export interface MyListboxProps {
	className?: string
	data: ListboxItem[]
	value: string
	onChange: (value: string) => void
	defaultValue: string
	readonly?: boolean
	label?: string
	direction?: DropDownDirection
}

const mapDirectionClasess: Record<DropDownDirection, string> = {
	down: cls.optionsDown,
	top: cls.optionsTop,
}

export const Listbox = (props: MyListboxProps) => {
	const { data, defaultValue, onChange, readonly = false, value, label, className, direction = "down" } = props

	return (
		<HListbox
			disabled={readonly}
			as={"div"}
			className={classNames(cls.Listbox, {}, [className])}
			value={value ?? defaultValue}
			onChange={onChange}
		>
			{label && <span className={classNames(cls.label, { [cls.readonly]: readonly })}>{label}</span>}
			<HListbox.Button className={cls.button}>
				<AppButton disabled={readonly}>{value ?? defaultValue}</AppButton>
			</HListbox.Button>
			<HListbox.Options className={classNames(cls.options, {}, [mapDirectionClasess[direction]])}>
				{data.map((item) => (
					<HListbox.Option
						className={cls.item}
						key={item.value}
						value={item.value}
						disabled={item.disabled}
					>
						{({ active, selected }) => {
							const mods: Mods = {
								[cls.active]: active,
								[cls.selected]: selected,
								[cls.disabled]: item.disabled,
							}
							return <li className={classNames(cls.item, mods)}>{item.content}</li>
						}}
					</HListbox.Option>
				))}
			</HListbox.Options>
		</HListbox>
	)
}
