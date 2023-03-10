import { Component, ComponentLabel } from './ComponentsListItem.styled';

const ComponentsListItem = ({ component: { name, type, unit, value } }) => {
  return (
    <Component>
      {name && <ComponentLabel>Name: {name}</ComponentLabel>}
      {type && <ComponentLabel>Type: {type}</ComponentLabel>}
      {value && <ComponentLabel>Value: {value}</ComponentLabel>}
      {unit && <ComponentLabel>Unit: {unit}</ComponentLabel>}
    </Component>
  );
};

export { ComponentsListItem };
