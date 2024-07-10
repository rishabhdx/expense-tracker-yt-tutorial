import { getTransactions } from "@/app/actions/get-transactions";
import { TransactionItem } from "./transaction-item";

const TransactionHistory = async () => {
  const { transactions, error } = await getTransactions();

  if (error) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!transactions) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold border-b border-gray-200 dark:border-gray-800 pb-2">
        History
      </h3>
      <ul className="flex flex-col gap-4 mt-4">
        {transactions.map(transaction => {
          return (
            <TransactionItem key={transaction.id} transaction={transaction} />
          );
        })}
      </ul>
    </div>
  );
};

export { TransactionHistory };
