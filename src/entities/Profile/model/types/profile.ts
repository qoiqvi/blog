import type { Country } from "entities/Country"
import type { Currency } from "entities/Currency"

export interface Profile {
	id?: string
	first?: string
	lastname?: string
	age?: number
	currency?: Currency
	country?: Country
	city?: string
	username?: string
	avatar?: string
}

export enum ValidateProfileError {
	INCORECT_USER_DATA = "Неправильны данные пользователя",
	INCORECT_AGE = "Неправильно введен возраст",
	INCORECT_USERNAME = "Данный username недоступен",
	NO_DATA = "Ошибка профиля",
}

export interface ProfileSchema {
	data?: Profile
	form?: Profile
	isLoading: boolean
	error?: string
	readonly: boolean
	validateError?: ValidateProfileError[]
}
