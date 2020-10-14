import React, { useEffect, useCallback } from 'react';
import { object } from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  Card, CardActionArea, CardMedia, CardContent,
  Typography, List, ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import BusinessIcon from '@material-ui/icons/Business';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BallotIcon from '@material-ui/icons/Ballot';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import EmailIcon from '@material-ui/icons/Email';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { saveOneUserData } from '../../redux/reducers/usersList';
import { fetchData } from '../../config';
import useStyles from './style';

const UserProfile = ({ userData }) => {
  const { userName = '' } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();

  const getUserData = useCallback(async () => {
    const response = await fetchData(`/users/${userName}`);
    dispatch(saveOneUserData(response.data));
  }, [userName, dispatch]);

  useEffect(() => { getUserData(); }, [userName, getUserData]);

  if (!userData || !Object.keys(userData).length) { return <></>; }

  const {
    name,
    followers,
    following,
    created_at,
    company,
    email,
    location,
    blog,
    bio
  } = userData;

  return (
    <>
      <Link to="/" className={classes.link}>
        <Typography gutterBottom variant="h5" component="h2">
          <ArrowBackIosIcon /> Back to users list
        </Typography>
      </Link>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={userData.avatar_url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {userData.login}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {bio}
            </Typography>

            <List component="nav" aria-label="contacts">
              <ListItem>
                <ListItemIcon><PermContactCalendarIcon /></ListItemIcon>
                <ListItemText primary="My name" />
                <ListItemText primary={name} />
              </ListItem>

              <ListItem>
                <ListItemIcon><EmojiPeopleIcon /></ListItemIcon>
                <ListItemText primary="Followers" />
                <ListItemText primary={followers} />
              </ListItem>

              <ListItem>
                <ListItemIcon><PersonIcon /></ListItemIcon>
                <ListItemText primary="Following" />
                <ListItemText primary={following} />
              </ListItem>

              <ListItem>
                <ListItemIcon><BusinessIcon /></ListItemIcon>
                <ListItemText primary="My company" />
                <ListItemText primary={company} />
              </ListItem>

              <ListItem>
                <ListItemIcon><EmailIcon /></ListItemIcon>
                <ListItemText primary="My email" />
                <ListItemText primary={email} />
              </ListItem>

              <ListItem>
                <ListItemIcon><LocationOnIcon /></ListItemIcon>
                <ListItemText primary="My location" />
                <ListItemText primary={location} />
              </ListItem>

              <ListItem>
                <ListItemIcon><BallotIcon /></ListItemIcon>
                <ListItemText primary="Personal blog" />
                <ListItemText primary={<a href={blog}>link to personal blog</a>} />
              </ListItem>

              <ListItem>
                <ListItemIcon><AccessTimeIcon /></ListItemIcon>
                <ListItemText primary="Date created" />
                <ListItemText primary={created_at} />
              </ListItem>
            </List>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

const mapStateToProps = (state) => ({
  userData: state.usersListReducer.oneUserData,
});

UserProfile.propTypes = {
  userData: object.isRequired,
};

export default connect(mapStateToProps)(UserProfile);
