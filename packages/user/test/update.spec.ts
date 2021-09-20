import { Email } from "../src/domains/fields";
import { RegisterCommand, UpdateCommand } from "../src/commands";
import { Service } from "../src/services";
import { RegisterUseCase, UpdateUseCase } from "../src/usecases";
import { Repository, Factory, user } from "./mock";

describe.skip("Update", () => {
  const factory = new Factory();
  const repository = new Repository();
  const data = { ...user };
  /**
   * Sets up one data in the database
   */
  beforeEach(async () => {
    const service = new Service(repository);
    const register = new RegisterUseCase(factory, repository, service);

    const command = new RegisterCommand(
      data.firstName,
      data.lastName,
      data.email
    );
    await register.execute(command);
  });
  it("is not successful with invalid email", async () => {
    let exceptionThrown = false;
    let foundUser = await repository.findByEmail(Email.create(data.email));
    expect(foundUser).not.toBeNull();

    const service = new Service(repository);
    const update = new UpdateUseCase(repository, service);

    const newEmail = "withNoAtMark";

    const command = new UpdateCommand(foundUser.id.toString(), newEmail);
    try {
      await update.execute(command);
    } catch (err) {
      exceptionThrown = true;
    }
    foundUser = await repository.findById(foundUser.id);
    expect(foundUser.email.getValue()).toEqual(data.email);
    expect(exceptionThrown).toBeTruthy();
  });
  it("is successful", async () => {
    let exceptionThrown = false;
    let foundUser = await repository.findByEmail(Email.create(data.email));
    expect(foundUser).not.toBeNull();

    const service = new Service(repository);
    const update = new UpdateUseCase(repository, service);

    const newEmail = "new_ben_parker@gmail.com";

    const command = new UpdateCommand(foundUser.id.toString(), newEmail);
    try {
      await update.execute(command);
    } catch (err) {
      exceptionThrown = true;
    }

    foundUser = await repository.findById(foundUser.id);
    expect(foundUser.email.getValue()).toEqual(newEmail);
    expect(exceptionThrown).toBeFalsy();
  });
});
