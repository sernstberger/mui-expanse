import {
  Container,
  Typography,
  Grid,
  Card,
  Button,
  Divider,
  Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Main } from '../Main';
import ImageList from '../ImageList';

const images = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    // cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    // cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
  //   title: 'Mushrooms',
  //   rows: 2,
  //   cols: 2,
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
  //   title: 'Tomato basil',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
  //   title: 'Sea star',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  //   title: 'Bike',
  //   cols: 2,
  // },
];

export function Listing() {
  return (
    <Main>
      <Container maxWidth="xl">
        <Stack spacing={2} direction="row" justifyContent="space-between">
          <Typography variant="h4">Product 4</Typography>
          <div>
            <Button>Share</Button>
            <Button>Save</Button>
          </div>
        </Stack>

        {/* <img
        src="https://images.unsplash.com/photo-1711699486799-901668a8d720?q=80&w=3000&auto=format&fit=crop"
        alt="Product 4"
        style={{ maxWidth: '100%' }}
      /> */}
        <ImageList images={images} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography variant="h4">Entire place in Indy</Typography>
            <Typography variant="h6">
              4 guests · 2 bedrooms · 2 beds · 1 bath
            </Typography>
            <Divider />
            <Typography variant="h5">Amenities</Typography>
            <Typography variant="body1">Wifi</Typography>
            <Typography variant="body1">Kitchen</Typography>
            <Typography variant="body1">Free parking</Typography>
            <Typography variant="body1">Washer</Typography>
            <Typography variant="body1">Dryer</Typography>

            <Divider />

            {/* // a fake listing for a vacation rental */}
            <Typography variant="h5">Description</Typography>
            <Typography variant="body1">
              Check out this stunning vacation rental located in the heart of
              downtown Indy. This is a 2 bedroom, 1 bath apartment that can
              sleep up to 4 guests. The apartment is fully furnished and has a
              full kitchen, washer, dryer, and free parking. The apartment is
              located in a great neighborhood with lots of restaurants and shops
              nearby. The apartment is also close to public transportation and
              is just a short drive from the airport. Book now and enjoy your
              stay in Indy!
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <Typography variant="h5">Reserve</Typography>
              <Button variant="contained" component={Link} to="/reserve">
                Reserve
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Main>
  );
}

export default Listing;
