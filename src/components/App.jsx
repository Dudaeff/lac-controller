import { useEffect, useState, useRef } from 'react';

import { getData } from './services/API';
import { Layout } from './Layout/Layout';
import { Controller } from './Controller/Controller';
import { SensorsList } from './SensorsList/SensorsList';

const App = () => {
  const [source, setSource] = useState([]);
  const timeoutID = useRef(null);

  useEffect(() => {
    if (source) {
      getData().then(data => {
        timeoutID.current = setTimeout(() => setSource(data), 1000);
      });
    }

    return () => {
      clearTimeout(timeoutID.current);
    };
  }, [source]);

  return (
    <main>
      <Layout>
        {source && (
          <Controller source={source}>
            <SensorsList sensors={source.Sensors} />
          </Controller>
        )}
      </Layout>
    </main>
  );
};

export { App };
