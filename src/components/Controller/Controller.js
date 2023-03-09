import { InfoList, Title, InfoListItem } from './Controller.styled';

const Controller = ({
  source: { boardName, chipName, chipID, MAC, firmvare, location },
  children,
}) => {
  return (
    <section>
      <Title>Board Name: {boardName}</Title>
      <InfoList>
        <InfoListItem>
          <p>Chip Name: {chipName}</p>
        </InfoListItem>
        <InfoListItem>
          <p>Chip ID: {chipID}</p>
        </InfoListItem>
        <InfoListItem>
          <p>MAC: {MAC}</p>
        </InfoListItem>
        <InfoListItem>
          <p>Firmvare: {firmvare}</p>
        </InfoListItem>
        <InfoListItem>
          <p>Location: {location}</p>
        </InfoListItem>
      </InfoList>
      {children}
    </section>
  );
};

export { Controller };
