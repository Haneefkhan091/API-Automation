// cypress/integration/apiTests.spec.js
describe("API Testing", () => {
  // Basic Authentication
  it("should test API with Basic Authentication", () => {
    cy.request({
      method: "GET",
      url: "https://postman-echo.com/basic-auth",
      auth: {
        username: "postman",
        password: "password",
      },
    }).then((response) => {
      // Perform assertions on the response
      expect(response.status).to.eq(200);
      expect(response.body.authenticated).to.eq(true);
      // ...
    });
  });

  //     // Digest Authentication
  it("should test API with Digest Authentication", () => {
    cy.request({
      method: "GET",
      url: "https://postman-echo.com/basic-auth",
      auth: {
        username: "postman",
        password: "password",
      },
    }).then((response) => {
      // Perform assertions on the response
      expect(response.status).to.eq(200);
      expect(response.body.authenticated).to.eq(true);
      // ...
    });
  });

  //     // Bearer Token Authentication
  it("should test API with Bearer Token Authentication", () => {
    cy.request({
      method: "GET",
      url: "https://api.github.com/user/repos",
      headers: {
        Authorization: "Bearer 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",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
      expect(response.body).to.have.length(8);

      expect(response.body[0]).to.have.property("id", 650602980);
      expect(response.body[0]).to.have.property("name", "automation.cy");
      expect(response.body[0]).to.have.property(
        "full_name",
        "Haneefkhan091/automation.cy"
      );
      expect(response.body[0]).to.have.property("private", true);

      expect(response.body[0].owner).to.be.an("object");
      expect(response.body[0].owner).to.have.property("login", "Haneefkhan091");
      // expect(response.body[0].owner).to.have.property('id', 659081793);
      expect(response.body[0].owner).to.have.property(
        "avatar_url",
        "https://avatars.githubusercontent.com/u/96904344?v=4"
      );

      // expect(response.body[1]).to.have.property('id', 556830389);
      expect(response.body[1]).to.have.property("name", "CypressAAutomtion");
      expect(response.body[1]).to.have.property(
        "full_name",
        "Haneefkhan091/CypressAAutomtion"
      );
      expect(response.body[1]).to.have.property("private", false);

      expect(response.body[1].owner).to.be.an("object");
      expect(response.body[1].owner).to.have.property("login", "Haneefkhan091");
      // expect(response.body[1].owner).to.have.property('id', 96904344);
      expect(response.body[1].owner).to.have.property(
        "avatar_url",
        "https://avatars.githubusercontent.com/u/96904344?v=4"
      );
    });
  });

  //     // API Key Authentication
  it("should test API with API Key Authentication", () => {
    cy.request({
      method: "GET",
      url: "api.openweathermap.org/data/2.5/forecast/daily?q=Delhi",
      qs: {
        appid: "fe9c5cddb7e01d747b4611c3fc9eaf2c", //Api key and value
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
