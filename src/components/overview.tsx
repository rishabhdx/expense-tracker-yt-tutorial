import { getBalance } from "@/app/actions/get-balance";

const Overview = async () => {
  const { balance } = await getBalance();

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Your balance:</h3>
      <p className="font-mono text-2xl">
        ₹ {Number(balance?.toFixed(2) || "0").toLocaleString()}
      </p>
    </div>
  );
};

export { Overview };
