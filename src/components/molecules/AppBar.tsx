import { ReactNode } from "react";
import { default as AppBarMaterialUI } from "@mui/material/AppBar";

interface IAppBar {
  children: ReactNode;
}

function AppBar({ children }: IAppBar) {
  return <AppBarMaterialUI position="static">{children}</AppBarMaterialUI>;
}

export default AppBar;
