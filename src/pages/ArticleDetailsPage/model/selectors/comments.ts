import { StateSchema } from "App/provider/StoreProvider"

export const getArticleDetailsPageCommentErorr = (state: StateSchema) => state.articleDetailsComments?.error

export const getArticleDetailsPageCommentIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading
