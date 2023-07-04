import { StateSchema } from "App/provider/StoreProvider"

export const getArticleDetailsPageRecomendationsErorr = (state: StateSchema) =>
	state.articleDetailsPage?.recommendations.error

export const getArticleDetailsPageRecomendationsIsLoading = (state: StateSchema) =>
	state.articleDetailsPage?.recommendations.isLoading || false
