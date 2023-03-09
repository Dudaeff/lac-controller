import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 15px;
`;

const InfoList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 15px;
`;

const InfoListItem = styled.li`
  padding: 5px 10px;
  border: 2px solid black;
  border-radius: 5px;
`;

export { InfoList, Title, InfoListItem };
