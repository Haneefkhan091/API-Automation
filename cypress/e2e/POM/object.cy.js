import links from "../Pageobject/links";
describe("Real Mouseover", () => {
  beforeEach("visit", () => {
    cy.visit("https://ssstwitter.com/");
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });
  it("Log Stored Links", () => {
    const l1 = new links();
    l1.linkss();
  });
});
