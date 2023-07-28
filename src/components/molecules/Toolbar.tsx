import { ReactNode } from "react";
import { default as ToolbarMaterialUI } from "@mui/material/Toolbar";

interface IToolbar {
  children: ReactNode;
}

function Toolbar({ children }: IToolbar) {
  return <ToolbarMaterialUI disableGutters>{children}</ToolbarMaterialUI>;
}

export default Toolbar;
