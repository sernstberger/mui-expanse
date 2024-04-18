import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
  Box,
} from '@mui/material';
import * as React from 'react';
import { PaletteMode } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarIcon from '@mui/icons-material/Star';
import getLPTheme from './getLPTheme';
import { AppAppBar } from './AppAppBar';
import { ToggleCustomTheme } from './ToggleCustomTheme';
import { ProductGrid } from './ProductGrid';
import { Main } from './Main';
import { NavItem, Navigation } from './Navigation';

const items: NavItem[] = [
  {
    icon: InboxIcon,
    text: 'Inbox',
    subItems: [
      {
        icon: StarIcon,
        text: 'Starred',
      },
      {
        icon: StarIcon,
        text: 'Important',
      },
    ],
  },
  {
    icon: StarIcon,
    text: 'Starred',
  },
];

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

export function App() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />

      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />

      {/* <Box
        sx={{
          maxWidth: 360,
        }}
      >
        <Navigation items={items} />
      </Box> */}

      <Main>
        <Container maxWidth="xl">
          <ProductGrid products={products} />
        </Container>

        <ToggleCustomTheme
          showCustomTheme={showCustomTheme}
          toggleCustomTheme={toggleCustomTheme}
        />
      </Main>
    </ThemeProvider>
  );
}

export default App;
