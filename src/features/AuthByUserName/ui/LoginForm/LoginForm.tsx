import { classNames } from "shared/lib/classNames/className"
import cls from "./LoginForm.module.scss"
import { useTranslation } from "react-i18next"
import { AppButton } from "shared/ui/AppButton"
import { Input } from "shared/ui/Input"

export interface LoginFormProps {
	className?: string
}

export const LoginForm = (props: LoginFormProps) => {
	const { className } = props
	const { t } = useTranslation()
	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Input
				className={cls.input}
				type="text"
				placeholder="Username"
				autofocus={true}
			/>
			<Input
				className={cls.input}
				placeholder="Password"
				type="text"
			/>
			<AppButton className={cls.button}>{t("Войти")}</AppButton>
		</div>
	)
}
