import { classNames } from "shared/lib/classNames/className"
import cls from "./ProfileCard.module.scss"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData"
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError"
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading"
import { Text } from "shared/ui/Text"
import { AppButton, ButtonTheme } from "shared/ui/AppButton"
import { Input } from "shared/ui/Input"
export interface ProfileCardProps {
	className?: string
}

export const ProfileCard = (props: ProfileCardProps) => {
	const { className } = props
	const { t } = useTranslation("profile")
	const data = useSelector(getProfileData)
	const isLoading = useSelector(getProfileIsLoading)
	const error = useSelector(getProfileError)

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.header}>
				<Text title={t("Профиль")} />
				<AppButton theme={ButtonTheme.OUTLINED}>{t("Редактировать")}</AppButton>
			</div>
			<div className={cls.data}>
				<Input
					value={data?.first}
					placeholder={t("Ваше имя")}
					className={cls.input}
				/>
				<Input
					value={data?.lastname}
					placeholder={t("Ваше фамилия")}
					className={cls.input}
				/>
			</div>
		</div>
	)
}
