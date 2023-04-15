import styled from 'styled-components';
export const ListOfFriends = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
  margin-left: 20px;
`;
export const FriendCard = styled.li`
  display: flex;
  padding-left: 24px;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  gap: 20px;
  width: 400px;
  height: 120px;
  font-size: 28px;
  font-weight: 700;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.25);
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => p.statusColor};
`;
export const Avatar = styled.img`
  width: 60px;
  // height: 30px;
  // border-radius: 50%;
  // background-color: ${p => p.statusColor};
`;
