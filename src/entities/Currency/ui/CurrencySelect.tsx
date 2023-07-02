import { useTranslation } from "react-i18next"
import { Select } from "shared/ui/Select"
import { Currency } from "../model/types/currency"
import { useCallback } from "react"

export interface CurrencySelectProps {
	value?: Currency
	onChange?: (value: Currency) => void
	readonly?: boolean
}
const options = [
	{ value: Currency.RUB, content: Currency.RUB },
	{ value: Currency.EUR, content: Currency.EUR },
	{ value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect = (props: CurrencySelectProps) => {
	const { onChange, value, readonly } = props
	const onChangeHandler = useCallback(
		(value: string) => {
			onChange?.(value as Currency)
		},
		[onChange]
	)
	const { t } = useTranslation()
	return (
		<Select
			readonly={readonly}
			value={value}
			placeholder={t("Валюта")}
			options={options}
			onChange={onChangeHandler}
		/>
	)
}
