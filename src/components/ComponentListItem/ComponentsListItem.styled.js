import styled from 'styled-components';

const ComponentsCard = styled.div`
  @media screen and (max-width: 480px) {
    width: 250px;
    /* padding: 5px 5px; */
  }

  width: 900px;
  padding: 5px 10px;
  border: 2px solid black;
  border-radius: 5px;
`;

const ComponentsTitle = styled.h2`
  margin-bottom: 15px;
`;

const ComponentsList = styled.ul`
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 5px;
`;

const Component = styled.li`
  @media screen and (max-width: 480px) {
    padding: 5px 5px;
  }
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
