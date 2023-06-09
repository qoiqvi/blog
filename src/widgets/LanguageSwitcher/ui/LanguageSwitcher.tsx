import { classNames } from "shared/lib/classNames/className"
import { AppButton, ButtonTheme } from "shared/ui/AppButton"
import { useTranslation } from "react-i18next"
import type { FC } from "react"

export interface LanguageSwitcherProps {
	className?: string
	short: boolean
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className = "", short }) => {
	const { t, i18n } = useTranslation()
	const changeLang = (): void => {
		void i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
	}
	return (
		<AppButton
			onClick={changeLang}
			theme={ButtonTheme.CLEAR}
			className={classNames("", {}, [className])}
		>
			{t(short ? "Короткий язык" : "Язык")}
		</AppButton>
	)
}
