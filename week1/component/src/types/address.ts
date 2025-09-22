import type { Geo } from "./geo";

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export type { Address };
