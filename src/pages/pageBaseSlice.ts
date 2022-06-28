import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PageBaseType } from "~/utils/page/page";
import { Location, Params } from "react-router-dom";

export type ChangePageActionPayload = PayloadAction<{
  pageConfig: PageBaseType;
  location: Location;
  params: Params;
  isFirstRender: boolean;
}>;

export const pageBaseSlice = createSlice({
  name: "page",
  initialState: {
    currentPage: "",
  },
  reducers: {
    changePage: (state, action: ChangePageActionPayload) => {
      state.currentPage = action.payload.pageConfig.pageName;
    },
  },
});

export const { changePage } = pageBaseSlice.actions;

export default pageBaseSlice.reducer;
