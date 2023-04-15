import styled from 'styled-components';
export const TransactionTable = styled.table`
  width: 80%;
  margin: 0 auto 15px auto;
  background-color: #fff;
  border-collapse: collapse;
  font-weight: 200;

  font-size: 16px;
  text-align: center;
  color: ${p => p.theme.color.tableColor};
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
  th,
  td {
    border: 1px solid ${p => p.theme.color.tableColor};
  }
`;

export const TableHead = styled.thead`
  background-color: #3c8a8a;
  height: 40px;
  color: #fff;
`;

export const TableRow = styled.tr`
  height: 40px;
  &:nth-child(2n) {
    background-color: #eceded;
  }
`;
export const TransactionType = styled.td`
text-transform:  capitalize;
text-align: start;
padding-left: 16%;

  }
`;
