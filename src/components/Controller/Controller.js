import {
  InfoList,
  Title,
  InfoListItem,
  InfoCard,
  InfoLabel,
} from './Controller.styled';

const Controller = ({
  source: { boardName, chipName, chipID, MAC, firmvare, location },
  children,
}) => {
  return (
    <section>
      <InfoCard>
        <Title>Board Name: {boardName}</Title>
        <InfoList>
          <InfoListItem>
            <InfoLabel>Chip Name: {chipName}</InfoLabel>
          </InfoListItem>
          <InfoListItem>
            <InfoLabel>Chip ID: {chipID}</InfoLabel>
          </InfoListItem>
          <InfoListItem>
            <InfoLabel>MAC: {MAC}</InfoLabel>
          </InfoListItem>
          <InfoListItem>
            <InfoLabel>Firmvare: {firmvare}</InfoLabel>
          </InfoListItem>
          <InfoListItem>
            <InfoLabel>Location: {location}</InfoLabel>
          </InfoListItem>
        </InfoList>
      </InfoCard>
      {children}
    </section>
  );
};

export { Controller };
