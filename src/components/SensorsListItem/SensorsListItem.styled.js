import styled from 'styled-components';

const SensorItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
`;

const SensorTitle = styled.h2`
  padding: 5px;
  margin-bottom: 5px;
`;

const SensorInfoList = styled.ul`
  display: flex;
  column-gap: 5px;
`;

const SensorInfo = styled.p`
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
`;

export { SensorItem, SensorTitle, SensorInfoList, SensorInfo };
