import { createLoggerService, PackageEnum } from "@4irbnb/common";
import { UserController } from ".";

export const handler = async (event: any) => {
  const controller = new UserController({ region: "us-east-1" });
  const logger = createLoggerService({
    packageName: PackageEnum.stay,
    className: "",
  });
  logger.log({ location: "handler", message: "Entered handler..." });
  console.log("EVENT", event);
  try {
    switch (event.requestContext.resourceId) {
      // case "GET /stay/{id}":
      // logger.log({
      //   location: "handler",
      //   message: "Entered GET /stay/{id}...",
      // });
      // return await controller.get({
      //   identifier: {
      //     id: event.pathParameters.id,
      //   },
      // })
      case "GET /user/check":
        logger.log({
          location: "handler",
          message: "Entered GET /user/check...",
        });
        return await controller.checkIfExistsByEmail({
          identifier: {
            email: event.queryStringParameters.email,
          },
        });
      default:
        throw new Error(
          `Unsupported route: "${event.requestContext.resourceId}"`
        );
    }
  } catch (error: any) {
    logger.error({ location: "handler", message: error.message });
    return {
      statusCode: 400,
      "Content-Type": "application/json",
      body: error.message as string,
    };
  }
};
