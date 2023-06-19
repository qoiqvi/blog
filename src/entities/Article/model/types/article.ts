export interface Article {
	id?: string
	title: string
	subtitle: string
	img: string
	views: number
	createdAt: string
	type: ArticleType[]
	blocks: ArticleBlock[]
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
}

export interface ArticleTextBlock extends ArticleBlockBase {
	title: string
	paragraphs: string[]
}

export interface ArticleImageBlock extends ArticleBlockBase {
	src: string
	title: string
}
