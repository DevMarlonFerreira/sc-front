import { ReactNode } from "react";
import { default as TypographyMaterialUI } from "@mui/material/Typography";

interface ITypography {
  children: ReactNode;
}

function Typography({ children }: ITypography) {
  return (
    <TypographyMaterialUI textAlign="center">{children}</TypographyMaterialUI>
  );
}
export default Typography;
