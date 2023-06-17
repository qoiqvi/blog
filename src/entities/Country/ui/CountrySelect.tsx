import { Select } from "shared/ui/Select"
import { Country } from "../model/types/country"
import { useCallback } from "react"
import { useTranslation } from "react-i18next"

export interface CountrySelectorProps {
	className?: string
	value?: Country
	onChange?: (value: Country) => void
	readonly?: boolean
}

const data = [
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
		<Select
			data={data}
			onChange={onChangeHandler}
			value={value}
			placeholder={t("Страна")}
			readonly={readonly}
		/>
	)
}
