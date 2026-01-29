import type { Props } from "../types/types";

export const FormRenderer = ({ fields, register, errors, formData }: Props) => {
  return (
    <>
      {fields.map((field) => {
        const visible = field.visibleWhen ? field.visibleWhen(formData) : true;
        if (!visible) return null;

        return (
          <div key={field.label + "_key"}>
            <label>
              {field.label} {field.required && " *"}
            </label>

            {field.type === "text" && <input {...register(field.name)} />}
            {field.type === "number" && (
              <input
                type="number"
                {...register(field.name, { valueAsNumber: true })}
              />
            )}

            {field.type === "textarea" && (
              <textarea {...register(field.name)} />
            )}

            {field.type === "select" && (
              <select {...register(field.name)}>
                <option value="">Select</option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}

            {field.type === "checkbox" && (
              <input type="checkbox" {...register(field.name)} />
            )}

            {errors[field.name] && (
              <p style={{ color: "red" }}>
                {String(errors[field.name]?.message)}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
};
