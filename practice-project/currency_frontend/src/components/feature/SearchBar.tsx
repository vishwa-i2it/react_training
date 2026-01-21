import Button from "../ui/Button";
import Input from "../ui/Input";
import type { SearchBarProps } from "../../types/Types";

function SearchBar({ searchValue, onSearch }: Readonly<SearchBarProps>) {
  const handleSubmit = () => {
    if (searchValue.trim()) {
      onSearch(searchValue);
    }
  };
  return (
    <div className="flex flex-row items-end gap-2 p-4 bg-gray-50 rounded-lg shadow-sm">
      <div className="grow">
        <Input
          value={searchValue}
          placeholder="e.g. USD, AUD"
          label="Search Asset"
          onChange={(e) => onSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
      </div>
      <div className="mb-3">
        <Button onClick={handleSubmit}>Search</Button>
      </div>
    </div>
  );
}

export default SearchBar;
