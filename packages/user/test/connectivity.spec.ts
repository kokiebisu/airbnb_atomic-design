import { Identifier } from "@4irbnb/common";
import { Email } from "../src/domains/fields";
import { Repository } from "../src/repos";
import { IRepository } from "../src/repos/types";

let repo: IRepository;

beforeAll(async () => {
  repo = await Repository.initialize();
  await repo.openConnection();
});

afterAll(async () => {
  await repo.closeConnection();
});

describe("Connectivity", () => {
  it("Finds by ID", async () => {
    const user = await repo.findById(new Identifier("1"));
    expect(user).not.toBeNull();
  });
  it("Finds by Email", async () => {
    const user = await repo.findByEmail(Email.create("kenichikona@gmail.com"));
    expect(user).not.toBeNull();
  });
});
