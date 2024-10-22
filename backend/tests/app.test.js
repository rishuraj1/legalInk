import request from "supertest";
import * as chai from "chai";
import app from "../src/app.js";

const expect = chai.expect;

describe("GET /api/hello", () => {
  it("should return a hello message", (done) => {
    request(app)
      .get("/api/hello") // assuming this is the route you want to test
      .expect(200) // expect HTTP 200 response
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).to.equal("Hello, world!");
        done();
      });
  });
});
