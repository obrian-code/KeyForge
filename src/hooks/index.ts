import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState, Dispatch } from '../redux';

export const useCustomDispatch: () => Dispatch = useDispatch;
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
