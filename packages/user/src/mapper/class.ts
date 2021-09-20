import { Identifier } from "@4irbnb/common";
import { Entity, Fields } from "../domains";
import { Email, FullName } from "../domains/fields";
import { DataTransferObject, IDataTransferObject } from "../dto";
import { IRawData } from "./types";

export class Mapper {
  /**
   * @public
   * @param entity
   */
  public static convertToRaw(entity: Entity) {
    return {
      id: entity.id.toString(),
      first_name: entity.fullName.getValue().firstName,
      last_name: entity.fullName.getValue().lastName,
      email: entity.email.getValue(),
    };
  }
  /**
   * @public
   * @param entity
   */
  public static convertToDTO(entity: Entity) {
    return new DataTransferObject(entity);
  }

  /**
   * @public
   * @param entity
   */
  public static convertToEntityFromDTO(data: IDataTransferObject) {
    if (!data.id) {
      throw new Error("id property missing");
    }
    if (!data.firstName) {
      throw new Error("firstName property missing");
    }
    if (!data.lastName) {
      throw new Error("lastName property missing");
    }
    if (!data.email) {
      throw new Error("email property missing");
    }
    return new Entity(new Identifier(data.id), {
      fullName: FullName.create(data.firstName, data.lastName),
      email: Email.create(data.email),
    });
  }

  /**
   * @public
   * @param entity
   */
  public static convertToEntityFromRaw(rawData: IRawData) {
    return new Entity(new Identifier(rawData.id), {
      fullName: Fields.FullName.create(rawData.first_name, rawData.last_name),
      email: Fields.Email.create(rawData.email),
    });
  }
}
