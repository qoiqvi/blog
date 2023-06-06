import { classNames } from "shared/lib/classNames/className"
import cls from "./PageLoader.module.scss"
import { Loader } from "shared/Loader/ui/Loader"

export interface PageLoaderProps {
	className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
	return (
		<div className={classNames(cls.PageLoader, {}, [className])}>
			<Loader />
		</div>
	)
}
