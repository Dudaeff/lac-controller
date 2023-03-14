import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;

const InfoCard = styled.div`
  margin-bottom: 5px;
  border: 2px solid black;
  border-radius: 5px;
`;

const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const InfoListItem = styled.li`
  padding: 5px 10px;
`;

const InfoLabel = styled.p`
  padding: 5px;
  border-bottom: 1px solid black;
  border-radius: 5px;
`;

export { InfoList, Title, InfoListItem, InfoCard, InfoLabel };
