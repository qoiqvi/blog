import { StateSchema } from "App/provider/StoreProvider"
import { ArticleView } from "entities/Article"

export const getArticlesListIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false

export const getArticlesListError = (state: StateSchema) => state.articlesPage?.error

export const getArticlesListView = (state: StateSchema) => state.articlesPage?.view || ArticleView.LIST
