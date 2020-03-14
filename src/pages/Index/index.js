import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import Layout from '~/components/Layout';
import World from '~/components/World';

const Index = () => {
  const [content, setContent] = useState('');
  return (
    <Layout>
      <World setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </Layout>
  );
};

export default Index;
