import { ReactNode } from "react";
import { default as BoxMaterialUI } from "@mui/material/Box";

interface IBox {
  mobile: boolean;
  children: ReactNode;
}

function Box({ mobile=true, children }: IBox) {
  return (
    <>
    {mobile ?
        <BoxMaterialUI sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
        {children}
      </BoxMaterialUI>
      :
      <BoxMaterialUI sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
      {children}
    </BoxMaterialUI>
    }
    </>
  );
}
export default Box;