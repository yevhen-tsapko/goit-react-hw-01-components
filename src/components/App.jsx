import PropTypes from 'prop-types';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendsList/FriendsList';
import { Transactions } from 'components/Transactions/Transactions';
import { GlobalStyle } from 'components/GlobalStyle';
import user from 'components/user.json';
import data from 'components/data.json';
import friends from './friends';
import transactions from './transactions';
export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Profile {...user} />
      <Statistics stats={data} title />
      <FriendsList friends={friends}></FriendsList>
      <Transactions transactions={transactions}></Transactions>
    </div>
  );
};
App.protoTypes = {
  user: PropTypes.shape.isRequired,
};
