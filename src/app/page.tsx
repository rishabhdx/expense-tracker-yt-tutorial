import { currentUser } from "@clerk/nextjs/server";

import { AddTransaction } from "@/components/add-transaction";
import { IncomeExpense } from "@/components/income-expense";
import { Overview } from "@/components/overview";
import { TransactionHistory } from "@/components/transaction-history";
import { GuestPage } from "@/components/guest-page";

const Homepage = async () => {
  const user = await currentUser();

  if (!user) {
    return <GuestPage />;
  }

  return (
    <div className="w-full flex flex-col gap-8 my-8">
      <h2 className="text-lg font-medium">Welcome {user.firstName}!</h2>

      <Overview />

      <IncomeExpense />

      <AddTransaction />

      <TransactionHistory />
    </div>
  );
};

export default Homepage;
