import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "App/provider/StoreProvider"
import { Comment } from "entities/Comment"
import { getUserAuthData } from "entities/User"
import { getArticleDetailsData } from "entities/Article"
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId"

export const sendArticleComment = createAsyncThunk<Comment, string, ThunkConfig<string>>(
	"arcticleDetail/sendArticleComment",
	async (text, { extra, dispatch, rejectWithValue, getState }) => {
		try {
			const userData = getUserAuthData(getState())
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

			dispatch(fetchCommentsByArticleId(article.id))

			return response.data
		} catch (error) {
			return rejectWithValue("error")
		}
	}
)
