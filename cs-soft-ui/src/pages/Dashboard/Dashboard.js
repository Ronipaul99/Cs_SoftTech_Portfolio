import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
//
import Dashboard_Home from "./dashboard_components";
import Badge from "@material-ui/core/Badge";
import Project from "../Projects";
import Docs from "../Docket";
import Task from "../Task";
import ShareInfo from "../InfoShare";
import CreateProfile from "../CreateProfile";
import Notification from "../Notification";
import Account from "../Account";
import Settings from "../Settings";
//
import { Popover } from "@material-ui/core";
// import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookIcon from "@material-ui/icons/Book";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import InfoIcon from "@material-ui/icons/Info";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { height } from "@mui/system";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

const popoverStyle = { cursor: "pointer" };

export default function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [page, setpage] = useState("Dashboard");
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notificationCount, setNotificationCount] = useState(3);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openPop = Boolean(anchorEl);
  const id = openPop ? "simple-popover" : undefined;

  const updateNotificationCount = () =>
    notificationCount > 0
      ? setNotificationCount(notificationCount - 1)
      : setNotificationCount(notificationCount);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Cs-Softech
          </Typography>
          <Button
            aria-describedby={id}
            variant=""
            color="primary"
            onClick={handleClick}
            style={{
              fontSize: "30px",
              marginLeft: "80%",
              cursor: "pointer",
            }}
          >
            <IconButton
              // onClick={() => {
              //   notificationCount > 0
              //     ? setNotificationCount(notificationCount - 1)
              //     : setNotificationCount(notificationCount);
              // }}
              aria-label="show 3 new notifications"
              color="inherit"
            >
              <Badge badgeContent={notificationCount} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Button>
          <Popover
            id={id}
            open={openPop}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography
              style={popoverStyle}
              onClick={() => {
                setpage("Notification");
                handleClose();
                updateNotificationCount();
              }}
              className={classes.typography}
            >
              Advanced settings
            </Typography>
            <Typography
              style={popoverStyle}
              onClick={() => {
                setpage("Notification");
                handleClose();
                updateNotificationCount();
              }}
              className={classes.typography}
            >
              Advanced settings
            </Typography>
            <Typography
              style={popoverStyle}
              onClick={() => {
                setpage("Notification");
                handleClose();
                updateNotificationCount();
              }}
              className={classes.typography}
            >
              Advanced settings
            </Typography>
          </Popover>
        </Toolbar>
      </AppBar>

      {/* Drawer Element side pannel   */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>

        <Divider />
        <ListItem
          button
          onClick={() => {
            setpage("Dashboard");
          }}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={"Dashboard"} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setpage("Projects");
          }}
        >
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary={"Projects"} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setpage("Docs");
          }}
        >
          <ListItemIcon>
            <FolderOpenIcon />
          </ListItemIcon>
          <ListItemText primary={"Docs"} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setpage("Task");
          }}
        >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary={"Task"} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setpage("ShareInfo");
          }}
        >
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary={"Share Info"} />
        </ListItem>
        <Divider />

        <ListItem
          button
          onClick={() => {
            setpage("NewProfile");
          }}
        >
          <ListItemIcon>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <ListItemText primary={"New Profile"} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setpage("Notification");
          }}
        >
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary={"Notification"} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setpage("Account");
          }}
        >
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary={"Account"} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setpage("Settings");
          }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={"Settings"} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setpage("Logout");
          }}
        >
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary={"Logout"} />
        </ListItem>
      </Drawer>

      {/* Main element inside the Dashboard */}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {page === "Dashboard" && <Dashboard_Home />}
        {page === "Projects" && <Project />}
        {page === "Docs" && <Docs />}
        {page === "Task" && <Task />}
        {page === "ShareInfo" && <ShareInfo />}
        {page === "NewProfile" && <CreateProfile />}
        {page === "Notification" && <Notification />}
        {page === "Account" && <Account />}
        {page === "Settings" && <Settings />}
      </main>
    </div>
  );
}
