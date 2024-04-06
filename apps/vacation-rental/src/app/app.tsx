import { Button, Card, Grid, CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export function App() {
  return (
    <div>
      <header>header goes here</header>
      <main>
        <ProductGrid
          products={[
            {
              id: 1,
              image:
                'https://images.unsplash.com/photo-1711699486799-901668a8d720?q=80&w=3000&auto=format&fit=crop',
              title: 'Product 1',
              description: 'This is a cool product',
            },
            {
              id: 2,
              image:
                'https://images.unsplash.com/photo-1711699486799-901668a8d720?q=80&w=3000&auto=format&fit=crop',
              title: 'Product 2',
              description: 'This is another cool product',
            },
            {
              id: 3,
              image:
                'https://images.unsplash.com/photo-1711699486799-901668a8d720?q=80&w=3000&auto=format&fit=crop',
              title: 'Product 3',
              description: 'This is a cool product too',
            },
            {
              id: 4,
              image:
                'https://images.unsplash.com/photo-1711699486799-901668a8d720?q=80&w=3000&auto=format&fit=crop',
              title: 'Product 4',
              description: 'This is a cool product as well',
            },
            {
              id: 5,
              image:
                'https://images.unsplash.com/photo-1711699486799-901668a8d720?q=80&w=3000&auto=format&fit=crop',
              title: 'Product 5',
              description: 'This is a cool product',
            },
            {
              id: 6,
              image:
                'https://images.unsplash.com/photo-1711699486799-901668a8d720?q=80&w=3000&auto=format&fit=crop',
              title: 'Product 6',
              description: 'This is a cool product',
            },
          ]}
        />
        <Button>cool</Button>
      </main>
    </div>
  );
}

export default App;

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => {
        return (
          <Grid item xs={3} key={product.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
