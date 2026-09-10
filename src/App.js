import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, DesignPortfolio, WebPortfolio } from './pages';
import GlobalStyle from './GlobalStyle';
import 'animate.css';
import 'normalize.css/normalize.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import theme from './theme';

const App = () => {
  return (
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/design-projects">
            <DesignPortfolio />
          </Route>
          <Route path="/web-projects">
            <WebPortfolio />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
