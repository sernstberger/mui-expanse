import { Card, Grid, CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

interface ProductGridItemProps {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const ProductGridItem: React.FC<ProductGridItemProps> = ({
  id,
  image,
  title,
  description,
}) => {
  return (
    <Grid item xs={3} key={id}>
      <Card variant="outlined">
        <CardActionArea>
          <CardMedia component="img" height="140" image={image} alt={title} />
          <CardContent>
            <Typography variant="subtitle1">{title}</Typography>
            <Typography color="text.secondary">{description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
