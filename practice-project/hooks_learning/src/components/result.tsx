import type { Result } from "../types/types";

export function Result({ data }: Readonly<Result>) {
  return (
    <>
      <div>
        <p>{JSON.stringify(data)}</p>
      </div>
      <div>
        <p>{JSON.stringify(data)}</p>
      </div>
    </>
  );
}
