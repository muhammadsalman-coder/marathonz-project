import React, { useState } from "react";
import {
  styled,
  createTheme,
  alpha,
  ThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
// import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";

// import Paper from "@mui/material/Paper";
// import Link from "@mui/material/Link";
import InputBase from "@mui/material/InputBase";
// icons
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

//customs
// import { mainListItems, mainListItems2, secondaryListItems } from "./listItems";

// list
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import StarBorder from "@mui/icons-material/StarBorder";
// import Collapse from "@mui/material/Collapse";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import LayersIcon from "@mui/icons-material/Layers";
// import FingerprintIcon from "@mui/icons-material/Fingerprint";
// import ColorizeIcon from "@mui/icons-material/Colorize";
// import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import MarketPlaceDrawer from "./MarketPlaceDrawer";
import MapDrawer from "./MapDrawer";
// import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useNavigate } from "react-router-dom";
// import Chart from "./Chart";
// import Deposits from "./Deposits";
// import Orders from "./Orders";
const mdTheme = createTheme({
  palette: {
    mycolor: {
      main: "#607d8b",
    },
    secondary: {
      main: "#14171c",
      light: "#1b2026",
      contrastText: "#a0a4a7",
    },
    background: {
      paper: "#1b2026",
      default: "#1b2026",
    },
    text: {
      primary: "#a0a4a7",
    },
  },
});
// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: 85,
    [theme.breakpoints.down("sm")]: {
      width: 75,
    },
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

function Layout({ children }) {
  const [openMarketPlaceDrawer, setOpenMarketPlaceDrawer] = useState(false);
  const [openMapDrawer, setOpenMapDrawer] = useState(false);
  const navigate = useNavigate();
  const toggleDrawer = (whichDrawer) => {
    if (whichDrawer === "market") {
      setOpenMapDrawer(false);
      setTimeout(() => {
        setOpenMarketPlaceDrawer(!openMarketPlaceDrawer);
      }, 200);
    } else if (whichDrawer === "map") {
      setOpenMarketPlaceDrawer(false);
      setTimeout(() => {
        setOpenMapDrawer(!openMapDrawer);
      }, 200);
    }
    if (whichDrawer === "all") {
      setOpenMarketPlaceDrawer(false);
      setOpenMapDrawer(false);
    }
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={false} color={"secondary"}>
          <Toolbar
            sx={{
              pr: { md: "24px", sm: "10px", xs: "1px" }, // keep right padding when drawer closed
            }}
          >
            {/* <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(false && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton> */}
            {/* <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
    */}
            <Box
              noWrap
              sx={{ flexGrow: 1, marginLeft: { md: "40px", sm: "0", xs: "0" } }}
            >
              <IconButton color="inherit">
                <Box sx={{ height: { md: "35px", sm: "30px", xs: "20px" } }}>
                  <img src={"/logo.png"} style={{ height: "100%" }} alt="img" />
                </Box>
              </IconButton>
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 3 }} />
            {/* </Typography> */}

            {/* dropdown meny start for sm screen  start */}
            <Box
              sx={{
                display: { xs: "inline-block", sm: "inline-block", md: "none" },
                // marginRight: "30px",
              }}
            >
              <Button
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MenuIcon />
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose} sx={{ textAlign: "center" }}>
                  <ShoppingCartIcon />
                  Market
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Button
                    variant="contained"
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                      background: "primary",
                      borderRadius: "25px",
                      "&:hover": {
                        background: "primary",
                      },
                    }}
                  >
                    Connect Wallet
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
            {/* dropdown meny start for sm screen  end */}
            <Box
              spacing={2}
              direction="row"
              sx={{
                display: { xs: "none", sm: "none", md: "inline-block" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  background: "primary",
                  borderRadius: "25px",
                  "&:hover": {
                    background: "primary",
                  },
                }}
              >
                Connect Wallet
              </Button>
              <IconButton color="inherit">
                <ShoppingCartIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={true}
          sx={{
            "& .css-ux9tp3-MuiPaper-root-MuiDrawer-paper": {
              backgroundColor: "#14171c",
              // color: "#a0a4a7",
            },
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: [1],
            }}
          >
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav" color={"secondary"}>
            <ListItemButton
              onClick={() => {
                toggleDrawer("all");
                navigate("/");
              }}
            >
              <ListItemIcon
                sx={{
                  color: "#a0a4a7",
                  padding: "15px 0",
                  dispaly: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <DashboardIcon />
                <ListItemText primary="Home" />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton onClick={() => toggleDrawer("market")}>
              <ListItemIcon
                sx={{
                  color: "#a0a4a7",
                  padding: "15px 0",
                  dispaly: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ShoppingCartIcon />
                <ListItemText primary="Market" />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                toggleDrawer("all");
                navigate("/create");
              }}
            >
              <ListItemIcon
                sx={{
                  color: "#a0a4a7",
                  padding: "15px 0",
                  dispaly: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <ConstructionRoundedIcon />
                <ListItemText primary="Create" />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton onClick={() => toggleDrawer("map")}>
              <ListItemIcon
                sx={{
                  color: "#a0a4a7",
                  padding: "15px 0",
                  dispaly: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <LocationOnRoundedIcon />
                <ListItemText primary="Map" />
              </ListItemIcon>
            </ListItemButton>
            <Divider sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
          </List>
        </Drawer>

        <MarketPlaceDrawer
          open={openMarketPlaceDrawer}
          setOpenMarketPlaceDrawer={setOpenMarketPlaceDrawer}
        />
        <MapDrawer open={openMapDrawer} setOpenMapDrawer={setOpenMapDrawer} />
        <Box
          component="main"
          sx={{
            // backgroundColor: (theme) =>
            //   theme.palette.mode === "light"
            //     ? theme.palette.grey[100]
            //     : theme.palette.grey[900],

            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container
            maxWidth="xl"
            sx={{
              my: 4,
              color: (theme) => theme.palette.secondary.contrastText,
            }}
          >
            <Typography variant="h2">shan</Typography>
            {children}
          </Container>
          {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {
                //    Chart
              }
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  {
                    //   <Chart />
                  }
                </Paper>
              </Grid>
              {
                //   Recent Deposits
              }
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  {
                    //   <Deposits />
                  }
                </Paper>
              </Grid>
              {
                //    Recent Orders
              }
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  {
                    // <Orders />
                  }
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
