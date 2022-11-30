import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import loadingGif from '../assets/loading.gif';
 import { useDispatch, useSelector } from 'react-redux';
import {clearList, getData} from '../features/newsSlice'
import { useEffect } from 'react';

const News = () => {
  const dispatch=useDispatch();
// const newList=useSelector((state)=>state.newsSlice.newList)
// const loading=useSelector((state)=>state.newsSlice.loading)
const {newsList,loading}=useSelector((state)=>state.newsSlice)


  useEffect(() => {
    dispatch(getData())
    
  }, [dispatch]);

console.log(newsList);
  
  return (
    <>
    {/* loading değikeni buraya true gelirse salyangoz resmini bas yoksa....altta yazıyor */}
      {loading && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <img src={loadingGif} alt="gif" width="90%" height="800px" />
        </Box>
      )}
      {/* loading false gelirse verilerin olduğu dizideki elemanları ekrana bas */}
      {!loading && (
        <Box
          xs={{ d: 'flex' }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
        {/* newsSlice da oluşan dizinin içinde gezin, dizi doluysa (?) içindekileri bas */}
          {newsList?.map((item, index) => (
            <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
              <CardMedia
                component="img"
                height="250"
                image={item?.urlToImage}
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item?.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=>dispatch(clearList())}>Clear</Button>
                <Button size="small" href={item?.url} target="_blank">
                  Detail
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </>
  );
};

export default News;
