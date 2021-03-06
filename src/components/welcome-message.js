import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import BigHeader from 'components/big-header';
import media from 'styles/media';
import SubHeader from 'components/sub-header';
import EnterButtonContainer from 'containers/enter-button-container';

const CustomFlex = styled(Flex)`
  ${media.desktop`width: 40%`};
  ${media.tablet`width: 80%`};
  ${media.phone`width: 90%`};
`;

const WelcomeMessage = () => (
  <CustomFlex column justifyCenter>
    <BigHeader>Put what matters together</BigHeader>
    <SubHeader>Monitor all your favorites GitHub repositories in a single place!</SubHeader>
    <EnterButtonContainer />
  </CustomFlex>
);

export default WelcomeMessage;
