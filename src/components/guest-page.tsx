import Link from "next/link";

const GuestPage = () => {
  return (
    <div className="h-full w-full flex items-center justify-center flex-col gap-4 text-center">
      <h1 className="text-4xl font-bold">Welcome to Expense Tracker</h1>
      <p className="text-gray-700 dark:text-gray-400 font-medium text-lg">
        This is a simple expense tracker application built with Next.js, Neon,
        Prisma and Clerk.
      </p>
      <Link
        href="/sign-up"
        className="px-4 py-2 rounded font-medium bg-indigo-600 hover:bg-indigo-700 focus-visible::bg-indigo-800 outline-none"
      >
        Sign up to get started
      </Link>
    </div>
  );
};

export { GuestPage };
