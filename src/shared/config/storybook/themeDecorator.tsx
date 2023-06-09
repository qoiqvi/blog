/* eslint-disable react/display-name */
import { ThemeProvider, type Theme } from "App/provider/ThemeProvider"

export const ThemeDecorator = (theme: Theme) => (StoryComponent: any) =>
	(
		<ThemeProvider initialTheme={theme}>
			<div className={`app ${theme}`}>
				<StoryComponent />
			</div>
		</ThemeProvider>
	)
