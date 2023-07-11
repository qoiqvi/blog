import { useTranslation } from "react-i18next"
import { Currency } from "../model/types/currency"
import { useCallback } from "react"
import { Listbox } from "shared/ui/Listbox"

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
	const { t } = useTranslation()
	const onChangeHandler = useCallback(
		(value: string) => {
			onChange?.(value as Currency)
		},
		[onChange]
	)
	return (
		<Listbox
			data={options}
			label={t("Currency") + ">"}
			onChange={onChangeHandler}
			readonly={readonly}
			value={value as string}
			defaultValue={t("Pick currency")}
			direction="top"
		/>
	)
}
