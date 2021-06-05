import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  makeStyles,
  Grid,
  Container
} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from '../../assets/loading.gif';
import Cards from './Cards';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },

}));

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Home() {
  const classes = useStyles();
  const perPage = 10;
  const [pageNumber, setPageNumber] = useState(1);
  const [albumData, setAlbumData] = useState([]);
  let history = useHistory();
  // const isMobileDevice = useMediaQuery('(max-width:480px)');


  useEffect(() => {
    getPhotos(pageNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function getFetchURL(pageNum) {
    return `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo&per_page=${perPage}&page=${pageNum}`;
  }

  async function getPhotos(pageNum) {
    try {
      const result = await axios.get(getFetchURL(pageNum))
      const apiData = result?.data?.hits || [];
      const processedData = [...albumData, ...apiData];
      setPageNumber(pageNum);
      setAlbumData(processedData);
    } catch(err) {
      console.log("something went wrong ", err);
    }
  }

  const handleCardClick = (userId) => history.push(`/albums/${userId}`);

  return (
    <InfiniteScroll
      next={() => getPhotos(pageNumber + 1)}
      hasMore={true}
      dataLength={albumData.length}
      loader={<img src={Loading} alt="loading" />}
    >
      <Container className={classes.cardMain} maxWidth="lg">
        <Grid container spacing={4}>
          {albumData.map((albumDt) => (
            <Grid item key={albumDt.id} xs={12} sm={6} md={4}>
              <Cards cardData={albumDt} onCardClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </InfiniteScroll>
  );
};
