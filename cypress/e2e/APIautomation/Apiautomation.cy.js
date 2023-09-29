describe("API Testing with Cypress", () => {
  it("Should make an API request", () => {
    cy.request("GET", "https://reqres.in/api/users?page=2")
      .its("status")
      .should("equal", 200);
  });
  it("Should perform a login request and store the token", () => {
    const credentials = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };

    cy.request("POST", `https://reqres.in/api/login`, credentials).then(
      (response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("token");

        // Store the token in test context
        cy.wrap(response.body.token).as("authToken");

        // Log the token to the console
        cy.log("Authentication token:", response.body.token);
      }
    );
  });

  //Post call
  it("Should delete a post", () => {
    // const postId = 2;

    cy.request("DELETE", `https://reqres.in/api/users/2`)
      .its("status")
      .should("equal", 204);
  });
  it("Should make a POST request", () => {
    const requestBody = {
      name: "morpheus",
      job: "leader",
    };
    //Post request
    cy.request({
      method: "POST",
      url: `https://reqres.in/api/users`,
      body: requestBody,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).to.have.property("id");
      expect(response.body.name).to.equal(requestBody.name);
      expect(response.body.email).to.equal(requestBody.email);
      expect(response.body.role).to.equal(requestBody.role);
    });
  });
});
