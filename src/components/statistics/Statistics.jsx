import PropTypes from 'prop-types';
export const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">Upload stats</h2>}

      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} class="item">
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape.isRequired).isRequired,
  id: PropTypes.number.isRequired,
  label: PropTypes.oneOf(['.docx', '.mp3', '.psd', '.pdf']).isRequired,
  percentage: PropTypes.number.isRequired,
};
