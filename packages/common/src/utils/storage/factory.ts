import { StorageService } from "./class";
import { S3 } from "./s3";

export const createStorageService = () =>
  new StorageService({ service: new S3({ region: "us-east-1" }) });
