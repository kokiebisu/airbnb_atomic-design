import { Repository, Factory, user } from "./mock";
import { RegisterUseCase } from "../src/usecases";
import { Service } from "../src/services";
import { RegisterCommand } from "../src/commands";
import { Email } from "../src/domains/fields";

describe.skip("Register", () => {
  it("is not successful with the '@' mark missing in the provided email", async () => {
    const data = { ...user, email: "noAtMark" };
    let exceptionThrown = false;
    const factory = new Factory();
    const repository = new Repository();
    const service = new Service(repository);
    const register = new RegisterUseCase(factory, repository, service);

    const command = new RegisterCommand(
      data.firstName,
      data.lastName,
      data.email
    );

    try {
      await register.execute(command);
    } catch (err) {
      exceptionThrown = true;
    }

    const foundUser = await repository.findByEmail(Email.create(data.email));
    expect(foundUser).toBeNull();
    expect(exceptionThrown).toBeTruthy();
  });

  it("is successful with all valid inputs", async () => {
    const data = { ...user };
    let exceptionThrown = false;

    const factory = new Factory();
    const repository = new Repository();
    const service = new Service(repository);
    const register = new RegisterUseCase(factory, repository, service);

    const command = new RegisterCommand(
      data.firstName,
      data.lastName,
      data.email
    );

    try {
      await register.execute(command);
    } catch (err) {
      exceptionThrown = true;
    }

    const foundUser = await repository.findByEmail(Email.create(data.email));

    expect(foundUser).not.toBeNull();
    expect(exceptionThrown).toBeFalsy();
  });
});
