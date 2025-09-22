import type { Address } from "./address";
import type { Company } from "./company";

interface User {
  id: number | string;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export type { User };
