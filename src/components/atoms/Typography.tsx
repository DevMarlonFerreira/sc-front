import { ReactNode } from "react";
import { default as TypographyMaterialUI } from "@mui/material/Typography";

interface ITypography {
  className?: string;
  children: ReactNode;
}

function Typography({ className, children }: ITypography) {
  return (
    <TypographyMaterialUI className={className} textAlign="center">
      {children}
    </TypographyMaterialUI>
  );
}
export default Typography;
