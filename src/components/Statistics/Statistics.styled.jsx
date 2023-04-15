import styled from 'styled-components';

export const StatisticSect = styled.div`
  width: 80%;
  margin: 40px auto 40px auto;
  padding: 30px;
  font-weight: 500;

  font-size: 20px;
  text-align: center;
  color: #fff;
`;
export const StatTitle = styled.h2`
  padding: 40px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 42px;
  background-color: #fff;
  color: #9da1a1;
`;
export const StatList = styled.ul`
  display: grid;
  grid-template-columns: repeat(${p => p.columnsNumber}, 1fr);
  font-weight: 300;
  font-size: 24px;
  text-align: center;
`;
export const StatItem = styled.li`
  // width: 20%;

  padding: 20px;
  background-color: ${p => p.itemColor};
`;
export const Label = styled.span`
  display: block;
  margin-bottom: 10px;
`;
export const Percentage = styled.span`
  font-size: 28px;
  font-weight: 700;
`;
