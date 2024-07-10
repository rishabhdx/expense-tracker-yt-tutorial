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
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Enter expense"
          className="p-4 rounded border border-gray-200 dark:border-gray-800 outline-none focus-visible:border-blue-500 focus-visible:dark:border-blue-600 transition-all duration-200 ease-in-out placeholder-gray-500 dark:placeholder-gray-600"
        />
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="Enter amount"
          className="p-4 rounded border border-gray-200 dark:border-gray-800 outline-none focus-visible:border-blue-500 focus-visible:dark:border-blue-600 transition-all duration-200 ease-in-out placeholder-gray-500 dark:placeholder-gray-600"
        />
        <button className="p-4 rounded font-medium bg-indigo-600 hover:bg-indigo-700 focus-visible::bg-indigo-800 outline-none">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export { AddTransaction };
