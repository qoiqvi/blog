import { classNames } from "shared/lib/classNames/className"
import { memo, useCallback, useEffect } from "react"
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModuleLoader"
import {
	ProfileCard,
	fetchProfileData,
	getProfileError,
	getProfileForm,
	getProfileIsLoading,
	getProfileReadonly,
	profileSliceActions,
	profileSliceReducer,
} from "entities/Profile"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useSelector } from "react-redux"

export interface ProfilePageProps {
	className?: string
}

const reducers: ReducersList = {
	profile: profileSliceReducer,
}

const ProfilePage = memo((props: ProfilePageProps) => {
	const { className } = props
	const formData = useSelector(getProfileForm)
	const isLoading = useSelector(getProfileIsLoading)
	const error = useSelector(getProfileError)
	const readonly = useSelector(getProfileReadonly)
	const dispatch = useAppDispatch()
	console.log(formData)
	useEffect(() => {
		dispatch(fetchProfileData())
	}, [dispatch])

	const onChangeFirstname = useCallback(
		(value?: string) => {
			dispatch(profileSliceActions.updateProfileFormData({ first: value }))
		},
		[dispatch]
	)

	const onChangeLastname = useCallback(
		(value?: string) => {
			dispatch(profileSliceActions.updateProfileFormData({ lastname: value }))
		},
		[dispatch]
	)

	const onChangeUsername = useCallback(
		(value?: string) => {
			dispatch(profileSliceActions.updateProfileFormData({ username: value }))
		},
		[dispatch]
	)

	const onChangeAge = useCallback(
		(value?: string) => {
			dispatch(profileSliceActions.updateProfileFormData({ age: Number(value) }))
		},
		[dispatch]
	)

	const onChangeAvatar = useCallback(
		(value?: string) => {
			dispatch(profileSliceActions.updateProfileFormData({ avatar: value }))
		},
		[dispatch]
	)

	const onChangeCity = useCallback(
		(value?: string) => {
			dispatch(profileSliceActions.updateProfileFormData({ city: value }))
		},
		[dispatch]
	)

	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount
		>
			<div className={classNames("", {}, [className])}>
				<ProfileCard
					formData={formData}
					isLoading={isLoading}
					error={error}
					readonly={readonly}
					onChangeFirstname={onChangeFirstname}
					onChangeLastname={onChangeLastname}
					onChangeUsername={onChangeUsername}
					onChangeAge={onChangeAge}
					onChangeCity={onChangeCity}
					onChangeAvatar={onChangeAvatar}
				/>
			</div>
		</DynamicModuleLoader>
	)
})

export default ProfilePage
