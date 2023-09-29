describe("Real Mouseover", () => {
  beforeEach(() => {
    cy.visit("https://www.lambdatest.com/");
  });

  // Test case for accessibility
  it("Real mouse over", () => {
    cy.intercept("GET", "**").as("getRequests");
    cy.intercept("POST", "**").as("postRequests");

    cy.get(':nth-child(3) > .text-ltBlack-400').realHover().wait(3000);

    // Wait for all GET and POST requests to complete
    cy.wait(["@getRequests", "@postRequests"]).then((interceptions) => {
      const getRequests = interceptions.filter((interception) =>
        interception.request.method === "GET"
      );
      const postRequests = interceptions.filter((interception) =>
        interception.request.method === "POST"
      );

      cy.log(`Captured ${getRequests.length} GET requests`);
      cy.log(`Captured ${postRequests.length} POST requests`);
    });
  });
});
