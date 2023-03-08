import incomingData from 'Data/incomingData';

import { Layout } from './Layout/Layout';
import { MainController } from './MainController/MainController';

export const App = () => {
  return (
    <main>
      <Layout>
        <MainController data={incomingData}></MainController>
      </Layout>
    </main>
  );
};
