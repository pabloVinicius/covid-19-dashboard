import React from 'react';

import { Container, Wrapper } from './styles';

const index = () => {
  return (
    <Wrapper>
      <Container>
        {Array(12)
          .fill()
          .map((_, id) => (
            <div key={id} />
          ))}
      </Container>
    </Wrapper>
  );
};

export default index;
