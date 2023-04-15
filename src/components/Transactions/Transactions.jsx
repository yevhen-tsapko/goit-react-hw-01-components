import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableHead,
  TableRow,
  TransactionType,
} from './Transactions.styled';
export const Transactions = ({ transactions }) => (
  <TransactionTable>
    <TableHead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </TableHead>

    <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <TableRow key={id}>
          <TransactionType>{type}</TransactionType>
          <td>{amount}</td>
          <td>{currency}</td>
        </TableRow>
      ))}
    </tbody>
  </TransactionTable>
);
Transactions.prototype = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
