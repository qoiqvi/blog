import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleImageBlockComponent.module.scss"
import { useTranslation } from "react-i18next"
import { memo } from "react"
import { Text } from "shared/ui/Text"
import { ArticleImageBlock } from "../../model/types/article"
import { TextAlingn } from "shared/ui/Text/ui/Text"

export interface ArticleImageBlockComponentProps {
	className?: string
	block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
	const { className, block } = props
	const { t } = useTranslation()
	return (
		<div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
			<img
				src={block.src}
				className={cls.img}
				alt={block.title}
			/>
			{block.title && (
				<Text
					text={block.title}
					align={TextAlingn.CENTER}
				/>
			)}
		</div>
	)
})
