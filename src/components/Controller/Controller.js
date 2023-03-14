import { useEffect, useState } from 'react';
import { useThrottle } from 'use-throttle';
import { getData } from 'components/services/API';

import {
  InfoList,
  Title,
  InfoListItem,
  InfoCard,
  InfoLabel,
} from './Controller.styled';
import { SensorsList } from 'components/SensorsList/SensorsList';

const Controller = () => {
  const [source, setSource] = useState([]);
  const throttledSource = useThrottle(source, 1000);

  useEffect(() => {
    getData()
      .then(response => {
        if (!response.ok) {
          return Promise.reject(response.statusText);
        }
        return response.json();
      })
      .then(data => setSource(data));
  }, [throttledSource]);

  const { boardName, chipName, chipID, MAC, firmvare, location, Sensors } =
    source;

  return (
    <section>
      <InfoCard>
        <Title>Board Name: {boardName && boardName}</Title>
        <InfoList>
          <InfoListItem>
            <InfoLabel>Chip Name: {chipName && chipName}</InfoLabel>
          </InfoListItem>
          <InfoListItem>
            <InfoLabel>Chip ID: {chipID && chipID}</InfoLabel>
          </InfoListItem>
          <InfoListItem>
            <InfoLabel>MAC: {MAC && MAC}</InfoLabel>
          </InfoListItem>
          <InfoListItem>
            <InfoLabel>Firmvare: {firmvare && firmvare}</InfoLabel>
          </InfoListItem>
          <InfoListItem>
            <InfoLabel>Location: {location && location}</InfoLabel>
          </InfoListItem>
        </InfoList>
      </InfoCard>
      <SensorsList sensors={Sensors} />
    </section>
  );
};

export { Controller };
