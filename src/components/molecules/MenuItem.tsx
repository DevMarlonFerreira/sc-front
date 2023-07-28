import { ReactNode } from "react";
import { default as MenuItemMaterialUI } from "@mui/material/MenuItem";

interface IMenuItem {
  className?: string;
  callback: () => void;
  children: ReactNode;
}

function MenuItem({ className, children, callback }: IMenuItem) {
  return <MenuItemMaterialUI onClick={callback} className={className}>{children}</MenuItemMaterialUI>;
}
export default MenuItem;
