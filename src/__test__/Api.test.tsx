import axios, { AxiosResponse } from "axios";
import { beforeAll } from "vitest";

const BEFORE_ALL_TIMEOUT = 30000;

describe("Request API", () => {
  let body: AxiosResponse;

  beforeAll(async () => {
    const response = await axios.get(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    );
    body = response;
  }, BEFORE_ALL_TIMEOUT);

  test("Should have response status 200", () => {
    expect(body.status).toBe(200);
  });

  test("The first item in array should contain Rake in title key", () => {
    expect(body?.data?.entries?.[0]?.title).to.have.string("Rake");
  });
});
