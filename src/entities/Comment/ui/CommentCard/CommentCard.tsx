import { classNames } from "shared/lib/classNames/className"
import cls from "./CommentCard.module.scss"
import { Comment } from "../../model/types/comment"
import { Avatar } from "shared/ui/Avatar"
import { Text } from "shared/ui/Text"
import { Skeleton } from "shared/ui/Skeleton"
import { AppLink } from "shared/ui/AppLink"
import { RoutePath } from "shared/config/routeConfig/routeConfig"

export interface CommentCardProps {
	className?: string
	comment?: Comment
	isLoading?: boolean
}

export const CommentCard = (props: CommentCardProps) => {
	const { className, comment, isLoading } = props

	if (isLoading) {
		return (
			<div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
				<div className={cls.header}>
					<Skeleton
						width={30}
						height={30}
						border="50%"
					/>
					<Skeleton
						height={16}
						width={100}
						className={cls.username}
					/>
				</div>
				<Skeleton
					width={"100%"}
					height={"150px"}
				/>
			</div>
		)
	}
	return (
		<div className={classNames(cls.CommentCard, {}, [className])}>
			<AppLink
				to={`${RoutePath.profile}${comment?.user.id}`}
				className={cls.header}
			>
				{comment?.user.avatar && (
					<Avatar
						size={30}
						src={comment?.user.avatar}
					/>
				)}
				<Text
					className={cls.username}
					title={comment?.user.username}
				/>
			</AppLink>
			<div>
				<Text text={comment?.text} />
			</div>
		</div>
	)
}
