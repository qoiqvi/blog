import { Counter } from "entities/Counter"
import { useTranslation } from "react-i18next"
import { BugButton } from "widgets/PageError"

const MainPage = () => {
	const { t } = useTranslation("main")
	return (
		<div>
			{t("Главная")}
			<BugButton />
			<Counter />
		</div>
	)
}

export default MainPage
