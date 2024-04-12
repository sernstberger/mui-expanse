import { Box } from '@mui/material';

interface MainProps {
  children: React.ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <Box component="main" sx={{ marginTop: 10 }}>
      {children}
    </Box>
  );
}
