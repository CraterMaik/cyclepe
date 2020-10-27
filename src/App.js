import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./assets/theme";
import { CssBaseline } from '@material-ui/core';
import Layout from "./compoments/Layout";

import ListWorkshop from "./compoments/workshops/ListWorkshops";

function App() {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>
      <ListWorkshop />
    </Layout>
  </ThemeProvider>;
}

export default App;
