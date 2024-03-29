import { type Mods, classNames } from "shared/lib/classNames/className"
import cls from "./ProfileCard.module.scss"
import { useTranslation } from "react-i18next"
import { Text, TextTheme } from "shared/ui/Text"
import { Input } from "shared/ui/Input"
import { type Profile } from "entities/Profile/model/types/profile"
import { Loader } from "shared/ui/Loader"
import { TextAlingn } from "shared/ui/Text/ui/Text"
import { Avatar } from "shared/ui/Avatar"
import { type Currency, CurrencySelect } from "entities/Currency"
import { type Country, CountrySelect } from "entities/Country"

export interface ProfileCardProps {
	className?: string
	formData?: Profile
	isLoading?: boolean
	error?: string
	readonly?: boolean
	onChangeFirstname?: (value?: string) => void
	onChangeLastname?: (value?: string) => void
	onChangeCity?: (value?: string) => void
	onChangeCountry?: (value?: Country) => void
	onChangeCurrency?: (value?: Currency) => void
	onChangeAge?: (value?: string) => void
	onChangeUsername?: (value?: string) => void
	onChangeAvatar?: (value?: string) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
	const {
		className,
		formData,
		error,
		isLoading,
		readonly,
		onChangeFirstname,
		onChangeLastname,
		onChangeAge,
		onChangeAvatar,
		onChangeCity,
		onChangeCountry,
		onChangeCurrency,
		onChangeUsername,
	} = props
	const { t } = useTranslation("profile")
	const mods: Mods = {
		[cls.editting]: !readonly,
	}
	if (isLoading) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
				<Loader />
			</div>
		)
	}

	if (error) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
				<Text
					theme={TextTheme.ERROR}
					title={t("Произошла ошибка при загрузке профиля	")}
					text={t("Попробуйте обновить страницу")}
					align={TextAlingn.CENTER}
				/>
			</div>
		)
	}
	return (
		<div>
			<div className={classNames(cls.ProfileCard, mods, [className])}>
				{formData?.avatar && (
					<div className={cls.AvatarWrapper}>
						<Avatar
							src={formData?.avatar}
							size={150}
						/>
					</div>
				)}
				<div className={cls.data}>
					<Input
						value={formData?.first}
						placeholder={t("Ваше имя")}
						className={cls.input}
						readonly={readonly}
						onChange={onChangeFirstname}
					/>
					<Input
						value={formData?.lastname}
						placeholder={t("Ваша фамилия")}
						className={cls.input}
						readonly={readonly}
						onChange={onChangeLastname}
					/>
					<Input
						value={formData?.username}
						placeholder={t("Ник")}
						className={cls.input}
						readonly={readonly}
						onChange={onChangeUsername}
					/>
					<Input
						value={formData?.age}
						placeholder={t("Возраст")}
						className={cls.input}
						readonly={readonly}
						onChange={onChangeAge}
					/>
					<Input
						value={formData?.city}
						placeholder={t("Город")}
						className={cls.input}
						readonly={readonly}
						onChange={onChangeCity}
					/>
					<CurrencySelect
						readonly={readonly}
						value={formData?.currency}
						onChange={onChangeCurrency}
					/>
					<CountrySelect
						value={formData?.country}
						readonly={readonly}
						onChange={onChangeCountry}
					/>
					<Input
						value={formData?.avatar}
						placeholder={t("Аватар")}
						className={cls.input}
						readonly={readonly}
						onChange={onChangeAvatar}
					/>
				</div>
			</div>
		</div>
	)
}
