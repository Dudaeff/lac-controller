import { nanoid } from 'nanoid';

import { SensorsListItem } from 'components/SensorsListItem/SensorsListItem';
import { SensorsView } from './SensorsList.styled';

const SensorsList = ({ sensors }) => {
  return (
    <SensorsView>
      {sensors &&
        sensors.map(sensor => {
          return <SensorsListItem sensor={sensor} key={nanoid()} />;
        })}
    </SensorsView>
  );
};

export { SensorsList };
