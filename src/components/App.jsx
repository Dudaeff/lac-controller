import { useEffect, useState } from 'react';

import { Layout } from './Layout/Layout';
import { Controller } from './Controller/Controller';
import { SensorsList } from './SensorsList/SensorsList';

async function getData() {
  try {
    const response = await fetch('http://emet-dev.core.lac/emet.json');
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

const App = () => {
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    if (newData) {
      getData().then(setNewData);
    }
  }, [newData]);

  return (
    <main>
      <Layout>
        <Controller source={newData}>
          <SensorsList sensors={newData.Sensors} />
        </Controller>
      </Layout>
    </main>
  );
};

export { App };
