describe('JSON Parsing Test Suite', () => {
    it("JSON parsing", () => {
      cy.request("GET", "https://fakestoreapi.com/products").then((response) => {
        expect(response.status).to.eq(200); // Assert the response status code
  
        const products = response.body;
        expect(products).to.be.an("array"); // Assert that the response body is an array
  
        const firstProduct = products[0];
        expect(firstProduct).to.have.property("id", 1); // Assert the id property of the first product
        expect(firstProduct).to.have.property("title").that.is.a("string"); // Assert the title property of the first product as a string
        expect(firstProduct).to.have.property("price").that.is.a("number"); // Assert the price property of the first product as a number
        expect(firstProduct).to.have.property("description").that.is.a("string"); // Assert the description property of the first product as a string
        expect(firstProduct).to.have.property("category", "men's clothing"); // Assert the category property of the first product
  
        // ... Add more assertions for other properties if needed
  
        // Assert the rating property of the first product
        expect(firstProduct).to.have.property("rating").that.is.an("object");
        const rating = firstProduct.rating;
        expect(rating).to.have.property("rate").that.is.a("number");
        expect(rating).to.have.property("count").that.is.a("number");
      });
    });
  });
  