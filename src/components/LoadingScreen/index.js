import React from 'react';
import Spinner from '~/components/Spinner';

import { Container } from './styles';

const LoadingScreen = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default LoadingScreen;
