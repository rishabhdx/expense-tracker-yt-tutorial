import { SignIn, ClerkLoading } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4">
      <h1 className="max-w-2xl text-4xl font-semibold">Sign In</h1>
      <p className="text-muted-foreground">Sign in to your existing account</p>
      <ClerkLoading>
        <div className="w-[400px] h-[450px] rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
      </ClerkLoading>
      <SignIn />
    </div>
  );
};

export default SignInPage;
