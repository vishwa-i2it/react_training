import { useEffect, useState } from "react";
import Button from "./button";
import InputBox from "./input";
import { useQuery } from "@tanstack/react-query";
import type { ResultProps } from "../types/types";

const fetchCurrency = async (search: string) => {
  const res = await fetch(`http://localhost:3000/currency?country=${search}`);
  if (!res.ok) {
    throw new Error("Failed to fetch Currency");
  }
  return res.json();
};

export function Search({ onResult }: Readonly<ResultProps>) {
  const [search, setSearch] = useState("");

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["currency", search],
    queryFn: () => fetchCurrency(value),
    enabled: false,
  });

  useEffect(() => {
    console.log(data);
    onResult(data);
  }, [data, onResult]);

  const handleSearch = () => {
    setSearch(value);
    refetch();
  };

  const [value, setValue] = useState("");

  return (
    <>
      <InputBox name="Currency" value={value} setValue={setValue} />
      <Button name="search" onClick={handleSearch} />
      {isLoading && <p>Loading...</p>}
      {error instanceof Error && <p>{error.message}</p>}
    </>
  );
}
