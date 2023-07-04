import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleTextBlockComponent.module.scss"
import { memo } from "react"
import type { ArticleTextBlock } from "entities/Article/model/types/article"
import { Text } from "shared/ui/Text"

export interface ArticleTextBlockComponentProps {
	className?: string
	block?: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
	const { className, block } = props
	if (!block) {
		return null
	}
	return (
		<div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
			{block.title && (
				<Text
					title={block.title}
					className={cls.title}
				/>
			)}
			{block.paragraphs.map((paragraph, index) => (
				<Text
					key={index}
					text={paragraph}
					className={cls.paragraph}
				/>
			))}
		</div>
	)
})
