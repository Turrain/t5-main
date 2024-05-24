

import App from "./App";
import "./index.css";

import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";
import {
  CssVarsProvider as JoyCssVarsProvider,
  extendTheme,
} from "@mui/joy/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ReactDOM from "react-dom";
const materialTheme = materialExtendTheme();
const theme = extendTheme({
  fontFamily: {
    body: "Roboto",
  },
});
export const App2 = () => {
  return (
 
      <MaterialCssVarsProvider
        defaultColorScheme={"light"}
        theme={{ [MATERIAL_THEME_ID]: materialTheme }}
      >
        <JoyCssVarsProvider defaultColorScheme={"light"} theme={theme}>
          <CssBaseline />
          <App />
        </JoyCssVarsProvider>
      </MaterialCssVarsProvider>
   
  );
};
declare global {
  interface Window {
    renderModuleComponent: (containerId: string) => void;
  }
}
window.renderModuleComponent = (containerId) => {
  ReactDOM.render(<App2 />, document.getElementById(containerId));
};
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App2 />
//   </React.StrictMode>
// );
