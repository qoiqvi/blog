import { StateSchema } from "App/provider/StoreProvider"
import { ArticleSortField, ArticleView } from "entities/Article"
import { ArticleType } from "entities/Article/model/types/article"

export const getArticlesListIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false

export const getArticlesListError = (state: StateSchema) => state.articlesPage?.error || ""

export const getArticlesListView = (state: StateSchema) => state.articlesPage?.view || ArticleView.LIST

export const getArticlesListLimit = (state: StateSchema) => state.articlesPage?.limit || 4

export const getArticlesListPage = (state: StateSchema) => state.articlesPage?.page || 1

export const getArticlesListHasMore = (state: StateSchema) => state.articlesPage?.hasMore

export const getArticlesListInited = (state: StateSchema) => state.articlesPage?._inited

export const getArticlesListOrder = (state: StateSchema) => state.articlesPage?.order ?? "desc"

export const getArticlesListSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticleSortField.CREATED

export const getArticlesListSearch = (state: StateSchema) => state.articlesPage?.search ?? ""

export const getArticlesListType = (state: StateSchema) => state.articlesPage?.type ?? ArticleType.ALL
