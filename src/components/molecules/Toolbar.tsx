import { ReactNode } from "react";
import { default as ToolbarMaterialUI } from "@mui/material/Toolbar";

interface IToolbar {
  className?: string;
  children: ReactNode;
}

function Toolbar({ className, children }: IToolbar) {
  return <ToolbarMaterialUI className={className} disableGutters>{children}</ToolbarMaterialUI>;
}

export default Toolbar;
