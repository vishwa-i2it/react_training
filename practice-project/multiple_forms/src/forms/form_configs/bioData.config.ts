export const bioDataFields = [
  { name: "firstName", label: "First Name", type: "text", required: true },
  { name: "lastName", label: "Last Name", type: "text", required: true },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    options: ["male", "female", "other"],
    required: true,
  },
  { name: "age", label: "Age", type: "number", required: true },
];
