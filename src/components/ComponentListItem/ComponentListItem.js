import { Component, ComponentLabel } from './ComponentsListItem.styled';

const ComponentsListItem = ({ component: { name, type, unit, value } }) => {
  return (
    <Component>
      <ComponentLabel>Name: {name}</ComponentLabel>
      <ComponentLabel>Type: {type}</ComponentLabel>
      <ComponentLabel>Value: {value}</ComponentLabel>
      <ComponentLabel>Unit: {unit}</ComponentLabel>
    </Component>
  );
};

export { ComponentsListItem };
