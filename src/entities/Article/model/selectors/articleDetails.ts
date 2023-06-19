import { type StateSchema } from "App/provider/StoreProvider"

export const getArticleDetailsPage = (state: StateSchema) => state.articleDetails?.data
