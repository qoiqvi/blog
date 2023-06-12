import { classNames } from "shared/lib/classNames/className"
import cls from "./LoginForm.module.scss"
import { useTranslation } from "react-i18next"
import { AppButton, ButtonTheme } from "shared/ui/AppButton"
import { Input } from "shared/ui/Input"
import { useDispatch, useSelector } from "react-redux"
import { memo, useCallback } from "react"
import { loginSliceActions, loginSliceReducer } from "../../model/slice/loginSlice"
import { loginByUsername } from "../../model/services/LoginByUsername/LoginByUsername"
import { Text, TextTheme } from "shared/ui/Text"
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername"
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword"
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading"
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError"
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModuleLoader"

export interface LoginFormProps {
	className?: string
}

const initialReducers: ReducersList = {
	loginForm: loginSliceReducer,
}

const LoginForm = memo((props: LoginFormProps) => {
	const { className } = props
	const username = useSelector(getLoginUsername)
	const password = useSelector(getLoginPassword)
	const isLoading = useSelector(getLoginIsLoading)
	const error = useSelector(getLoginError)
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
		<DynamicModuleLoader
			removeAfterUnmount={true}
			reducers={initialReducers}
		>
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
		</DynamicModuleLoader>
	)
})

export default LoginForm
