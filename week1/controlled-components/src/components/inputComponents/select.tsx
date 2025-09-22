type SelectProps = {
  label: string;
  selected: string;
  onChange: any;
  options: string[];
};

function SelectField({ label, selected, onChange, options = [] }: SelectProps) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>
        {label}:
        <select
          value={selected}
          onChange={onChange}
          style={{ marginLeft: "0.5rem" }}
        >
          <option value="" disabled>
            -- Select --
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SelectField;
