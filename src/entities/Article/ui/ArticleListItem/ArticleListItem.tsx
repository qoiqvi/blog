import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleListItem.module.scss"
import { useTranslation } from "react-i18next"
import { memo, useCallback } from "react"
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from "entities/Article/model/types/article"
import { Text } from "shared/ui/Text"
import { Icon } from "shared/ui/Icon"
import EyeIcon from "shared/assets/icons/EyeIcon.svg"
import { IconType } from "shared/ui/Icon/ui/Icon"
import { Card } from "shared/ui/Card"
import { Avatar } from "shared/ui/Avatar"
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent"
import { AppButton, ButtonTheme } from "shared/ui/AppButton"
import { useNavigate } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"

export interface ArticleListItemProps {
	className?: string
	article: Article
	view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
	const { className, article, view } = props
	const { t } = useTranslation()
	const navigate = useNavigate()

	const onOpenArticle = useCallback(() => {
		navigate(RoutePath["article/"] + article.id)
	}, [article.id, navigate])

	if (view === ArticleView.DETAIL) {
		const preview = article.blocks.find((block) => block.type === ArticleBlockType.TEXT)
		return (
			<div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
				<Card className={cls.card}>
					<div className={cls.header}>
						<Avatar
							size={30}
							src={article.user.avatar}
							className={cls.avatar}
						/>
						<Text
							text={article.user.username}
							className={cls.username}
						/>
						<Text
							text={article.createdAt}
							className={cls.date}
						/>
					</div>
					<Text
						title={article.title}
						className={cls.title}
					/>
					<Text
						text={article.type.join(", ")}
						className={cls.types}
					/>
					<img
						src={article.img}
						className={cls.img}
						alt={article.title}
					/>
					<div className={cls.textWrapper}>
						{preview && (
							<ArticleTextBlockComponent
								block={preview as ArticleTextBlock}
								className={cls.text}
							/>
						)}
					</div>
					<div className={cls.footer}>
						<AppButton
							onClick={onOpenArticle}
							theme={ButtonTheme.OUTLINED}
						>
							{t("Full")}
						</AppButton>
						<Text
							className={cls.views}
							text={String(article.views)}
						/>
						<Icon
							type={IconType.STROKE}
							Svg={EyeIcon}
						/>
					</div>
				</Card>
			</div>
		)
	}

	return (
		<div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
			<Card
				className={cls.card}
				onClick={onOpenArticle}
			>
				<div className={cls.imageWrapper}>
					<img
						src={article.img}
						className={cls.img}
						alt={article.title}
					/>
					<Text
						text={article.createdAt}
						className={cls.date}
					/>
				</div>
				<div className={cls.infoWrapper}>
					<Text
						text={article.type.join(", ")}
						className={cls.types}
					/>
					<Text
						text={String(article.views)}
						className={cls.views}
					/>
					<Icon
						Svg={EyeIcon}
						type={IconType.STROKE}
					/>
				</div>
				<Text
					text={article.title}
					className={cls.title}
				/>
			</Card>
		</div>
	)
})
