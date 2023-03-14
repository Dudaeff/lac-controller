import styled from 'styled-components';

const SensorItem = styled.li`
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
  column-gap: 5px;
`;

const SensorCard = styled.div`
  @media screen and (max-width: 480px) {
    padding: 5px 5px;
  }
  width: 250px;
  padding: 5px 15px;
  border: 2px solid black;
  border-radius: 5px;
`;

const SensorTitle = styled.h2`
  padding: 5px;
  margin-bottom: 5px;
`;

const SensorInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const SensorInfo = styled.p`
  padding: 5px;
  border-bottom: 1px solid black;
  border-radius: 5px;
`;

export { SensorItem, SensorCard, SensorTitle, SensorInfoList, SensorInfo };
