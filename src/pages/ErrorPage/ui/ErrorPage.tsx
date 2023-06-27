import { classNames } from "shared/lib/classNames/className"
import cls from "./ErrorPage.module.scss"
import { useTranslation } from "react-i18next"
import { memo, type FC } from "react"
import { Page } from "widgets/Page"

export interface ErrorPageProps {
	className?: string
}

export const ErrorPage: FC<ErrorPageProps> = memo(({ className }) => {
	const { t } = useTranslation()
	return <Page className={classNames(cls.ErrorPage, {}, [className])}>{t("Страница не найдена")}</Page>
})
