import { IRepository } from "../../src/repos/types";
import { Identifier } from "@4irbnb/common";
import { Mapper } from "../../src/mapper";
import { Entity } from "../../src/domains";
import { IRawData } from "../../src/mapper/types";
import { Email } from "../../src/domains/fields";

export class Repository implements IRepository {
  store: { [key: string]: IRawData };
  public constructor() {
    this.store = {};
  }

  public async openConnection() {}

  public async closeConnection() {}

  public async findById(id: Identifier) {
    const target = Object.values(this.store).find(
      (data) => data.id === id.toString()
    );
    if (!target) {
      return null;
    }
    return Mapper.convertToEntityFromRaw(target);
  }

  public async findByEmail(email: Email) {
    const target = Object.values(this.store).find(
      (data) => data.email === email.getValue()
    );
    if (!target) {
      return null;
    }

    return Mapper.convertToEntityFromRaw(target);
  }

  public async save(entity: Entity) {
    const targetId = entity.id.toString();
    const rawData = Mapper.convertToRaw(entity);
    this.store[targetId] = rawData;
  }

  public async delete(entity: Entity) {
    const targetId = entity.id.toString();
    delete this.store[targetId];
  }

  public cleanup() {
    this.store = {};
  }
}
