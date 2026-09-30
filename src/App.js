import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { LoadingScreen } from './components';
import GlobalStyle from './GlobalStyle';
import 'animate.css';
import 'normalize.css/normalize.css';
import theme from './theme';

const DesignPortfolio = lazy(() =>
  import('./pages/DesignPortfolio/DesignPortfolio').then((module) => ({
    default: module.DesignPortfolio,
  }))
);
const WebPortfolio = lazy(() =>
  import('./pages/WebPortfolio/WebPortfolio').then((module) => ({
    default: module.WebPortfolio,
  }))
);

const App = () => {
  return (
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Suspense fallback={<LoadingScreen />}>
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
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
