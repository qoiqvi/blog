import { classNames } from "shared/lib/classNames/className"
import cls from "./About.module.scss"
import { useTranslation } from "react-i18next"
import { Page } from "shared/ui/Page"

export interface AboutProps {
	className?: string
}

const About = (props: AboutProps) => {
	const { className } = props
	const { t } = useTranslation()
	return <Page className={classNames(cls.Wrapper, {}, [className])}>{t("About")}</Page>
}

export default About
