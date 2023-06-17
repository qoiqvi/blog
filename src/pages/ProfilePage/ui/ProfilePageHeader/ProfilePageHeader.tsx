import { classNames } from "shared/lib/classNames/className"
import cls from "./ProfilePageHeader.module.scss"
import { useTranslation } from "react-i18next"
import { AppButton, ButtonTheme } from "shared/ui/AppButton"
import { Text } from "shared/ui/Text"
import { useSelector } from "react-redux"
import { getProfileReadonly, profileSliceActions, updateProfileData } from "entities/Profile"
import { useCallback } from "react"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"

export interface ProfilePageHeaderProps {
	className?: string
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
	const { className } = props
	const dispatch = useAppDispatch()
	const { t } = useTranslation()
	const readonly = useSelector(getProfileReadonly)
	const toggleReadonly = useCallback(
		(bool: boolean) => {
			dispatch(profileSliceActions.setReadonly(bool))
		},
		[dispatch]
	)
	const onCancelEdit = useCallback(() => {
		dispatch(profileSliceActions.cancelEdit())
	}, [dispatch])

	const onSave = useCallback(() => {
		dispatch(profileSliceActions.setReadonly(true))
		dispatch(updateProfileData())
	}, [dispatch])
	return (
		<div className={classNames(cls.ProfilePageHeader, {}, [className])}>
			<div className={cls.header}>
				<Text title={t("Профиль")} />
				{readonly ? (
					<AppButton
						className={cls.editBtn}
						theme={ButtonTheme.OUTLINED}
						onClick={() => toggleReadonly(false)}
					>
						{t("Редактировать")}
					</AppButton>
				) : (
					<>
						<AppButton
							className={cls.cancelBtn}
							theme={ButtonTheme.OUTLINED_RED}
							onClick={onCancelEdit}
						>
							{t("Отменить")}
						</AppButton>
						<AppButton
							onClick={onSave}
							theme={ButtonTheme.OUTLINED}
							className={cls.saveBtn}
						>
							{t("Сохранить")}
						</AppButton>
					</>
				)}
			</div>
		</div>
	)
}
