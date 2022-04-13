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
} from '@material-ui/core';
import { Tooltip } from '@mui/material';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';

export default function NotificationPage(props) {
  const [spin, setSpin] = useState(false);
  useEffect(() => {
    setSpin(true);
    setTimeout(() => {
      setSpin(false);
    }, 2000);
  }, []);

  const markAllAsRead = () => {};
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='h5'>Notifications</Typography>
        <Button
          variant='outlined'
          color='primary'
          startIcon={<Icon>done_all</Icon>}
          onClick={markAllAsRead}
        >
          Mark all as read
        </Button>
      </Box>
      {spin ? (
        <div
          className='spinner'
          style={{ height: '400px', alignContent: 'center' }}
        >
          <CircularProgress
            style={{
              marginTop: '15%',
              marginLeft: '48%',
              alignItems: 'center',
            }}
          />
        </div>
      ) : (
        <Box
          sx={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: 640,
          }}
        >
          <List>
            {[1, 2, 3].map((e, i) => (
              <React.Fragment>
                <NotificationItem key={i} />

                <Divider variant='inset' component='li' />
              </React.Fragment>
            ))}
          </List>
        </Box>
      )}
    </div>
  );
}

function NotificationItem(props) {
  const markAsRead = () => {};
  const deleteNotification = () => {};

  return (
    <ListItem key={props.key}>
      <ListItemAvatar>
        <Avatar>
          <Icon>notifications</Icon>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary='This is an example notification'
        secondary='example extra text....'
      />
      <ListItemSecondaryAction>
        <Stack direction='row' spacing={2}>
          {!props.is_seen && (
            <Tooltip title='Mark As Read'>
              <IconButton onClick={markAsRead}>
                <Icon>done</Icon>
              </IconButton>
            </Tooltip>
          )}
          <Tooltip title='Delete'>
            <IconButton onClick={deleteNotification}>
              <Icon>clear</Icon>
            </IconButton>
          </Tooltip>
        </Stack>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
