"use client";

import { addTransaction } from "@/app/actions/add-transaction";
import { useRef } from "react";

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const formSubmitAction = async (formData: FormData) => {
    console.log("Form data", formData.get("text"), formData.get("amount"));

    const { data, error } = await addTransaction(formData);

    if (error) {
      alert(error);
    }

    if (data) {
      alert("Transaction added successfully");

      console.log("Transaction added", data);
      formRef.current?.reset();
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold border-b border-gray-200 dark:border-gray-800 pb-2">
        Add new transcation
      </h3>
      <form
        ref={formRef}
        className="flex flex-col gap-4 mt-4"
        action={formSubmitAction}
      >
        <input type="text" name="text" id="text" placeholder="Enter expense" />
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="Enter amount"
        />
        <button>Add Transaction</button>
      </form>
    </div>
  );
};

export { AddTransaction };
