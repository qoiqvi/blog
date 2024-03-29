import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleListItem.module.scss"
import { useTranslation } from "react-i18next"
import { HTMLAttributeAnchorTarget, memo } from "react"
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from "entities/Article/model/types/article"
import { Text } from "shared/ui/Text"
import { Icon } from "shared/ui/Icon"
import EyeIcon from "shared/assets/icons/EyeIcon.svg"
import { IconType } from "shared/ui/Icon/ui/Icon"
import { Card } from "shared/ui/Card"
import { Avatar } from "shared/ui/Avatar"
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent"
import { AppButton, ButtonTheme } from "shared/ui/AppButton"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { AppLink } from "shared/ui/AppLink"

export interface ArticleListItemProps {
	className?: string
	article: Article
	view: ArticleView
	target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
	const { className, article, view, target } = props
	const { t } = useTranslation()

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
						<AppLink to={RoutePath["article/"] + article.id}>
							<AppButton theme={ButtonTheme.OUTLINED}>{t("Full")}</AppButton>
						</AppLink>
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
		<AppLink
			target={target}
			to={RoutePath["article/"] + article.id}
			className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
		>
			<Card className={cls.card}>
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
		</AppLink>
	)
})
