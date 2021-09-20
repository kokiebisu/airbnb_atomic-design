import { IBaseRepository } from "@4irbnb/common";
import { Entity } from "../domains";
import { Email } from "../domains/fields";

export interface IRepository extends IBaseRepository<Entity> {
  findByEmail(email: Email): Promise<Entity | null>;
}

export interface IRDSConfiguration {
  host: string;
  name: string;
  password: string;
  db_name: string;
}
