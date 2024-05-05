import request from "supertest";

import router from "../../src/routes/healthRoutes";

describe("Test app.ts", () => {
  test("Catch-all route", async () => {
    const res = await request(router).get("/health");
    expect(res.body).toEqual({ message: "Allo! Catch-all route." });
  });
});
