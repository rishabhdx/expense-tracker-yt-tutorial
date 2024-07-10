import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

import { checkUser } from "@/lib/check-user";

const Navbar = async () => {
  await checkUser();

  return (
    <nav className="w-full p-4 border-b border-gray-200 dark:border-gray-800 shadow">
      <ul className="max-w-2xl mx-auto flex items-center justify-between">
        <li>
          <h1 className="font-bold text-xl">Expense Tracker</h1>
        </li>
        <li>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link
              href="/sign-in"
              className="px-4 py-2 rounded font-medium bg-indigo-600 hover:bg-indigo-700 focus-visible::bg-indigo-800 outline-none"
            >
              Sign In
            </Link>
          </SignedOut>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
