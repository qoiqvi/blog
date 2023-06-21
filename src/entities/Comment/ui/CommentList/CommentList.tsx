import { classNames } from "shared/lib/classNames/className"
import cls from "./CommentList.module.scss"
import { useTranslation } from "react-i18next"
import { Comment } from "../../model/types/comment"
import { Text } from "shared/ui/Text"
import { CommentCard } from "../CommentCard/CommentCard"

export interface CommentListProps {
	className?: string
	comments?: Comment[]
	isLoading?: boolean
}

export const CommentList = (props: CommentListProps) => {
	const { className, comments, isLoading } = props
	const { t } = useTranslation()
	return (
		<div className={classNames(cls.CommentList, {}, [className])}>
			{comments?.length ? (
				comments.map((comment, index) => (
					<CommentCard
						// isLoading={isLoading}
						className={cls.comment}
						key={index}
						comment={comment}
					/>
				))
			) : (
				<Text title={t("There are no comments yet")} />
			)}
		</div>
	)
}
