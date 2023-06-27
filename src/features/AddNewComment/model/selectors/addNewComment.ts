import { StateSchema } from "App/provider/StoreProvider"

export const getAddNewCommentText = (state: StateSchema) => state.addNewComment?.text ?? ""

export const getAddNewCommentError = (state: StateSchema) => state.addNewComment?.error

export const getAddNewCommentIsLoading = (state: StateSchema) => state.addNewComment?.isLoading || false
