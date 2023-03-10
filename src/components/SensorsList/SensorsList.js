import { nanoid } from 'nanoid';

import { ComponentsListItem } from 'components/ComponentListItem/ComponentListItem';
import { SensorsListItem } from 'components/SensorsListItem/SensorsListItem';
import { SensorsView } from './SensorsList.styled';
import {
  ComponentsCard,
  ComponentsTitle,
  ComponentsList,
} from 'components/ComponentListItem/ComponentsListItem.styled';

const SensorsList = ({ sensors }) => {
  return (
    <SensorsView>
      {sensors &&
        sensors.map(sensor => {
          return (
            <SensorsListItem sensor={sensor} key={nanoid()}>
              <ComponentsCard>
                <ComponentsTitle>Components</ComponentsTitle>
                <ComponentsList>
                  {sensor.Components.map(component => {
                    return (
                      <ComponentsListItem
                        key={nanoid()}
                        component={component}
                      />
                    );
                  })}
                </ComponentsList>
              </ComponentsCard>
            </SensorsListItem>
          );
        })}
    </SensorsView>
  );
};

export { SensorsList };
