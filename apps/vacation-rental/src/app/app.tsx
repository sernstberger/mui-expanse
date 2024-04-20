import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import * as React from 'react';
import { PaletteMode } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarIcon from '@mui/icons-material/Star';
import getLPTheme from './getLPTheme';
import { AppAppBar } from './AppAppBar';
import { ToggleCustomTheme } from './ToggleCustomTheme';
import { NavItem } from './Navigation';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Listing from './pages/Listing';
import Reserve from './pages/Reserve';

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

      <Routes>
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="*" element={<div>nope</div>} />
        </Route> */}

        <Route index element={<Home />} />
        <Route path="listing" element={<Listing />} />
        <Route path="reserve" element={<Reserve />} />
        <Route path="*" element={<div>nope</div>} />
      </Routes>

      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />

      <ToggleCustomTheme
        showCustomTheme={showCustomTheme}
        toggleCustomTheme={toggleCustomTheme}
      />

      {/* <Box
        sx={{
          maxWidth: 360,
        }}
      >
        <Navigation items={items} />
      </Box> */}
    </ThemeProvider>
  );
}

export default App;
