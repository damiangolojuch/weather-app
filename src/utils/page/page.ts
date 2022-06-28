import { ComponentType } from "react";
import { AnyAction } from "@reduxjs/toolkit";

export interface PageBaseType {
  pageName: string;
  path: string;
  component: ComponentType;
  loadActions: AnyAction[];
}
