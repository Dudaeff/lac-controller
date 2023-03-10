import {
  SensorItem,
  SensorCard,
  SensorTitle,
  SensorInfoList,
  SensorInfo,
} from './SensorsListItem.styled';

const SensorsListItem = ({
  sensor: { name, alias, status, location, note, serial, type },
  children,
}) => {
  return (
    <SensorItem>
      <SensorCard>
        <SensorTitle>Sensor Name: {name}</SensorTitle>
        <SensorInfoList>
          <li>{alias && <SensorInfo>Sensor alias: {alias}</SensorInfo>}</li>
          <li>
            <SensorInfo>Status: {status ? 'avaliable' : 'disabled'}</SensorInfo>
          </li>
          <li>{location && <SensorInfo>Location: {location}</SensorInfo>}</li>
          <li>{serial && <SensorInfo>Serial: {serial}</SensorInfo>}</li>
          <li>{type && <SensorInfo>Type: {type}</SensorInfo>}</li>
          <li>{note && <SensorInfo>Note: {note}</SensorInfo>}</li>
        </SensorInfoList>
      </SensorCard>
      {children}
    </SensorItem>
  );
};

export { SensorsListItem };
