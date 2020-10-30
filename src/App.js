import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline  from '@material-ui/core/CssBaseline';

import theme from "./assets/theme";
import Layout from "./compoments/Layout";
import ListWorkshop from "./compoments/workshops/ListWorkshops";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>
      <ListWorkshop />
    </Layout>
  </ThemeProvider>;
}

export default App;
