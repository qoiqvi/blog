import { classNames } from "shared/lib/classNames/className"
import cls from "./Avatar.module.scss"
import { type CSSProperties, useMemo } from "react"

export interface AvatarProps {
	className?: string
	src: string | undefined
	size?: number
	alt?: string
}

export const Avatar = (props: AvatarProps) => {
	const { className, src, size, alt } = props
	const styles = useMemo<CSSProperties>(() => {
		return {
			height: size || 100,
			width: size || 100,
		}
	}, [size])
	return (
		<img
			src={src}
			alt={alt}
			style={styles}
			className={classNames(cls.Avatar, {}, [className])}
		/>
	)
}
