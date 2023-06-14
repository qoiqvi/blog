import type { AppDispatch } from "App/provider/StoreProvider"
import { useDispatch } from "react-redux"

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
