import { ReactNode } from "react";
import { default as BoxMaterialUI } from "@mui/material/Box";

interface IBox {
  className?: string;
  mobile: boolean;
  children: ReactNode;
}

function Box({ className, mobile = true, children }: IBox) {
  return (
    <>
      {mobile ? (
        <BoxMaterialUI
          className={className}
          sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}
        >
          {children}
        </BoxMaterialUI>
      ) : (
        <BoxMaterialUI
          className={className}
          sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
        >
          {children}
        </BoxMaterialUI>
      )}
    </>
  );
}
export default Box;
