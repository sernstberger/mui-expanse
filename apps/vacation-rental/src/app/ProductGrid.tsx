import { Grid, Pagination, PaginationProps } from '@mui/material';
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
        <ProductGridPagination count={5} />
      </Grid>
    </Grid>
  );
};

interface ProductGridPaginationProps extends PaginationProps {
  count: number;
}

export function ProductGridPagination({ count }: ProductGridPaginationProps) {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return <Pagination count={count} page={page} onChange={handleChange} />;
}
