describe("Testing ", function () {
  it("Should make a GET request", () => {
    const authToken =
      "c8ec351923bad662f47f767b6c3b23fc56ed7978ea2ab9f4c5cf7a041d171be7";

    cy.request({
      method: "GET",
      url: `https://gorest.co.in/public/v2/users`,
      headers: {
        Authorization: "Bearer " + authToken,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body).to.have.length(10);
    });
  });
  it("Should make a POST request", () => {
    const authToken =
      "c8ec351923bad662f47f767b6c3b23fc56ed7978ea2ab9f4c5cf7a041d171be7";

    // Generate a unique email using the current timestamp
    const timestamp = new Date().getTime();
    const email = `test${timestamp}@example.com`;

    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization: "Bearer " + authToken,
      },
      body: {
        name: "Tenali Ramakrishna",
        gender: "male",
        email: email,
        status: "active",
      },
    }).then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.status).to.eq(201);

      // Add your assertions for the response as needed
    });
  });
});
