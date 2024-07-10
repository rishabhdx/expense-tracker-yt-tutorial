"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/db/client";

export async function getTransactions() {
  const { userId } = auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const transactions = await prisma.transaction.findMany({
      where: {
        userId: userId
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    return { transactions };
  } catch (error) {
    return { error: "Something went wrong. Income and Expense not found" };
  }
}
