describe("Real Mouseover", () => {
    let storedLinks; // Variable to store the links
  
    beforeEach(() => {
      // cy.intercept("**").as("requests");
      cy.visit("https://ssstwitter.com/");
      cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
      // cy.get("@requests.all");
  
      cy.get("#main_page_text").type(
        "https://twitter.com/EUPakistan/status/1678005216879292419"
      );
      cy.get('#submit').should('contain.text','Download').click({force:true})
      
      cy.get(".result_overlay>a").then(($links) => {
        const linksArray = [];
  
        $links.each((index, element) => {
          const hrefValue = Cypress.$(element).attr("href");
          const textValue = Cypress.$(element).text().trim();
          const formattedLink = `${textValue}: ${hrefValue}`;
          linksArray.push(formattedLink);
        });
  
        // Store the links in the variable
        storedLinks = linksArray.join('\n');
      });
    });
  
    // Test case to log the stored links
    it("Log Stored Links", () => {
      // Access the stored links
      cy.log(storedLinks);
    });
  });
  