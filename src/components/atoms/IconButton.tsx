import { ReactNode } from "react";
import { default as IconButtonMaterialUI } from "@mui/material/IconButton";

interface IIconButton {
  className?: string;
  callback: (event: React.MouseEvent<HTMLElement>) => void;
  children: ReactNode;
}

function IconButton({ className, children, callback }: IIconButton) {
  return (
    <IconButtonMaterialUI
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={callback}
      color="inherit"
      className={className}
    >
      {children}
    </IconButtonMaterialUI>
  );
}
export default IconButton;
