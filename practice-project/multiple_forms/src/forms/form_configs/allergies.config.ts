export const allergyFields = [
  {
    name: "hasAllergies",
    label: "Do you have any allergies?",
    type: "select",
    options: ["yes", "no"],
  },
  {
    name: "allergyDetails",
    label: "Please specify allergies",
    type: "textarea",
    visibleWhen: (data: any) => data.hasAllergies === "yes",
  },
];
