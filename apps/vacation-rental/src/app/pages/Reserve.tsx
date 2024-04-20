import {
  Container,
  Typography,
  Grid,
  Card,
  Button,
  Divider,
  Stack,
} from '@mui/material';
import { Main } from '../Main';
import { Form } from '@expanse/form';

export function Reserve() {
  return (
    <Main>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography variant="h4">Entire place in Indy</Typography>
            <Typography variant="h6">
              4 guests · 2 bedrooms · 2 beds · 1 bath
            </Typography>
            <Divider />

            <Form />

            <Button variant="contained">Confirm and pay</Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <Typography variant="h5">Reserve</Typography>
              alsdkjfdsaf
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Main>
  );
}

export default Reserve;
