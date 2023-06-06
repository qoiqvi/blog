import { useEffect, useState } from "react"
import { AppButton } from "shared/AppButton"

export interface BugButtonProps {
	className?: string
}

export const BugButton = ({ className }: BugButtonProps) => {
	const [error, setError] = useState(false)
	const throwError = () => {
		setError(!error)
	}

	useEffect(() => {
		if (error) throw new Error()
	}, [error])

	return <AppButton onClick={throwError}>ThrowError</AppButton>
}
