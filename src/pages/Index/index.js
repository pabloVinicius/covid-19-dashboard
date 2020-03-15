import React, { useState, Suspense } from 'react';
import ReactTooltip from 'react-tooltip';
import Layout from '~/components/Layout';
import World from '~/components/World';
import LoadingScreen from '~/components/LoadingScreen';

const Index = () => {
  const [content, setContent] = useState('');
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Layout>
        <World setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </Layout>
    </Suspense>
  );
};

export default Index;
