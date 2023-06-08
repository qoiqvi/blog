import { type FC } from "react"
import "./Loader.scss"
import { classNames } from "shared/lib/classNames/className"

interface LoaderProps {
	classname?: string
}

export const Loader: FC<LoaderProps> = ({ classname }) => {
	return (
		<div className={classNames("loadingio-spinner-ripple-5pjk16lgzx", {}, [classname])}>
			<div className="ldio-w1erx76vmd">
				<div></div>
				<div></div>
			</div>
		</div>
	)
}
// className="loadingio-spinner-ripple-5pjk16lgzx"
