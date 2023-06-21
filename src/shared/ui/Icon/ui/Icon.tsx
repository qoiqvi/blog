import { classNames } from "shared/lib/classNames/className"
import cls from "./Icon.module.scss"

export interface IconProps {
	className?: string
	Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = (props: IconProps) => {
	const { className, Svg } = props
	return <Svg className={classNames(cls.Icon, {}, [className])} />
}
