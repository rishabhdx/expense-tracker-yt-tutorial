"use client";

import { deleteTransaction } from "@/app/actions/delete-transaction";

interface Transaction {
  id: string;
  text: string;
  amount: number;
  userId: string;
  createdAt: Date;
}

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const handleDeleteTransaction = async (id: string) => {
    const isConfirmed = confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (!isConfirmed) {
      return;
    }

    const { error, message } = await deleteTransaction(id);

    if (error) {
      alert(error);
      return;
    }

    alert(message);
  };

  return (
    <li key={transaction.id}>
      <div
        className={`w-full flex items-center justify-between p-4 dark:bg-gray-900 bg-gray-200 rounded-md border-l-4 ${
          transaction.amount > 0 ? "border-l-emerald-600" : "border-l-rose-600"
        }`}
      >
        <div className="flex items-center gap-4">
          <p className="font-medium text-foreground-600">{transaction.text}</p>
          <p className="font-mono">
            {transaction.amount > 0
              ? `₹${Number(transaction.amount.toFixed(2)).toLocaleString()}`
              : `₹${Number(
                  Math.abs(transaction.amount).toFixed(2)
                ).toLocaleString()}`}
          </p>
        </div>
        <button
          onClick={() => handleDeleteTransaction(transaction.id)}
          className="bg-red-500 text-sm font-medium text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export { TransactionItem };
