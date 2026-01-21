import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useReducer } from "react";
import SearchBar from "./SearchBar";
import LiveTicker from "./LiveTicker";
import type {
  DashboardReducerAction,
  DashboardReducerState,
} from "../../types/Types";
import { useCurrencySocket } from "../../hooks/UseCurrencySoket";
import { useDebounce } from "../../hooks/UseDebounce";

const fetchCurrencyData = async (term: string) => {
  if (!term) return null;
  console.log(`Fetching Data for the symbol ${term}`);
  const response = await fetch(
    `http://localhost:3000/currency?country=${term}`
  );

  if (!response.ok) {
    const errorBody = await response.json();
    console.log(errorBody);
    throw new Error(errorBody.error || "Request failed");
  }
  return response.json();
};

const initialState = {
  query: "",
  currency: "USD",
  active: false,
  isLive: false,
};

function dashboardReducer(
  state: DashboardReducerState,
  action: DashboardReducerAction
) {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.payload, active: true, isLive: true };
    case "PAUSE":
      return { ...state, isLive: !state.isLive };
    case "RESET":
      return { ...state, active: false };
    default:
      return state;
  }
}

function Dashboard() {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);
  const value = useDebounce(state.query, state.query ? 1000 : 10);

  const handleSearch = useCallback((searchTerm: string) => {
    dispatch({ type: "SET_QUERY", payload: searchTerm });
  }, []);

  const { data, error, isLoading, isFetching, isError } = useQuery({
    queryFn: () => fetchCurrencyData(value),
    queryKey: ["currency", value],
    enabled: !!value && state.active,
    // refetchInterval: state.isLive ? 2000 : false,
    retry: false,
  });

  useCurrencySocket(value, state.isLive);

  useEffect(() => {
    
    if (isError) {
      console.log("Error ", error)
      dispatch({ type: "RESET" });
    }
  }, [isError, dispatch]);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Money Market Dashboard</h2>
        {
          <button
            onClick={() => dispatch({ type: "PAUSE" })}
            className={`px-3 py-1 rounded text-sm font-bold min-w-40 my-2 ${
              state.isLive
                ? "bg-red-100 text-red-500 hover:bg-red-200"
                : "bg-green-100 text-green-600 hover:bg-green-200"
            } ${
              !error && !isLoading && state.active && value
                ? "visible"
                : "invisible"
            }`}
          >
            {state.isLive ? "❚❚ Pause Updates" : "▶ Resume Live"}
          </button>
        }
        <SearchBar onSearch={handleSearch} searchValue={state.query} />
      </section>
      <section className="min-h-75">
        {value && isLoading && (
          <div className="p-4 bg-yellow-50 text-yellow-700 rounded">
            Searching for the {value}
          </div>
        )}
        {error ? (
          <div className="p-4 bg-red-100 text-red-700 rounded border border-red-200">
            {error.message}
          </div>
        ) : null}
        {data && (
          <LiveTicker
            assetName={value}
            priceData={data}
            isUpdating={isFetching}
          ></LiveTicker>
        )}
      </section>
    </div>
  );
}

export default Dashboard;
