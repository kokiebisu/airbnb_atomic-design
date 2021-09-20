import { Identifier, InternalError } from "@4irbnb/common";
import { Client, ClientConfig } from "pg";
import { Fields } from "../domains";
import { Mapper } from "../mapper";
import { IRepository } from "./types";
import { RDSClient, DescribeDBInstancesCommand } from "@aws-sdk/client-rds";
import { DB_INSTANCE_IDENTIFIER } from "../config";
import { ManagerService } from "@4irbnb/manager";

export class Repository implements IRepository {
  #pgClient: Client;
  public constructor(dbConfig: ClientConfig) {
    this.#pgClient = new Client(dbConfig);
  }

  public static async initialize() {
    const rdsClient = new RDSClient({ region: "us-east-1" });

    try {
      const { DBInstances } = await rdsClient.send(
        new DescribeDBInstancesCommand({
          DBInstanceIdentifier: DB_INSTANCE_IDENTIFIER,
        })
      );
      if (!DBInstances) {
        throw new InternalError({
          location: "initialize:{!DBClusters}",
          message: "DBClusters not fetched",
        });
      }
      const targetInstance = DBInstances.find(
        (instance: any) =>
          instance.DBInstanceIdentifier === DB_INSTANCE_IDENTIFIER
      );

      if (!targetInstance) {
        throw new InternalError({
          location: "initialize:{!targetInstance}",
          message: "targetInstance not fetched",
        });
      }

      const host = targetInstance.Endpoint?.Address;
      const port = targetInstance.Endpoint?.Port;

      const manager = ManagerService.initialize({
        serviceName: "user",
        region: "us-east-1",
      });
      const user = await manager.get({ key: "dbUsername" });
      if (!user) {
        throw new InternalError({
          location: "initialize:{!dbUsername}",
          message: "dbUsername not fetched",
        });
      }
      const password = await manager.get({ key: "dbPassword" });
      if (!password) {
        throw new InternalError({
          location: "initialize:{!dbPassword}",
          message: "dbPassword not fetched",
        });
      }

      const dbConfig = {
        host,
        port,
        user,
        password,
      };

      console.log("CONFIG", dbConfig);

      return new Repository(dbConfig);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  public async openConnection() {
    try {
      if (this.#pgClient) {
        await this.#pgClient.connect();
      }
    } catch (err: any) {
      console.error("connection error", err.stack);
    }
  }

  public async closeConnection() {
    try {
      await this.#pgClient.end();
    } catch (err: any) {
      console.error("error during disconnection", err.stack);
    }
  }

  public async findById(id: Identifier) {
    const query = {
      name: "fetch-user-by-id",
      text: `SELECT * FROM "user" WHERE id = $1`,
      values: [parseInt(id.toString())],
    };
    try {
      const res = await this.#pgClient.query(query);
      const data = res.rows[0];
      return Mapper.convertToEntityFromRaw(data);
    } catch (err) {
      console.error("CATCH", err);
      return null;
    }
  }

  public async findByEmail(email: Fields.Email) {
    const query = {
      name: "fetch-user-by-email",
      text: `SELECT * FROM "user" WHERE email = $1`,
      values: [email.getValue()],
    };
    try {
      const res = await this.#pgClient.query(query);
      const data = res.rows[0];
      return Mapper.convertToEntityFromRaw(data);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  public async save() {}

  public async delete() {}
}
