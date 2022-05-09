import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Message, Style } from "@material-ui/icons";
import { Tooltip } from "@mui/material";
import Stack from "@mui/material/Stack";
import { padding, style } from "@mui/system";
import Task from "../Task";
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { data } from "../Notification/Accordion";

// for accordion
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
// import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function NotificationPage(props) {
  const [spin, setSpin] = useState(false);
  const [notification, setNotification] = useState(data);

  // useEffect(() => {
  //   setSpin(true);
  //   setTimeout(() => {
  //     setSpin(false);
  //   }, 500);
  // }, []);

  const markAllAsRead = () => {};
  return (
    <div>
      <Box
      // sx={{
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "space-between",
      // }}
      >
        <Typography variant="h5">Notifications</Typography>
        {/* <Button
          variant="outlined"
          color="primary"
          startIcon={<Icon>done_all</Icon>}
          onClick={markAllAsRead}
        >
          Mark all as read
        </Button> */}
      </Box>
      {spin ? (
        <div
          className="spinner"
          //style={{ height: "400px", alignContent: "center" }}
        >
          <CircularProgress
            style={{
              marginTop: "15%",
              marginLeft: "48%",
              alignItems: "center",
            }}
          />
        </div>
      ) : (
        <Box
        // sx={{
        //   marginLeft: "auto",
        //   marginRight: "auto",
        //   maxWidth: 640,
        // }}
        >
          <List

          // onClick={() => {
          //   alert("detected");
          // }}
          >
            {/* {[1, 2, 3].map((e, i) => (
              <React.Fragment>
                <NotificationItem key={i} item={e} activeElement={e} />

                <Divider variant="inset" component="li" />
              </React.Fragment>
            ))} */}

            {/* <>
              <NotificationItem activeElement={1} />
              <Divider variant="inset" component="li" />
            </>
            <>
              <NotificationItem activeElement={2} />
              <Divider variant="inset" component="li" />
            </>
            <>
              <NotificationItem activeElement={3} />
              <Divider variant="inset" component="li" />
            </> */}
          </List>
        </Box>
      )}
      <ControlledAccordions />
    </div>
  );
}

const ControlledAccordions = () => {
  const [expanded, setExpanded] = useState(false);
  const [isSeen, setIsSeen] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Box
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: 640,
          cursor: "pointer",
        }}
      >
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Avatar>
              <Icon>notifications</Icon>
            </Avatar>
            <div
              onClick={() => {
                isSeen.includes(1)
                  ? setIsSeen(isSeen)
                  : setIsSeen([...isSeen, 1]);
                console.log(isSeen);
              }}
              style={{ color: "#A9A9A9", marginLeft: "12px" }}
            >
              <div
                style={
                  isSeen.includes(1) ? { color: "#000" } : { color: "#A9A9A9" }
                }
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Advanced settings
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  <p style={{ fontSize: ".9rem" }}>
                    Filtering has been entirely disabled for whole web server
                  </p>
                </Typography>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
            <Button
              variant="contained"
              size="small"
              style={{
                color: "#fff",
                backgroundColor: "red",
                marginTop: 10,
                marginLeft: "80%",
              }}
            >
              Action
            </Button>
          </AccordionDetails>
        </Accordion>

        {/* Second   */}

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Avatar>
              <Icon>notifications</Icon>
            </Avatar>

            <div
              onClick={() => {
                isSeen.includes(2)
                  ? setIsSeen(isSeen)
                  : setIsSeen([...isSeen, 2]);
                console.log(isSeen);
              }}
              style={{ color: "#A9A9A9", marginLeft: "12px" }}
            >
              <div
                style={
                  isSeen.includes(2) ? { color: "#000" } : { color: "#A9A9A9" }
                }
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Advanced settings
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  <p style={{ fontSize: ".9rem" }}>
                    Filtering has been entirely disabled for whole web server
                  </p>
                </Typography>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
            </Typography>
            <Button
              variant="contained"
              size="small"
              style={{
                color: "#fff",
                backgroundColor: "red",
                marginTop: 10,
                marginLeft: "80%",
              }}
            >
              Action
            </Button>
          </AccordionDetails>
        </Accordion>

        {/* Third  */}

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Avatar>
              <Icon>notifications</Icon>
            </Avatar>
            <div
              onClick={() => {
                isSeen.includes(3)
                  ? setIsSeen(isSeen)
                  : setIsSeen([...isSeen, 3]);
                console.log(isSeen);
              }}
              style={{ color: "#A9A9A9", marginLeft: "12px" }}
            >
              <div
                style={
                  isSeen.includes(3) ? { color: "#000" } : { color: "#A9A9A9" }
                }
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Advanced settings
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  <p style={{ fontSize: ".9rem" }}>
                    Filtering has been entirely disabled for whole web server
                  </p>
                </Typography>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
            <Button
              variant="contained"
              size="small"
              style={{
                color: "#fff",
                backgroundColor: "red",
                marginTop: 10,
                marginLeft: "80%",
              }}
            >
              Action
            </Button>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Personal data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
};

function NotificationItem(props) {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [page, setpage] = useState("Notification");
  const markAsRead = () => {};
  const deleteNotification = () => {};

  const Message = () => {};
  return (
    <ListItem
    //   style={{
    //     display: "block",
    //   }}
    //   key={props.key}
    >
      {/* <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => {
          setNotificationOpen(props.activeElement);
        }}
      >
        <ListItemAvatar>
          <Avatar>
            <Icon>notifications</Icon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="This is an example notification"
          secondary="example extra text ...."
        />
      </div> */}
      {/* <div
        style={{
          display: "block",

          marginLeft: "4rem",
          justifyContent: "space-between",
        }}
      >
        <p
          style={
            notificationOpen
              ? {
                  height: "auto",
                }
              : {
                  overflow: "hidden",
                  height: "0px",
                }
          }
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
            nisl id turpis rutrum dignissim.
            <Button
              onClick={() => {}}
              variant="outlined"
              style={{ backgroundColor: "red", color: "white" }}
            >
              Action
            </Button>
          </div>
        </p>
      </div> */}
      {/* <ListItemSecondaryAction>
        <Stack direction="row" spacing={2}>
          {!props.is_seen && (
            <Tooltip title="Mark As Read">
              <IconButton onClick={markAsRead}>
                <Icon>done</Icon>
              </IconButton>
            </Tooltip>
          )}
          <Tooltip title="Delete">
            <IconButton onClick={deleteNotification}>
              <Icon>clear</Icon>
            </IconButton>
          </Tooltip>
        </Stack>
      </ListItemSecondaryAction> */}
    </ListItem>
  );
}
