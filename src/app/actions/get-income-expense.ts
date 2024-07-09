"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/db/client";

export async function getIncomeExpense() {
  const { userId } = auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const transactions = await prisma.transaction.findMany({
      where: {
        userId: userId
      }
    });

    const income = transactions
      .filter(transaction => transaction.amount > 0)
      .reduce((acc, transaction) => {
        return acc + transaction.amount;
      }, 0);

    const expense = transactions
      .filter(transaction => transaction.amount < 0)
      .reduce((acc, transaction) => {
        return acc + Math.abs(transaction.amount);
      }, 0);

    return { income, expense };
  } catch (error) {
    return { error: "Something went wrong. Income and Expense not found" };
  }
}
