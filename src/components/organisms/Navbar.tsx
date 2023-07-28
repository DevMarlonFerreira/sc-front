import { useState } from "react";

import Menu from "components/organisms/Menu";

import Box from "components/molecules/Box";
import Toolbar from "components/molecules/Toolbar";
import Container from "components/molecules/Container";
import AppBar from "components/molecules/AppBar";
import MenuItem from "components/molecules/MenuItem";

import IconButton from "components/atoms/IconButton";
import Button from "components/atoms/Button";
import Typography from "components/atoms/Typography";
import MenuIcon from "components/atoms/MenuIcon";

// import styles from "assets/navbar.module.css";

const pages = ["2020", "2021", "2022", "2023"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Box mobile={true}>
            <IconButton callback={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu anchorElNav={anchorElNav} callback={handleCloseNavMenu}>
              {pages.map((page) => (
                <MenuItem key={page} callback={handleCloseNavMenu}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box mobile={false}>
            <Button callback={handleCloseNavMenu}>Filtro</Button>
            {pages.map((page) => (
              <Button key={page} callback={handleCloseNavMenu}>
                {page}
              </Button>
            ))}
            <Button callback={handleCloseNavMenu}>Buscar</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;