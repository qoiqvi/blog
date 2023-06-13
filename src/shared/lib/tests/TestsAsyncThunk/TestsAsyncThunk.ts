import type { AsyncThunkAction, Dispatch } from "@reduxjs/toolkit"
import type { StateSchema } from "App/provider/StoreProvider"

type ActionCreatorType<Return, Arg, RejectedValue> = (
	arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

export class TestsAsyncThunk<Return, Arg, RejectedValue> {
	dispatch: Dispatch<any>
	getState: () => StateSchema
	actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

	constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
		this.actionCreator = actionCreator
		this.dispatch = jest.fn()
		this.getState = jest.fn()
	}

	async callThunk(arg: Arg) {
		const action = this.actionCreator(arg)
		const result = await action(this.dispatch, this.getState, undefined)
		return result
	}
}
