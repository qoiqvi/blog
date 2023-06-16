import { useTranslation } from "react-i18next"
import { Select } from "shared/ui/Select"
import { Currency } from "../model/types/currency"
import { useCallback } from "react"

export interface CurrencySelectProps {
	className?: string
	value?: Currency
	onChange?: (value: Currency) => void
}
const data = [
	{ value: Currency.RUB, content: Currency.RUB },
	{ value: Currency.EUR, content: Currency.EUR },
	{ value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect = (props: CurrencySelectProps) => {
	const { className, onChange, value } = props
	const onChangeHandler = useCallback(
		(value: string) => {
			onChange?.(value as Currency)
		},
		[onChange]
	)
	const { t } = useTranslation()
	return (
		<Select
			placeholder={t("Валюта")}
			data={data}
			onChange={onChangeHandler}
		/>
	)
}
