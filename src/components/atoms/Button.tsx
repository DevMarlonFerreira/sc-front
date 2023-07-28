import { ReactNode } from "react";
import { default as ButtonMaterialUI } from "@mui/material/Button";

interface IButton {
    callback: () => void;
    children: ReactNode;
  }

function Button({children, callback}: IButton) {
  return (
    <ButtonMaterialUI
      onClick={callback}
      sx={{ my: 2, color: "white", display: "block" }}
    >
      {children}
    </ButtonMaterialUI>
  );
}
export default Button;
