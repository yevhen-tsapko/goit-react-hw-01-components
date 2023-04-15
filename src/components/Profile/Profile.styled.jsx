import styled from 'styled-components';
export const ProfContainer = styled.div`
  width: 60%;
  margin: 15px auto 15px auto;
  border-radius: 10px;
  background-color: #fff;
  padding-top: 50px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.25);
`;
export const Image = styled.img`
  width: 50%;
  margin: 0 auto 20px auto;
  border-radius: 50%;
  text-align: center;
`;
export const Name = styled.p`
  font-weight: 700;
  font-size: 32px;
  margin-top: 50px;

  text-align: center;
`;
export const Info = styled.p`
  font-weight: 500;
  margin-top: 20px;
  font-size: 24px;
  text-align: center;
  color: #212121;
`;
export const Statistics = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  margin-top: 40px;
  // padding: 50px;
  font-weight: 500;
  background-color: #68acc1;
  height: 100px;
  font-size: 20px;
  text-align: center;
  color: #212121;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    align-items: center;
    height: 100%;
    border: 1px solid #555757;
  }
`;

export const Label = styled.span`
  display: block;
`;

export const Quantity = styled.span`
  font-weight: 700;
  color: black;
`;
