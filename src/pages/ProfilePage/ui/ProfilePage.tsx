import { classNames } from "shared/lib/classNames/className"
import cls from "./ProfilePage.module.scss"
import { useTranslation } from "react-i18next"
import { memo } from "react"
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModuleLoader"
import { profileSliceReducer } from "entities/Profile"

export interface ProfilePageProps {
	className?: string
}

const reducers: ReducersList = {
	profile: profileSliceReducer,
}

const ProfilePage = memo((props: ProfilePageProps) => {
	const { className } = props
	const { t } = useTranslation()
	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount
		>
			<div className={classNames(cls.ProfilePage, {}, [className])}>{t("Профиль")}</div>
		</DynamicModuleLoader>
	)
})

export default ProfilePage
