import { classNames } from "shared/lib/classNames/className"
import cls from "./LoginForm.module.scss"
import { useTranslation } from "react-i18next"
import { AppButton, ButtonTheme } from "shared/ui/AppButton"
import { Input } from "shared/ui/Input"
import { useDispatch, useSelector } from "react-redux"
import { memo, useCallback } from "react"
import { loginSliceActions } from "../../model/slice/loginSlice"
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState"
import { loginByUsername } from "../../model/services/LoginByUsername/LoginByUsername"
import { Text, TextTheme } from "shared/ui/Text"

export interface LoginFormProps {
	className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
	const { className } = props
	const { username, password, isLoading, error } = useSelector(getLoginState)
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginSliceActions.setUserName(value))
		},
		[dispatch]
	)
	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginSliceActions.setPassword(value))
		},
		[dispatch]
	)
	const onFormSubmit = useCallback(() => {
		dispatch(loginByUsername({ password, username }))
	}, [dispatch, password, username])
	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Text title={t("Авторизация")} />
			{error && (
				<Text
					text={t("Неверный логин или пароль")}
					theme={TextTheme.ERROR}
				/>
			)}
			<Input
				className={cls.input}
				type="text"
				placeholder="Username"
				autofocus={true}
				onChange={onChangeUsername}
				value={username}
			/>
			<Input
				className={cls.input}
				placeholder="Password"
				type="text"
				onChange={onChangePassword}
				value={password}
			/>
			<AppButton
				theme={ButtonTheme.OUTLINED}
				className={cls.button}
				onClick={onFormSubmit}
				disabled={isLoading}
			>
				{t("Войти")}
			</AppButton>
		</div>
	)
})
