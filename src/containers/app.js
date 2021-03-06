import React from 'react';
import { Route } from 'react-router-dom';
import WelcomePage from 'components/welcome-page';
import AuthenticationContainer from 'containers/authentication-container';
import NavbarContainer from 'containers/navbar-container';
import CommitsContainer from 'containers/commits-container';
import SidebarContainer from 'containers/sidebar-container';
import Flex from 'styled-flex-component';
import styled from 'styled-components';
import RepoInputContainer from 'containers/repo-input-container';

const possibleRoutes = ['/app', '/app/main', '/authentication'];

const FullFlex = styled(Flex)`
  min-height: 100vh;
  background-color: #f1f3f5;
`;

const App = () => (
  <FullFlex column full>
    <Route path="/" render={() => <NavbarContainer />} />
    <Flex justifyCenter>
      <Route path="/app" render={() => <SidebarContainer />} />
      <Flex column style={{ 'max-width': '50%', 'min-width': '50%' }}>
        <Route
          path="/app/main"
          render={() => (
            <React.Fragment>
              <RepoInputContainer />
              <CommitsContainer />
            </React.Fragment>
          )}
        />
      </Flex>
    </Flex>
    <Route exact path="/" render={() => <WelcomePage />} />
    <Route exact path="/authentication" render={() => <AuthenticationContainer />} />
    {/* 404 route */}
    <Route
      path="*"
      render={({ match }) => {
        if (new RegExp(`^(?!(${possibleRoutes.join('|')}))`).test(match.url) && match.url !== '/') {
          return (
            <Flex column justifyCenter alignCenter>
              <h1>Error 404</h1>
              <h2>Sorry! the page you are looking for does not exist!</h2>
            </Flex>
          );
        }
        return '';
      }}
    />
  </FullFlex>
);

export default App;
