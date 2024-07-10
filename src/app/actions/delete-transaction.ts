"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/db/client";
import { revalidatePath } from "next/cache";

export async function deleteTransaction(transactionId: string) {
  const { userId } = auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const transaction = await prisma.transaction.findUnique({
      where: {
        id: transactionId,
        userId: userId
      }
    });

    if (!transaction) {
      return { error: "Transaction not found" };
    }

    await prisma.transaction.delete({
      where: {
        id: transactionId
      }
    });

    revalidatePath("/");

    return { message: "Transaction deleted successfully" };
  } catch (error) {
    return { error: "Something went wrong. Income and Expense not found" };
  }
}
