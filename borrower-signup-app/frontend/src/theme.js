// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',  // your main brand color (blue vibes)
    },
    secondary: {
      main: '#19857b',  // complementary color (greenish)
    },
    background: {
      default: '#f4f6f8',  // light neutral background so your content pops
    },
    text: {
      primary: '#333',     // main text color for readability
      secondary: '#555',   // secondary text, a bit softer
    },
  },
});

export default theme;
