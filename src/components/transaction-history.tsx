const TransactionHistory = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">History</h3>
      <ul className="flex flex-col gap-4">
        <li>
          <div className="w-full flex items-center justify-between p-4 dark:bg-gray-900 bg-gray-200 rounded-md border-r-4 border-r-emerald-600">
            <p className="font-medium text-foreground-600">Item</p>
            <p className="font-mono">+ ₹ 500</p>
          </div>
        </li>
        <li>
          <div className="w-full flex items-center justify-between p-4 dark:bg-gray-900 bg-gray-200 rounded-md border-r-4 border-r-rose-600">
            <p className="font-medium text-foreground-600">Item</p>
            <p className="font-mono">+ ₹ 500</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export { TransactionHistory };
