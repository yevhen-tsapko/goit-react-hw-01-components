import PropTypes from 'prop-types';
import {
  StatisticSect,
  StatTitle,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';
import { generateColor } from '../../utils/generateColor';
export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSect>
      {title && <StatTitle>Upload stats</StatTitle>}
      <StatList columnsNumber={stats.length}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id} itemColor={generateColor()}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticSect>
  );
};

Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      label: PropTypes.oneOf(['.docx', '.mp3', '.psd', '.pdf']).isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
