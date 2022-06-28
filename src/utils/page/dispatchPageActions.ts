import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { PageBaseType } from "~/utils/page/page";

const dispatchPageActions = (
  dispatch: Dispatch<AnyAction>,
  pageList: PageBaseType[]
) => {
  pageList.forEach((page) => {
    page.loadActions.forEach((action: AnyAction) => {
      dispatch(action);
    });
  });
};

export default dispatchPageActions;
