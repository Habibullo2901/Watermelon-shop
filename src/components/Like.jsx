import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

const Like = () => {
  const dispatch = useDispatch();
  const likedata = useSelector(state => state.likeReducer.likes);
  const handleDislikeProduct = (id) => {
    dispatch({ type: "DISLIKE_PRODUCT", id })
  }

  const handleClearAll = () => {
    dispatch({ type: "CLEAR_ALL" })
  }

  return (
    <>
      <div className='score'>
        <button className='btn' onClick={handleClearAll}>Clear all</button>
      </div>
      {localStorage.getItem("likedproducts") === "[]" ? <div><p className='no'>No products selected</p> <img src="https://t3.ftcdn.net/jpg/01/01/89/46/360_F_101894688_RVSZUtDfPR6Cr5eBDQI7Qo5pZ01jmyK3.jpg" alt="" /></div> : ""}
      <div className='cards'>
        {
          likedata.map(product =>
            <Card key={product.id} sx={{ maxWidth: 345 }}>
              <CardHeader
                action={
                  <IconButton onClick={() => handleDislikeProduct(product.id)} aria-label="add to favorites">
                    <HeartBrokenIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                style={{ objectFit: "contain" }}
                image={product.images[0]}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant='h4' className='card-title'>{product.title}</Typography>
                <Typography variant="body2" color="text.secondary">{product.description}</Typography>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal to cook
                  together with your guests. Add 1 cup of frozen peas along with the mussels,
                  if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
              </CardActions>
            </Card>
          )
        }
      </div>
    </>
  )
}

export default Like