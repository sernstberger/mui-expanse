import { Container } from '@mui/material';

import { ProductGrid } from '../ProductGrid';
import { Main } from '../Main';

const products = [
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
];

export function Home() {
  return (
    <Main>
      <Container maxWidth="xl">
        <ProductGrid products={products} />
      </Container>
    </Main>
  );
}

export default Home;
