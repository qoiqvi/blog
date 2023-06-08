/* eslint-disable react/display-name */
import type { Theme } from "App/provider/ThemeProvider"

export const ThemeDecorator = (theme: Theme) => (StoryComponent: any) =>
	(
		<div className={`app ${theme}`}>
			<StoryComponent />
		</div>
	)
