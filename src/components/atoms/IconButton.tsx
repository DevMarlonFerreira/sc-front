import { ReactNode } from "react";
import { default as IconButtonMaterialUI } from "@mui/material/IconButton";

interface IIconButton {
  callback: (event: React.MouseEvent<HTMLElement>) => void;
  children: ReactNode;
}

function IconButton({ children, callback }: IIconButton) {
  return (
    <IconButtonMaterialUI
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={callback}
      color="inherit"
    >
      {children}
    </IconButtonMaterialUI>
  );
}
export default IconButton;
