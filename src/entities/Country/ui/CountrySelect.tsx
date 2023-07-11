import { Select } from "shared/ui/Select"
import { Country } from "../model/types/country"
import { useCallback } from "react"
import { useTranslation } from "react-i18next"
import { Listbox } from "shared/ui/Listbox"

export interface CountrySelectorProps {
	className?: string
	value?: Country
	onChange?: (value: Country) => void
	readonly?: boolean
}

const options = [
	{ value: Country.Russia, content: "Россия" },
	{ value: Country.Armenia, content: "Армения" },
	{ value: Country.Belarus, content: "Беларусь" },
	{ value: Country.Kazakhstan, content: "Казахстан" },
	{ value: Country.Ukraine, content: "Украина" },
]

export const CountrySelect = (props: CountrySelectorProps) => {
	const { onChange, value, readonly } = props
	const { t } = useTranslation()
	const onChangeHandler = useCallback(
		(value: string) => {
			onChange?.(value as Country)
		},
		[onChange]
	)
	return (
		<Listbox
			data={options}
			onChange={onChangeHandler}
			value={value as string}
			defaultValue={t("Your Country")}
			label={t("Country") + ">"}
			readonly={readonly}
			direction="top"
		/>
	)
}
