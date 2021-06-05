import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  Grid,
  Paper,
  Container,
  Typography,
  Avatar,
  Button
} from '@material-ui/core';
import { useParams } from 'react-router';
import axios from 'axios';
import Activity from '../common/Activity';
import { capitalizeName, formatTags } from '../../utils/common';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: '24px 16px'
  },
  imageContainer: {
    maxHeight: '700px'
  },
  image: {
    width: '100%',
    height: 'auto'
  },
  detailsContainer: {
    padding: '32px'
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  ptb16: {
    padding: '16px 0'
  }
}));

const API_KEY = process.env.REACT_APP_API_KEY;

export default function AlbumDetails() {
  const { id: userId } = useParams();
  const [albumData, setAlbumData] = useState({});
  const classes = useStyles();

  useEffect(() => {
    fetchUserAlbum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchUserAlbum() {
    console.log("userId is ", userId);
    const api = `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&id=${userId}`
    try {
      const result = await axios.get(api);
      const apiData = result?.data?.hits;
      setAlbumData(apiData[0] || {});
    } catch (error) {
      console.log("something went wrong ", error);
    }
  }

  return (
    <Grid className={classes.mainContainer} container spacing={2} justify="center">
      <Grid item xs={12}>
        <Typography variant="h2" align="center">Album Details</Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Container className={classes.imageContainer}>
          <img src={albumData.imageURL} alt="web-form" className={classes.image} />
        </Container>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.detailsContainer}>
          <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item align="center" xs={12}>
              <Avatar src={albumData.userImageURL} alt="user-logo" className={classes.large} />
              <Typography variant="h5" align="center" className={classes.ptb16}>
                {capitalizeName(albumData.user)}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Activity activityData={albumData} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6">Tags</Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography>{formatTags(albumData.tags)}</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6">Type</Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography>{capitalizeName(albumData.type)}</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6">Views</Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography>{albumData.views}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" href="/albums">Back To Home</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
};
