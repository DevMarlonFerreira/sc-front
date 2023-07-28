import { ReactNode } from "react";
import { default as MenuMaterialUI } from "@mui/material/Menu";

interface IMenu {
    anchorElNav: HTMLElement|null;
    callback: () => void;
    children: ReactNode;
  }

function Menu({anchorElNav, children, callback}: IMenu) {
  return (
    <MenuMaterialUI
    id="menu-appbar"
    anchorEl={anchorElNav}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    keepMounted
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    open={Boolean(anchorElNav)}
    onClose={callback}
    sx={{
      display: { xs: "block", md: "none" },
    }}
    >
      {children}
    </MenuMaterialUI>
  );
}
export default Menu;
