import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./store.ts";
import {ActionCreator, ActionCreatorWithPayload} from "@reduxjs/toolkit";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: (action:ActionCreator<RootState>) => AppDispatch = useDispatch