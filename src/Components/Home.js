import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // paper: {
  //   height: 140,
  //   width: 100,
  // },
  // control: {
  //   padding: theme.spacing(2),
  // },
}));

const API_KEY = process.env.REACT_APP_API_KEY;
console.log("API_KEY is ", API_KEY);

const Home = () => {
  const classes = useStyles();
  const perPage = 10;
  const [pageNumber, setPageNumber] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([])



  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      setPageNumber(pageNumber + 1)
    };
    async function getPhotos() {
      const result = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo&per_page=${perPage}&page=${pageNumber}`)
      console.log("result is ", result?.data?.hits);
      const photos = result?.data?.hits;
      const newData = [...data, ...photos];
      setData(newData);
      setIsFetching(false);
    }
    getPhotos();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);


  return (
    <>
      <ul className="list-group mb-2">
        {data.map(({ previewURL, tags }, n) => (
          <li key={n} className="list-group-item">
            <div>{tags}</div>
            <img src={previewURL} alt={previewURL} />
          </li>
        ))}
      </ul>
      {isFetching && "Fetching more list items..."}
    </>
  );
};


export default Home;
