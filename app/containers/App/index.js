/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import GlobalFonts from 'fonts';

import routes from 'routes';

const AppWrapper = styled.div`
  margin: 0 auto;
  height: 100%;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Sales Management"
        defaultTitle="Sales Management System"
      >
        <meta name="description" content="Sales Management System" />
      </Helmet>
      <Header />
      <Switch>
        {routes.map(route => (
          <Route
            key={route.name}
            path={route.path}
            exact={route.exact || false}
            render={props =>
              route.component ? (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              ) : (
                <Redirect to={route.redirect} />
              )
            }
          />
        ))}

        {/* <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} /> */}
      </Switch>
      <Footer />
      <GlobalStyle />
      <GlobalFonts />
    </AppWrapper>
  );
}
