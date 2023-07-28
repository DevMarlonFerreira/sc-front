import { default as MenuIconMaterialUI } from "@mui/icons-material/Menu";

interface IMenu {
  className?: string;
}

function MenuIcon({className}: IMenu) {
  return <MenuIconMaterialUI className={className} />;
}
export default MenuIcon;
