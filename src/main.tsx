import React from "react";
import ReactDOM from "react-dom/client";


import App from "./App";
import "./index.css";


import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/material/CssBaseline';
const materialTheme = materialExtendTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
        <CssBaseline enableColorScheme />
        <App />
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
    
  </React.StrictMode>
);
