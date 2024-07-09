"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/db/client";
import { revalidatePath } from "next/cache";

interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

export async function addTransaction(
  formData: FormData
): Promise<TransactionResult> {
  const transactionValue = formData.get("text");
  const amountValue = formData.get("amount");

  if (!transactionValue || !amountValue) {
    return { error: "Transaction or amount is missing" };
  }

  const transaction = transactionValue.toString();
  const amount = parseFloat(amountValue.toString());

  // const user = await currentUser();
  const { userId } = auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const data = await prisma.transaction.create({
      data: {
        text: transaction,
        amount,
        userId: userId
      }
    });

    revalidatePath("/");

    return { data };
  } catch (error) {
    return { error: "Something went wrong. Transaction was not added" };
  }
}
