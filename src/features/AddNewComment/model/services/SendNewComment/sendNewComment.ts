import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "App/provider/StoreProvider"
import { Comment } from "entities/Comment"
import { getUserAuthData } from "entities/User"
import { getAddNewCommentText } from "../../selectors/addNewComment"
import { getArticleDetailsData } from "entities/Article"
import { addNewCommentActions } from "../../slice/addNewCommentSlice"

export const sendNewComment = createAsyncThunk<Comment, void, ThunkConfig<string>>(
	"addNewComment/sendNewComment",
	async (_, { extra, dispatch, rejectWithValue, getState }) => {
		console.log(123)
		try {
			const userData = getUserAuthData(getState())
			const text = getAddNewCommentText(getState())
			const article = getArticleDetailsData(getState())

			if (!userData || !text || !article) {
				return rejectWithValue("no data")
			}

			const response = await extra.api.post<Comment>(`/comments`, {
				articleId: article?.id,
				userId: userData.id,
				text,
			})

			if (!response.data) {
				throw new Error()
			}

			dispatch(addNewCommentActions.setText(""))

			return response.data
		} catch (error) {
			return rejectWithValue("error")
		}
	}
)
