import { memo } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "shared/ui/Page"
import { BugButton } from "widgets/PageError"

const MainPage = memo(() => {
	const { t } = useTranslation("main")
	return (
		<Page>
			{t("Главная")}
			<BugButton />
		</Page>
	)
})

export default MainPage
