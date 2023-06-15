/* eslint-disable react/display-name */
import { StoreProvider } from "App/provider/StoreProvider"
import { type StateSchema } from "App/provider/StoreProvider/config/stateSchema"

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: any) =>
	(
		<StoreProvider initialState={state}>
			<StoryComponent />
		</StoreProvider>
	)
