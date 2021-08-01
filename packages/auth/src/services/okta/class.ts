import { Client } from "@okta/okta-sdk-nodejs";
import {
  IAuthService,
  IAuthServiceRegisterParams,
  IAuthServiceValidateTokenParams,
} from "../types";
import * as Verifier from "@okta/jwt-verifier";
import { createLogger, ILoggerService, PackageEnum } from "@nextbnb/common";

/**
 * Implementation of the AuthService using the Okta Client
 */
export class OktaService implements IAuthService {
  #client: any;
  #verifier: any;
  #logger: ILoggerService;

  /**
   * @public
   */
  constructor() {
    this.#logger = createLogger({
      packageName: PackageEnum.auth,
      className: "OktaService",
    });
  }

  /**
   * @public
   */
  private async configureClient() {
    if (!this.#client) {
      this.#client = new Client({});
    }
  }

  /**
   * @public
   */
  private async configureVerifier() {
    const issuer = "sdfa";
    if (!this.#verifier) {
      this.#verifier = new Verifier({
        issuer,
      });
    }
  }

  /**
   * @public
   * Okta's implemntation of validating the token
   * @param param0
   * @returns
   */
  async validateToken({ authorizationToken }: IAuthServiceValidateTokenParams) {
    await this.configureVerifier();
    /**
     * Okta validation
     */
    try {
      const jwt = await this.#verifier.verifyAccessToken(
        authorizationToken,
        "api://default"
      );
      return !!jwt;
    } catch (error) {
      this.#logger.error({
        location: "validateToken:verifyAccessToken",
        message: "jwt not returned",
      });
      return false;
    }
  }

  /**
   * Okta's implementation of registering users
   * @param param0
   * @returns
   */
  async register({
    firstName,
    lastName,
    birthYear,
    birthMonth,
    birthDay,
    email,
    password,
  }: IAuthServiceRegisterParams) {
    await this.configureClient();
    const newUser = {
      profile: {
        firstName,
        lastName,
        email,
        login: email,
        birthYear,
        birthMonth,
        birthDay,
      },
      credentials: {
        password: {
          value: password,
        },
      },
    };
    try {
      const user = await this.#client.createUser(newUser);
      return user;
    } catch (error) {
      this.#logger.error({
        location: "register:createUser",
        message: error as string,
      });
      return null;
    }
  }

  /**
   * @public
   * Okta's implementation of logging in users
   */
  async login() {
    await this.configureClient();
  }
}
