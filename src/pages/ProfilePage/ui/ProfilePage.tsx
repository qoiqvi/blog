import { classNames } from "shared/lib/classNames/className"
import { useTranslation } from "react-i18next"
import { memo, useEffect } from "react"
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModuleLoader"
import { ProfileCard, fetchProfileData, profileSliceReducer } from "entities/Profile"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"

export interface ProfilePageProps {
	className?: string
}

const reducers: ReducersList = {
	profile: profileSliceReducer,
}

const ProfilePage = memo((props: ProfilePageProps) => {
	const { className } = props
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(fetchProfileData())
	}, [dispatch])
	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount
		>
			<div className={classNames("", {}, [className])}>
				<ProfileCard />
			</div>
		</DynamicModuleLoader>
	)
})

export default ProfilePage
