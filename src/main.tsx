import React from "react";
import ReactDOM from "react-dom/client";


import App from "./App";
import "./index.css";


import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import { CssVarsProvider as JoyCssVarsProvider, extendTheme } from '@mui/joy/styles';
import CssBaseline from '@mui/material/CssBaseline';
const materialTheme = materialExtendTheme();
const theme = extendTheme({
  fontFamily: {
    body: 'Roboto'
  },
})
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <MaterialCssVarsProvider defaultColorScheme={"light"}  theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider defaultColorScheme={"light"} theme={theme}>
        <CssBaseline     />
        <App />
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
    
  </React.StrictMode>
);
