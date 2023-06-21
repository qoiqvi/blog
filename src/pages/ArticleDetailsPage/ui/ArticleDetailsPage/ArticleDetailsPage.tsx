import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleDetailsPage.module.scss"
import { useTranslation } from "react-i18next"
import { ArticleDetails } from "entities/Article"
import { useParams } from "react-router-dom"
import { Text } from "shared/ui/Text"
import { CommentList } from "entities/Comment"
import { memo } from "react"

export interface ArticleDetailsPageProps {
	className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
	const { className } = props
	const { t } = useTranslation("article-details")
	const { id } = useParams<{ id: string }>()

	if (!id) {
		return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>{t("Article not found")}</div>
	}

	return (
		<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
			<ArticleDetails id={id} />
			<Text
				className={cls.commentTitle}
				title={t("Comments")}
			/>
			<CommentList
				isLoading={true}
				comments={[
					{
						id: "1",
						text: "Отличная статья",
						user: {
							id: "1",
							username: "Dima",
							avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
						},
					},
					{
						id: "2",
						text: "Плохая статья",
						user: {
							id: "2",
							username: "Polina",
							avatar: "https://upload.wikimedia.org/wikipedia/en/4/43/Pok%C3%A9mon_Mewtwo_art.png",
						},
					},
					{
						id: "3",
						text: "Отлично написано я без аватарки",
						user: {
							id: "3",
							username: "Aligadzhi",
						},
					},
				]}
			/>
		</div>
	)
}

export default memo(ArticleDetailsPage)
