import { classNames } from "shared/lib/classNames/className"
import cls from "./ArticlePageViewSelector.module.scss"
import { memo } from "react"
import { ArticleView } from "entities/Article"
import { Icon } from "shared/ui/Icon"
import List from "shared/assets/icons/LIST.svg"
import Detail from "shared/assets/icons/DETAIL.svg"
import { IconType } from "shared/ui/Icon/ui/Icon"
import { AppButton, ButtonTheme } from "shared/ui/AppButton"

export interface ArticlePageViewSelectorProps {
	className?: string
	changeView: (view: ArticleView) => void
	view: ArticleView
}

export const ArticlePageViewSelector = memo((props: ArticlePageViewSelectorProps) => {
	const { className, changeView, view } = props
	return (
		<div className={classNames(cls.ArticlePageViewSelector, {}, [className])}>
			<AppButton
				onClick={() => changeView(ArticleView.LIST)}
				theme={ButtonTheme.CLEAR}
			>
				<Icon
					Svg={List}
					className={classNames(cls.icon, { [cls.notSelected]: view === ArticleView.LIST }, [])}
					type={IconType.STROKE}
				/>
			</AppButton>
			<AppButton
				onClick={() => changeView(ArticleView.DETAIL)}
				theme={ButtonTheme.CLEAR}
			>
				<Icon
					Svg={Detail}
					className={classNames(cls.icon, { [cls.notSelected]: view === ArticleView.DETAIL }, [])}
					type={IconType.STROKE}
				/>
			</AppButton>
		</div>
	)
})
