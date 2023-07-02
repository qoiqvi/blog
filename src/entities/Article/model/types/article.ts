import { User } from "entities/User"

export interface Article {
	id: string
	title: string
	subtitle: string
	user: User
	img: string
	views: number
	createdAt: string
	type: ArticleType[]
	blocks: ArticleBlock[]
}

export enum ArticleSortField {
	VIEWS = "views",
	TITLE = "title",
	CREATED = "createdAt",
}

export enum ArticleType {
	IT = "IT",
	SCIENCE = "Science",
	ECONIMIC = "Economic",
}

export interface ArticleBlockBase {
	id: string
	type: ArticleBlockType
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock

export enum ArticleBlockType {
	CODE = "CODE",
	IMAGE = "IMAGE",
	TEXT = "TEXT",
}

export interface ArticleCodeBlock extends ArticleBlockBase {
	code: string
	type: ArticleBlockType.CODE
}

export interface ArticleTextBlock extends ArticleBlockBase {
	title?: string
	paragraphs: string[]
	type: ArticleBlockType.TEXT
}

export interface ArticleImageBlock extends ArticleBlockBase {
	src: string
	title: string
	type: ArticleBlockType.IMAGE
}

export enum ArticleView {
	LIST = "LIST",
	DETAIL = "DETAIL",
}
