import { classNames } from "shared/lib/classNames/className"
import cls from "./Icon.module.scss"

export interface IconProps {
	className?: string
	Svg: React.VFC<React.SVGProps<SVGSVGElement>>
	type?: IconType
}

export enum IconType {
	STROKE = "stroke",
	FILL = "fill",
}

export const Icon = (props: IconProps) => {
	const { className, Svg, type = IconType.FILL } = props
	const mods = {
		[cls.fill]: type === IconType.FILL,
		[cls.stroke]: type === IconType.STROKE,
	}
	return <Svg className={classNames(cls.Icon, mods, [className])} />
}
