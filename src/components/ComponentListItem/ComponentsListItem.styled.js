import styled from 'styled-components';

const ComponentsCard = styled.div`
  width: 900px;
  padding: 5px 10px;
  border: 2px solid black;
  border-radius: 5px;
`;

const ComponentsTitle = styled.h2`
  margin-bottom: 15px;
`;

const ComponentsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content: space-between;
  row-gap: 5px;
`;

const Component = styled.li`
  width: 190px;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

const ComponentLabel = styled.p`
  padding: 5px;
  border-bottom: 1px solid black;
  border-radius: 5px;
`;

export {
  Component,
  ComponentLabel,
  ComponentsCard,
  ComponentsTitle,
  ComponentsList,
};
