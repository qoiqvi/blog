import { ArticleDetailsCommentsSchema } from "./articleDetailsCommentsSchema"
import { ArticleDetailsRecomendationsSchema } from "./articleDetailsRecomendationsSchema"

export interface ArticleDetailsPageSchema {
	comments: ArticleDetailsCommentsSchema
	recommendations: ArticleDetailsRecomendationsSchema
}
