import React from 'react';
import {
  makeStyles,
  Card,
  CardMedia,
  Typography,
  CardContent,
} from '@material-ui/core';
import propTypes from 'prop-types';
import { capitalizeName } from '../../utils/common';
import Activity from '../common/Activity';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer'
  },
  cardMedia: {
    height: '300px',
  },
  cardContent: {
    flexGrow: 1,
  },
  green: {
    background: '#0e7d0e'
  },
  red: {
    background: '#ef3919ed'
  },
  blue: {
    background: '#3021e8'
  },
  tagContainer: {
    fontWeight: '700',
    paddingTop: '16px'
  }
}));

export default function Cards({ cardData, onCardClick }) {
  const classes = useStyles();
  const { previewURL, user, id, tags } = cardData;
  return (
    <Card className={classes.card} onClick={() => onCardClick(id)}>
      <CardMedia
        className={classes.cardMedia}
        image={previewURL}
        title={user}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2" align="center">
          {capitalizeName(user)}
        </Typography>
        <Activity activityData={cardData} />
        <Typography variant="subtitle2" className={classes.tagContainer}>Tags
        </Typography>
        <Typography variant="body2" gutterBottom>{tags}</Typography>
      </CardContent>
    </Card>
  )
}

const activityDataShape = {
  likes: propTypes.number,
  comments: propTypes.number,
  downloads: propTypes.number,
  favorites: propTypes.number
}

const cardsShape = {
  user: propTypes.string,
  tags: propTypes.string,
  activityData: propTypes.objectOf(propTypes.shape(activityDataShape))
}

Cards.propTypes = {
  cardData: propTypes.objectOf(propTypes.shape(cardsShape)),
  onCardClick: propTypes.func
}
