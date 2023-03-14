import { nanoid } from 'nanoid';

import { ComponentsListItem } from 'components/ComponentListItem/ComponentListItem';
import {
  ComponentsTitle,
  ComponentsList,
} from 'components/ComponentListItem/ComponentsListItem.styled';

export const SensorComponents = ({ components }) => {
  return (
    <>
      <ComponentsTitle>Components</ComponentsTitle>
      <ComponentsList>
        {components.map(component => {
          return <ComponentsListItem key={nanoid()} component={component} />;
        })}
      </ComponentsList>
    </>
  );
};
