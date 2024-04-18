import { Card, Grid, CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';

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
    <Grid item xs={6} sm={4} md={3} key={id}>
      <Card variant="outlined">
        <CardActionArea component={Link} to="/cool">
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
