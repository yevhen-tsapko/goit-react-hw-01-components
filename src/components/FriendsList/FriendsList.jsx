import PropTypes from 'prop-types';
import {
  ListOfFriends,
  FriendCard,
  Status,
  Avatar,
} from './FriendsList.styled';
export const FriendsList = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendCard key={id}>
          <Status statusColor={isOnline ? 'green' : 'red'}></Status>
          <Avatar src={avatar} alt="User avatar" />
          <p class="name">{name}</p>
        </FriendCard>
      ))}
    </ListOfFriends>
  );
};
FriendsList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
