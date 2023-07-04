import { classNames } from "shared/lib/classNames/className"
import cls from "./AddNewComment.module.scss"
import { useTranslation } from "react-i18next"
import { Input } from "shared/ui/Input"
import { AppButton, ButtonTheme } from "shared/ui/AppButton"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader"
import { addNewCommentActions, addNewCommentReducer } from "../../model/slice/addNewCommentSlice"
import { useSelector } from "react-redux"
import { getAddNewCommentError, getAddNewCommentText } from "../../model/selectors/addNewComment"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { memo, useCallback } from "react"
import { Text, TextTheme } from "shared/ui/Text"

export interface AddNewCommentProps {
	className?: string
	onSendComment: (text: string) => void
}

const reducers: ReducersList = {
	addNewComment: addNewCommentReducer,
}

const AddNewComment = memo((props: AddNewCommentProps) => {
	const { className, onSendComment } = props
	const { t } = useTranslation()
	const text = useSelector(getAddNewCommentText)
	const error = useSelector(getAddNewCommentError)
	const dispatch = useAppDispatch()

	const onCommentTextChange = useCallback(
		(value: string) => {
			dispatch(addNewCommentActions.setText(value))
		},
		[dispatch]
	)

	const onSendHandler = useCallback(() => {
		onSendComment?.(text || "")
		dispatch(addNewCommentActions.setText(""))
	}, [dispatch, onSendComment, text])

	if (error) {
		return (
			<Text
				theme={TextTheme.ERROR}
				text={t("Error")}
			/>
		)
	}

	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames(cls.AddNewComment, {}, [className])}>
				<Input
					className={cls.input}
					value={text}
					autoFocus={true}
					onChange={onCommentTextChange}
					placeholder={t("Comment")}
				/>
				<AppButton
					theme={ButtonTheme.OUTLINED}
					onClick={onSendHandler}
				>
					{t("Add comment")}
				</AppButton>
			</div>
		</DynamicModuleLoader>
	)
})

export default AddNewComment
