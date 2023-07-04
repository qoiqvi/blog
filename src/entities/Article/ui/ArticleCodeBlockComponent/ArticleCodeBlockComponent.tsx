import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticleCodeBlockComponent.module.scss"
import { memo } from "react"
import { type ArticleCodeBlock } from "../../model/types/article"
import { Code } from "shared/ui/Code"

export interface ArticleCodeBlockComponentProps {
	className?: string
	block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
	const { className, block } = props
	return (
		<div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
			<Code text={block.code} />
		</div>
	)
})
