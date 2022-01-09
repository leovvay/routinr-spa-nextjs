import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { REDIRECT_SESSION_NAME } from '@constants';

interface RedirectTargetState {
  value: string | null | undefined;
}

const initialState = {
  value: global.localStorage?.getItem(REDIRECT_SESSION_NAME),
} as RedirectTargetState;

const redirectTargetSlice = createSlice({
  name: 'redirectTarget',
  initialState,
  reducers: {
    setRedirectTarget(state, action: PayloadAction<string>) {
      global.localStorage?.setItem(REDIRECT_SESSION_NAME, action.payload);
      state.value = action.payload;
    },
    clearRedirectTarget(state) {
      global.localStorage?.removeItem(REDIRECT_SESSION_NAME);
      state.value = null;
    },
  },
});

export const { setRedirectTarget, clearRedirectTarget } =
  redirectTargetSlice.actions;
export default redirectTargetSlice;
