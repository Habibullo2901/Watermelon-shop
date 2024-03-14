import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Main = () => {
  const dispatch = useDispatch();
  const [products, setProduccts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(response => response.json())
      .then(data => setProduccts(data.products))
  }, [])

  const handleLikeProduct = (product) => {
    dispatch({type: "LIKE_PRODUCT", product})
  }

  const handleSelectProduct = (product) => {
    dispatch({type: "SELECTED_PRODUCT", product})
  }

  // console.log(products)

  return (
    <div className='cards'>
      {
        products.map(product =>
          <Card key={product.id} sx={{ maxWidth: 345 }}>
            <CardHeader
              action={
                  <IconButton onClick={() =>handleLikeProduct(product)} aria-label="add to favorites">
                    <FavoriteIcon />
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
              <IconButton onClick={() =>handleSelectProduct(product)} aria-label="add to favorites">
                <AddShoppingCartIcon />
              </IconButton>
            </CardActions>
          </Card>
        )
      }
    </div>
  )
}

export default Main