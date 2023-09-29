describe("Real Mouseover", () => {
  beforeEach(() => {
    // cy.intercept("**").as("requests");
    cy.visit("https://ssstwitter.com/");
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    // cy.get("@requests.all");
  });

  // Test case for accessibility
  it("Downloading", () => {
    cy.get("#main_page_text").type(
      "https://twitter.com/EUPakistan/status/1678005216879292419"
    );
    cy.get('#submit').should('contain.text','Download').click({force:true})
    
    cy.get(".result_overlay>a").realHover('Mouseover').each(($link) => {
      const hrefValue = $link.attr("href");
      const textValue = $link.text().trim();
      const formattedLink = `${textValue}: ${hrefValue}`;
      cy.log(formattedLink);
    });
  });
});
