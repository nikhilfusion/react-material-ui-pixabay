import React from 'react';
import {
  makeStyles,
  Grid,
  Avatar,
  Typography
} from '@material-ui/core';
import {
  ChatBubble as CommentIcon,
  Favorite as FavoriteIcon,
  GetApp as DownloadIcon,
  ExposurePlus1 as LikeIcon
} from '@material-ui/icons';
import propTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  activityMain: {
    textAlign: 'center'
  },
  iconContainer: {
    margin: 'auto',
    // padding: '8px 0'
  },
  commentsContainer: {
    background: "#0000ff",
  },
  likesContainer: {
    background: "#f50e01",
  },
  downloadsContainer: {
    background: "#288000",
  },
  favoritesContainer: {
    background: "#dc32b6",
  },
  icon: {
    verticalAlign: 'middle'
  },
  ptb8: {
    paddingTop: '8px'
  }
}));

export default function Activity({ activityData }) {
  const { likes, comments, downloads, favorites } = activityData;
  const classes = useStyles();
  return (
    <Grid container justify="space-between">
      <Grid item xs={3} className={classes.activityMain}>
        <Avatar className={`${classes.iconContainer} ${classes.commentsContainer}`}>
          <CommentIcon />
        </Avatar>
        <Typography variant="subtitle2" className={classes.ptb8}>{comments}</Typography>
        <Typography variant="subtitle2">Comments</Typography>
      </Grid>
      <Grid item xs={3} className={classes.activityMain}>
        <Avatar className={`${classes.iconContainer} ${classes.likesContainer}`}>
          <LikeIcon />
        </Avatar>
        <Typography variant="subtitle2" className={classes.ptb8}>{likes}</Typography>
        <Typography variant="subtitle2">Likes</Typography>
      </Grid>
      <Grid item xs={3} className={classes.activityMain}>
        <Avatar className={`${classes.iconContainer} ${classes.downloadsContainer}`}>
          <FavoriteIcon />
        </Avatar>
        <Typography variant="subtitle2" className={classes.ptb8}>{favorites}</Typography>
        <Typography variant="subtitle2">Favorites</Typography>
      </Grid>
      <Grid item xs={3} className={classes.activityMain}>
        <Avatar className={`${classes.iconContainer} ${classes.favoritesContainer}`}>
          <DownloadIcon />
        </Avatar>
        <Typography variant="subtitle2" className={classes.ptb8}>{downloads}</Typography>
        <Typography variant="subtitle2">Downloads</Typography>
      </Grid>
    </Grid>
  )
}

const activityDataShape = {
  likes: propTypes.number,
  comments: propTypes.number,
  downloads: propTypes.number,
  favorites: propTypes.number
}

Activity.propTypes = {
  activityData: propTypes.objectOf(propTypes.shape(activityDataShape))
}
