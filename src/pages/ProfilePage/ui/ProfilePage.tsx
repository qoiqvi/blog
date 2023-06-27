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
	getProfileValidateErrors,
	profileSliceActions,
	profileSliceReducer,
} from "entities/Profile"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useSelector } from "react-redux"
import type { Currency } from "entities/Currency"
import type { Country } from "entities/Country"
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader"
import { Text, TextTheme } from "shared/ui/Text"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import { useParams } from "react-router-dom"
import { Page } from "widgets/Page"

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
	const validateError = useSelector(getProfileValidateErrors)
	const dispatch = useAppDispatch()
	const { id } = useParams<{ id: string }>()

	useInitialEffect(() => {
		dispatch(fetchProfileData(id))
	})
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

	const onChangeCurrency = useCallback(
		(value?: Currency) => {
			dispatch(profileSliceActions.updateProfileFormData({ currency: value }))
		},
		[dispatch]
	)

	const onChangeCountry = useCallback(
		(value?: Country) => {
			dispatch(profileSliceActions.updateProfileFormData({ country: value }))
		},
		[dispatch]
	)

	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount
		>
			<Page>
				<ProfilePageHeader />
				{validateError?.length &&
					validateError.map((err) => (
						<Text
							theme={TextTheme.ERROR}
							text={err}
							key={err}
						/>
					))}
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
						onChangeCurrency={onChangeCurrency}
						onChangeCountry={onChangeCountry}
					/>
				</div>
			</Page>
		</DynamicModuleLoader>
	)
})

export default ProfilePage
