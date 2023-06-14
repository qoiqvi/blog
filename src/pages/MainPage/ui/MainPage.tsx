import { Counter } from "entities/Counter"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import { BugButton } from "widgets/PageError"

const MainPage = memo(() => {
	const { t } = useTranslation("main")
	return (
		<div>
			{t("Главная")}
			<BugButton />
			<Counter />
		</div>
	)
})

export default MainPage
