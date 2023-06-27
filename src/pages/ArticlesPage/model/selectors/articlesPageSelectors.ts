import { StateSchema } from "App/provider/StoreProvider"
import { ArticleView } from "entities/Article"

export const getArticlesListIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false

export const getArticlesListError = (state: StateSchema) => state.articlesPage?.error || ""

export const getArticlesListView = (state: StateSchema) => state.articlesPage?.view || ArticleView.LIST

export const getArticlesListLimit = (state: StateSchema) => state.articlesPage?.limit || 4

export const getArticlesListPage = (state: StateSchema) => state.articlesPage?.page || 1

export const getArticlesListHasMore = (state: StateSchema) => state.articlesPage?.hasMore || true

export const getArticlesListInited = (state: StateSchema) => state.articlesPage?._inited || false
