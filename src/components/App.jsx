import incomingData from 'Data/incomingData';

import { Layout } from './Layout/Layout';
import { Controller } from './Controller/Controller';
import { SensorsList } from './SensorsList/SensorsList';

const SENSORS = incomingData.Sensors;

export const App = () => {
  return (
    <main>
      <Layout>
        <Controller source={incomingData}>
          <SensorsList sensors={SENSORS} />
        </Controller>
      </Layout>
    </main>
  );
};
