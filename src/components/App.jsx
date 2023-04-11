import PropTypes from 'prop-types';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import user from './user.json';
import data from './data.json';
export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
App.protoTypes = {
  user: PropTypes.shape.isRequired,
};
