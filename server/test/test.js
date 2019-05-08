import supertest from "supertest";
// eslint-disable-next-line no-unused-vars
import should from "should";

let server = supertest.agent("http://localhost:3000");

describe("Phone Number Generator", () => {
  it("should return 200", (done) => {
    server
      .get("/api/")
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it("should return 404 for endpoint not found", (done) => {
    server
      .get("/not-exist")
      .expect(404)
      .end((err, res) => {
        res.text.should.equal('{"status":"Error","message":"Sorry, resource not found"}');
        res.status.should.equal(404);
        done();
      });
  });

  it("should return 200 for generate-numbers endpoint", (done) => {
    server
      .get("/api/generate-numbers")
      .expect(200)
      .end((err, res) => {
        (res.body.length).should.be.above(20);
        res.status.should.equal(200);
        done();
      });
  });
});

