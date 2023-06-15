import { render } from "@testing-library/react"
import { StoreProvider } from "App/provider/StoreProvider"
import type { StateSchema } from "App/provider/StoreProvider/config/stateSchema"
import { type ReactNode } from "react"
import { I18nextProvider } from "react-i18next"
import { MemoryRouter } from "react-router-dom"
import i18n from "shared/config/i18next/i18ForTests"

export interface ComponentRenderOptions {
	route?: string
	initialState?: DeepPartial<StateSchema>
}

export function ComponentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
	const { route = {}, initialState } = options
	return render(
		<MemoryRouter initialEntries={[route]}>
			<StoreProvider initialState={initialState}>
				<I18nextProvider i18n={i18n}>{component}</I18nextProvider>
			</StoreProvider>
		</MemoryRouter>
	)
}
