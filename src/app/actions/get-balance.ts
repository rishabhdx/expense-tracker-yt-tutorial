"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/db/client";

export async function getBalance(): Promise<{
  balance?: number;
  error?: string;
}> {
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

    const balance = transactions.reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);

    return { balance };
  } catch (error) {
    return { error: "Something went wrong. Balance not found" };
  }
}
