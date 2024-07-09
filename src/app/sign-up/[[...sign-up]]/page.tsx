import { ClerkLoading, SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen gap-4">
      <h1 className="max-w-2xl text-4xl font-semibold">Sign Up</h1>
      <p className="text-muted-foreground">Create a new account</p>
      <ClerkLoading>
        <div className="w-[400px] h-[450px] rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
      </ClerkLoading>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
