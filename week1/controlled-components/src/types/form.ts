import type { Dayjs } from "dayjs";

type FormData = {
  name: string;
  email: string;
  gender: "Male" | "Female" | "Other";
  status: "Active" | "Inactive";
  intrests: string;
  age: number;
  bio: string;
  newsletter: boolean;
  skills: string[];
  birthDate: Dayjs | null;
  country: string;
};

export type { FormData };
