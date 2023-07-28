import { ReactNode } from "react";
import { default as MenuItemMaterialUI } from "@mui/material/MenuItem";

interface IMenuItem {
  callback: () => void;
  children: ReactNode;
}

function MenuItem({ children, callback }: IMenuItem) {
  return <MenuItemMaterialUI>{children}</MenuItemMaterialUI>;
}
export default MenuItem;
