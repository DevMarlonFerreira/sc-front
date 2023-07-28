import { ReactNode } from "react";
import { default as ContainerMaterialUI } from "@mui/material/Container";

interface IContainer {
  children: ReactNode;
}

function Container({ children }: IContainer) {
  return <ContainerMaterialUI maxWidth="xl">{children}</ContainerMaterialUI>;
}

export default Container;
