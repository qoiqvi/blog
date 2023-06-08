import { classNames } from "shared/lib/classNames/className"
import cls from "./PageError.module.scss"
import { useTranslation } from "react-i18next"
import { AppButton, ThemeButton } from "shared/ui/AppButton"

export interface PageErrorProps {
	className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation()
	const reloadPage = () => {
		location.reload()
	}
	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			<p>{t("Произошла непредвиденная ошибка")}</p>
			<AppButton
				theme={ThemeButton.CLEAR}
				onClick={reloadPage}
			>
				{t("Обновить страницу")}
			</AppButton>
		</div>
	)
}
