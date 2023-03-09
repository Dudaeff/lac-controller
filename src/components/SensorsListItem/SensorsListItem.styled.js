import styled from "styled-components";

const SensorItem = styled.li`
display: flex;
column-gap: 5px;
`;

const SensorCard = styled.div`
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
border: 1px solid red;
border-radius: 5px;
`

export { SensorItem,SensorCard,SensorTitle,SensorInfoList,SensorInfo };