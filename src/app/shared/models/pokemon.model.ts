import { Type } from "./type.model";

export class Pokemon {
  id: number | undefined;
  name: string | undefined;
  order: number | undefined;
  experience: number | undefined;
  types: Array<Type> = [];
  image: string | undefined;
  height: number | undefined;
  weight: number | undefined;
}
