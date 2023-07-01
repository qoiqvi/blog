import { classNames } from "shared/lib/classNames/className"
import cls from "./Page.module.scss"
import { MutableRefObject, ReactNode, UIEvent, memo, useRef } from "react"
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { SaveScrollSliceActions } from "../SaveScroll/model/slice/SaveScrollSlice"
import { useLocation } from "react-router-dom"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import { useSelector } from "react-redux"
import { getScroll } from "../SaveScroll/model/selectors/getScroll"
import { StateSchema } from "App/provider/StoreProvider"
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle"

export interface PageProps {
	className?: string
	children: ReactNode
	onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
	const { className, children, onScrollEnd } = props
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
	const dispatch = useAppDispatch()
	const { pathname } = useLocation()
	const scrollPosition = useSelector((state: StateSchema) => getScroll(state, pathname))

	useInitialEffect(() => {
		wrapperRef.current.scrollTop = scrollPosition
	})

	useInfiniteScroll({
		triggerRef,
		wrapperRef,
		callback: onScrollEnd,
	})

	const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
		// console.log("SCROLL")
		dispatch(
			SaveScrollSliceActions.setScrollPosition({
				path: pathname,
				position: e.currentTarget.scrollTop,
			})
		)
	}, 500)

	return (
		<section
			ref={wrapperRef}
			className={classNames(cls.PageWrapper, {}, [className])}
			onScroll={onScroll}
		>
			{children}
			{onScrollEnd ? (
				<div
					ref={triggerRef}
					className={cls.trigger}
				/>
			) : null}
		</section>
	)
})
