import { IBaseRepository } from "@4irbnb/common";
import { Entity } from "../domains";

export interface IRepository extends IBaseRepository<Entity> {
  findByEmail(email: string): Promise<Entity | null>;
}
