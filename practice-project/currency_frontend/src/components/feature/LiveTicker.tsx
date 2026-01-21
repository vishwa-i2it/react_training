import { useContext } from "react";
import { MoneyContext } from "../../context/MoneyContext";
import type { LiveTickerProps } from "../../types/Types";
import Card from "../ui/Card";

function LiveTicker({ assetName, priceData, isUpdating }: Readonly<LiveTickerProps>) {
  const { theme, currencySymbol } = useContext(MoneyContext);
  const cardBg =
    theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900";

  return (
    <Card
      className={`p-6 shadow-xl border-t-4 flex-col justify-items-center items-center ${
        true ? "border-green-500" : "border-red-500"
      } ${cardBg}`}
    >
      <div className="flex content-center mb-4">
        <div>
          <h3 className="text-gray-500 font-bold uppercase tracking-wider">
            {assetName}
          </h3>
          <span className="text-xs text-gray-400">Live Market Data</span>
        </div>
        <div
          className={`h-3 w-3 rounded-full ${
            isUpdating ? "bg-blue-500 animate-ping" : "bg-gray-300"
          }`}
        />
        <div />
      </div>

      <div className="mb-6 overflow-hidden">
        <h2 className={`font-extrabold tracking-tight whitespace-nowrap transition-all duration-300`}>
          {currencySymbol} {priceData?.value} {isUpdating}
        </h2>
      </div>
    </Card>
  );
}

export default LiveTicker;
