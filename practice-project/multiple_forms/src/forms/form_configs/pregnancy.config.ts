export const pregnancyFields = [
  {
    name: "isPregnant",
    label: "Are you currently pregnant?",
    type: "select",
    options: ["yes", "no"],
    visibleWhen: (data: any) => data.gender === "female",
  },
];
