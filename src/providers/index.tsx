import { NextUIProvider } from "@nextui-org/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <NextUIProvider className="h-full">{children}</NextUIProvider>;
};

export { Providers };
