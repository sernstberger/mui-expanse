import { Button, Card, Grid } from '@mui/material';

export function App() {
  return (
    <div>
      <header>header goes here</header>
      <main>
        <ProductGrid />
        <Button>cool</Button>
      </main>
    </div>
  );
}

export default App;

const ProductGrid = () => {
  return (
    <Grid container spacing={2}>
      {[1, 2, 3, 4, 5].map((item) => {
        return (
          <Grid item xs={3} key={item}>
            <Card>card {item}</Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
