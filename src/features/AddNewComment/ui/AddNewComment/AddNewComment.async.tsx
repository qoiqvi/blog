import { lazy } from "react"

export const AddNewCommentAsync = lazy(async () => await import("./AddNewComment"))
