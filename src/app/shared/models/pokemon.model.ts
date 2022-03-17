import { Type } from "./type.model";

export interface Pokemon {
  id: number;
  name: string;
  order: number;
  experience: number;
  types: Array<Type>;
  image: string;
  height: number;
  weight: number;
}