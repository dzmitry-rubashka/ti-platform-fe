import fetch from "jest-fetch-mock";
import { ApiCommon } from "./apiCommon";

describe("ApiCommon component", () => {
  test("should correctly fetch users data", async () => {
    const data = fetch(JSON.stringify(await ApiCommon.get({ path: "users" })));
    data.then((response) => {
      expect(response.status).toBe(200);
    });
  });
  test("should correctly fetch error", async () => {
    const data = fetch(JSON.stringify(await ApiCommon.get({ path: "userss" })));
    data.catch((error) => {
      expect(error).toBe(error.message);
    });
  });
});
