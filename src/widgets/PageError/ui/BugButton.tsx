import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { AppButton } from "shared/ui/AppButton"

export interface BugButtonProps {
	className?: string
}

export const BugButton = ({ className }: BugButtonProps) => {
	const [error, setError] = useState(false)
	const { t } = useTranslation()
	const throwError = () => {
		setError(!error)
	}

	useEffect(() => {
		if (error) throw new Error()
	}, [error])

	return <AppButton onClick={throwError}>{t("Выбросить ошибку")}</AppButton>
}
