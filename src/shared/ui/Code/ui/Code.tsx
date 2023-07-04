import { classNames } from "shared/lib/classNames/className"
import cls from "./Code.module.scss"
import { memo, useCallback } from "react"
import { AppButton, ButtonTheme } from "shared/ui/AppButton"
import CopyIcon from "shared/assets/icons/CopyIcon.svg"

export interface CodeProps {
	className?: string
	text: string
}

export const Code = memo((props: CodeProps) => {
	const { className, text } = props

	const onCopy = useCallback(() => {
		navigator.clipboard.writeText(text)
	}, [text])
	return (
		<pre className={classNames(cls.Code, {}, [className])}>
			<AppButton
				onClick={onCopy}
				theme={ButtonTheme.CLEAR}
				className={cls.copyBtn}
			>
				<CopyIcon className={cls.copyIcon} />
			</AppButton>
			<code>{text}</code>
		</pre>
	)
})
