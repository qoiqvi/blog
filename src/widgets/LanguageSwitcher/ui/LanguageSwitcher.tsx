import { classNames } from "shared/lib/classNames/className"
import { AppButton, ThemeButton } from "shared/ui/AppButton"
import { useTranslation } from "react-i18next"
import type { FC } from "react"
export interface LanguageSwitcherProps {
	className?: string
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className = "" }) => {
	const { t, i18n } = useTranslation()
	const changeLang = (): void => {
		void i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
	}
	return (
		<AppButton
			onClick={changeLang}
			theme={ThemeButton.CLEAR}
			className={classNames("", {}, [className])}
		>
			{t("Язык")}
		</AppButton>
	)
}
