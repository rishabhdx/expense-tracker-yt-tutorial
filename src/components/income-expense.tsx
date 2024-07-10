import { getIncomeExpense } from "@/app/actions/get-income-expense";

const IncomeExpense = async () => {
  const { expense, income } = await getIncomeExpense();

  return (
    <div className="w-full dark:bg-gray-900 bg-gray-200 flex divide-slate-800 divide-x-1 p-4 rounded">
      <div className="w-full p-4 flex items-center justify-center flex-col">
        <h3 className="text-lg font-semibold">Income</h3>
        <p className="font-mono text-2xl">
          ₹ {Number(income?.toFixed(2) || "0").toLocaleString()}
        </p>
      </div>
      <div className="w-full p-4 flex items-center justify-center flex-col">
        <h3 className="text-lg font-semibold">Expense</h3>
        <p className="font-mono text-2xl">
          ₹ {Number(expense?.toFixed(2) || "0").toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export { IncomeExpense };
