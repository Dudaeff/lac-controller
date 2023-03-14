import { SensorComponents } from 'components/SensorComponents/SensorComponents';
import {
  SensorItem,
  SensorTitle,
  SensorInfoList,
  SensorInfo,
} from './SensorsListItem.styled';

const SensorsListItem = ({
  sensor: { name, alias, status, note, type, Components },
}) => {
  return (
    <SensorItem>
      <SensorTitle>Sensor Name: {name}</SensorTitle>
      <SensorInfoList>
        <li>{alias && <SensorInfo>Alias: {alias}</SensorInfo>}</li>
        <li>
          <SensorInfo>Status: {status ? 'avaliable' : 'disabled'}</SensorInfo>
        </li>
        <li>{type && <SensorInfo>Type: {type}</SensorInfo>}</li>
        <li>{note && <SensorInfo>Note: {note}</SensorInfo>}</li>
      </SensorInfoList>
      <SensorComponents components={Components} />
    </SensorItem>
  );
};

export { SensorsListItem };
