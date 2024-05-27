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

import { createContext, useContext, useEffect } from "react";
import { Typography } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
const materialTheme = materialExtendTheme();
const theme = extendTheme({
  fontFamily: {
    body: "Roboto",
  },
});
const StylesContext = createContext<any>({});

export const StylesProvider = ({ children, styles } : {children: any, styles: any}) => {
  return (
    <StylesContext.Provider value={styles}>{children}</StylesContext.Provider>
  );
};

export const useStyles = () => {
  return useContext(StylesContext);
};

// const styles = {
//   button: {
//     backgroundColor: 'primary.main',
//     color: 'white',
//     '&:hover': {
//       backgroundColor: 'primary.dark',
//     },
//   },
//   text: {
//     fontSize: '20px',
//     color: 'secondary.main',
//   },
// };

export const App2 = ({ curstomStyles }: { curstomStyles: {} }) => {
const [subscription, setSubscription] = React.useState(false);
useEffect(()=> {
  const fetchSubscription = async () => {
    try{
      const res = await (await fetch("http://localhost:3000/subscriptions/getByDomain")).json()
      console.log(res)
      setSubscription(res)
    }catch(error){
      console.error("Error: ", error)
    }
  }
  fetchSubscription();
}, [])

  return (
    <MaterialCssVarsProvider
      defaultColorScheme={"light"}
      theme={{ [MATERIAL_THEME_ID]: materialTheme }}
    >
      <JoyCssVarsProvider defaultColorScheme={"light"} theme={theme}>
        <CssBaseline />
        <StylesProvider styles={curstomStyles}>
          {/* {
            subscription ? (
              <App/>
            ) : (
              <Typography>
                Error
              </Typography>
            )
            
          } */}
          <App />
      
        </StylesProvider>
        
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  );
};
// declare global {
//   interface Window {
//     renderModuleComponent: (containerId: string) => void;
//   }
// }
// window.renderModuleComponent = (containerId) => {
//   ReactDOM.render(<App2 />, document.getElementById(containerId));
// };
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App2 curstomStyles={{}} />
  </React.StrictMode>
);
