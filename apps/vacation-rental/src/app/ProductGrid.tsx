import { Grid } from '@mui/material';
import * as React from 'react';
import { ProductGridItem } from './ProductGridItem';

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => {
        return <ProductGridItem key={product.id} {...product} />;
      })}
      <Grid item xs={12}>
        Pagination
      </Grid>
    </Grid>
  );
};
