import { useDispatch, useSelector } from "react-redux"
import { AppButton } from "shared/ui/AppButton"
import { counterActions } from "../model/slice/CounterSlice"
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue"

export const Counter = () => {
	const dispatch = useDispatch()
	const increment = () => {
		dispatch(counterActions.increment())
	}
	const decrement = () => {
		dispatch(counterActions.decrement())
	}
	const value = useSelector(getCounterValue)
	return (
		<div>
			<h1 data-testid="value">{value}</h1>
			<AppButton
				data-testid="inc-btn"
				onClick={increment}
			>
				increse
			</AppButton>
			<AppButton
				data-testid="dec-btn"
				onClick={decrement}
			>
				decrease
			</AppButton>
		</div>
	)
}
