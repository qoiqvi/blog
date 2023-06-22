import { createAsyncThunk } from "@reduxjs/toolkit"
import { type ThunkConfig } from "App/provider/StoreProvider"
import { Comment } from "entities/Comment"

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
	"articleDetails/fetchCommentsByArticleId",
	async (articleId, { extra, rejectWithValue }) => {
		try {
			if (!articleId) {
				return rejectWithValue("No article ID")
			}
			const response = await extra.api.get<Comment[]>("/comments", {
				params: {
					articleId,
					_expand: "user",
				},
			})

			if (!response.data) {
				throw new Error()
			}

			return response.data
		} catch (error) {
			return rejectWithValue("error")
		}
	}
)
