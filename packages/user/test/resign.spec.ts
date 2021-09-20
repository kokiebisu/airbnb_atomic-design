import { Email } from "../src/domains/fields";
import { RegisterCommand, ResignCommand } from "../src/commands";
import { Service } from "../src/services";
import { RegisterUseCase, ResignUseCase } from "../src/usecases";
import { Repository, Factory, user } from "./mock";

describe.skip("Resign", () => {
  const repository = new Repository();
  const data = { ...user };
  /**
   * Sets up one data in the database
   */
  beforeEach(async () => {
    const factory = new Factory();
    const service = new Service(repository);
    const register = new RegisterUseCase(factory, repository, service);

    const command = new RegisterCommand(
      data.firstName,
      data.lastName,
      data.email
    );
    await register.execute(command);
  });
  afterEach(async () => {
    await repository.cleanup();
  });
  it("is successful", async () => {
    let exceptionThrown = false;
    let foundUser = await repository.findByEmail(Email.create(data.email));
    expect(foundUser).not.toBeNull();

    const service = new Service(repository);
    const resign = new ResignUseCase(repository, service);

    const command = new ResignCommand(foundUser.id.toString());
    try {
      await resign.execute(command);
    } catch (err) {
      exceptionThrown = true;
    }

    foundUser = await repository.findById(foundUser.id);
    expect(foundUser).toBeNull();
    expect(exceptionThrown).toBeFalsy();
  });
});
