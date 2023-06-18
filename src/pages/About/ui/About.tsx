import { classNames } from "shared/lib/classNames/className"
import cls from "./About.module.scss"
import { useTranslation } from "react-i18next"

export interface AboutProps {
	className?: string
}

const About = (props: AboutProps) => {
	const { className } = props
	const { t } = useTranslation()
	return <div className={classNames(cls.Wrapper, {}, [className])}>{t("About")}</div>
}

export default About
