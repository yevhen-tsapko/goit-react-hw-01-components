import PropTypes from 'prop-types';
import {
  ProfContainer,
  Image,
  Name,
  Info,
  Statistics,
  Label,
  Quantity,
} from './Profile.styled';
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  const [formFollowers, formViews, formLikes] = [followers, views, likes].map(
    el =>
      new Intl.NumberFormat('en-US', {
        style: 'decimal',
      }).format(el)
  );
  return (
    <ProfContainer>
      <div>
        <Image src={avatar} alt={username} />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </div>

      <Statistics>
        <li>
          <Label>Followers</Label>
          <Quantity>{formFollowers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{formViews}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{formLikes}</Quantity>
        </li>
      </Statistics>
    </ProfContainer>
  );
};
Profile.protoTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
