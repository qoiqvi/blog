import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleListItem.module.scss"
import { useTranslation } from "react-i18next"
import { memo } from "react"
import { Article, ArticleView } from "entities/Article/model/types/article"
import { Text } from "shared/ui/Text"
import { Icon } from "shared/ui/Icon"
import EyeIcon from "shared/assets/icons/EyeIcon.svg"
import { IconType } from "shared/ui/Icon/ui/Icon"

export interface ArticleListItemProps {
	className?: string
	article: Article
	view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
	const { className, article, view } = props
	const { t } = useTranslation()

	if (view === ArticleView.LIST) {
		return (
			<div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
				<div>{article.title}</div>
			</div>
		)
	}

	return (
		<div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
			<div className={cls.card}>
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
			</div>
		</div>
	)
})
