import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
interface LayoutState {
  isTopPage: boolean;
}

// Define the initial state using that type
const initialLayoutState: LayoutState = {
  isTopPage: true,
};

export const layoutSlice = createSlice({
  name: "layout",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialLayoutState,
  reducers: {
    setTopPageState: (
      state: LayoutState,
      action: PayloadAction<LayoutState>
    ) => {
      state.isTopPage = action.payload.isTopPage;
    },
    setIsTopPage(state: LayoutState, action: PayloadAction<boolean>) {
      state.isTopPage = action.payload;
    },
  },
});

export const { setIsTopPage } = layoutSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.layout.isTopPage;

export const LayoutSliceActions = layoutSlice.actions;

export default layoutSlice.reducer;
