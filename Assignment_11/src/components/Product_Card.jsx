import {Avatar, Card, CardContent, CardMedia, Stack, Typography} from '@mui/material'


import {Link, useNavigate} from 'react-router-dom'
import React from 'react'


export const Product_Card = ({data, landing = true}) => {
  const {id, title, price, description, images, category: {name, image}} = data;
console.log(name);
  const navigate = useNavigate();
  /*const myClick = () => {
    navigate('/product/21/');
  }*/
  return (<>
      {!landing &&
      <div>
        <button onClick={() => navigate('/')} type="button"
                className="text-white bg-blue-700 mx-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg className="rotate-180 w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
               fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
          Back to Products
        </button>
      </div>
      }
      <Card elevation={1} className=''>
        <CardMedia onClick={() => navigate(`/product/${id}`)}
                   className='aspect-square w-full object-cover'
                   image={images[0]}
                   title={title}
        />
        <CardContent className='space-y-6'>
          <Stack>
            <Typography noWrap gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description.substring(0, 45)}...
            </Typography>
          </Stack>
          <Stack flexDirection='row' alignItems='center' gap={1}>
            <Avatar sx={{width: 24, height: 24}} alt={name} src={image}/>
            <Typography>
              {name}
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="body" fontWeight='bold' className='text-3xl font-bold text-orange-400'>
              ${price}
            </Typography>
          </Stack>
          {landing &&
          <Stack>
            <button onClick={() => navigate(`/product/${id}`)}>View Details</button>
          </Stack>
          }
        </CardContent>
      </Card>
    </>
  )
}
