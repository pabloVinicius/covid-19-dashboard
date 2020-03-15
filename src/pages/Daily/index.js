import React, { Suspense } from 'react';
import Layout from '~/components/Layout';
import LoadingScreen from '~/components/LoadingScreen';

import DailyChart from '~/components/DailyChart';

const data = [
  {
    id: 'japan',
    color: 'hsl(185, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 136,
      },
      {
        x: 'helicopter',
        y: 273,
      },
      {
        x: 'boat',
        y: 102,
      },
      {
        x: 'train',
        y: 104,
      },
      {
        x: 'subway',
        y: 105,
      },
      {
        x: 'bus',
        y: 152,
      },
      {
        x: 'car',
        y: 242,
      },
      {
        x: 'moto',
        y: 164,
      },
      {
        x: 'bicycle',
        y: 268,
      },
      {
        x: 'horse',
        y: 155,
      },
      {
        x: 'skateboard',
        y: 210,
      },
      {
        x: 'others',
        y: 24,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(141, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 279,
      },
      {
        x: 'helicopter',
        y: 275,
      },
      {
        x: 'boat',
        y: 226,
      },
      {
        x: 'train',
        y: 242,
      },
      {
        x: 'subway',
        y: 214,
      },
      {
        x: 'bus',
        y: 237,
      },
      {
        x: 'car',
        y: 213,
      },
      {
        x: 'moto',
        y: 74,
      },
      {
        x: 'bicycle',
        y: 289,
      },
      {
        x: 'horse',
        y: 53,
      },
      {
        x: 'skateboard',
        y: 215,
      },
      {
        x: 'others',
        y: 209,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(127, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 244,
      },
      {
        x: 'helicopter',
        y: 69,
      },
      {
        x: 'boat',
        y: 280,
      },
      {
        x: 'train',
        y: 259,
      },
      {
        x: 'subway',
        y: 280,
      },
      {
        x: 'bus',
        y: 92,
      },
      {
        x: 'car',
        y: 264,
      },
      {
        x: 'moto',
        y: 175,
      },
      {
        x: 'bicycle',
        y: 265,
      },
      {
        x: 'horse',
        y: 166,
      },
      {
        x: 'skateboard',
        y: 187,
      },
      {
        x: 'others',
        y: 152,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(119, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 35,
      },
      {
        x: 'helicopter',
        y: 257,
      },
      {
        x: 'boat',
        y: 185,
      },
      {
        x: 'train',
        y: 284,
      },
      {
        x: 'subway',
        y: 138,
      },
      {
        x: 'bus',
        y: 299,
      },
      {
        x: 'car',
        y: 41,
      },
      {
        x: 'moto',
        y: 165,
      },
      {
        x: 'bicycle',
        y: 37,
      },
      {
        x: 'horse',
        y: 285,
      },
      {
        x: 'skateboard',
        y: 214,
      },
      {
        x: 'others',
        y: 74,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(166, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 229,
      },
      {
        x: 'helicopter',
        y: 271,
      },
      {
        x: 'boat',
        y: 171,
      },
      {
        x: 'train',
        y: 30,
      },
      {
        x: 'subway',
        y: 277,
      },
      {
        x: 'bus',
        y: 151,
      },
      {
        x: 'car',
        y: 151,
      },
      {
        x: 'moto',
        y: 142,
      },
      {
        x: 'bicycle',
        y: 108,
      },
      {
        x: 'horse',
        y: 46,
      },
      {
        x: 'skateboard',
        y: 265,
      },
      {
        x: 'others',
        y: 68,
      },
    ],
  },
];

const Index = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Layout>
        <DailyChart data={data} />
      </Layout>
    </Suspense>
  );
};

export default Index;
