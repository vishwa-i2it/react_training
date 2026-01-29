export const sexualHealthFields = [
  {
    name: "erectileDysfunction",
    label: "Do you experience erectile dysfunction?",
    type: "select",
    options: ["yes", "no"],
    visibleWhen: (data: any) => data.gender === "male",
  },
];
