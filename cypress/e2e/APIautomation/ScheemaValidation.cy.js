import Ajv from "ajv";
const ajv = new Ajv();

describe("API Testing", () => {
  it("Validates JSON Schema", () => {
    cy.request("GET", "https://fakestoreapi.com/products").then((response) => {
      expect(response.status).to.eq(200); // Assert the response status code

      // Define the JSON schema
      const schema = {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "number" },
            title: { type: "string" },
            price: { type: "number" },
            description: { type: "string" },
            category: { type: "string" },
            rating: {
              type: "object",
              properties: {
                rate: { type: "number" },
                count: { type: "number" },
              },
              required: ["rate", "count"],
            },
          },
          required: ["id", "title", "price", "description", "category", "rating"],
        },
      };

      // Validate the response against the schema
      const validate = ajv.compile(schema);
      const isValid = validate(response.body);
      expect(isValid).to.be.true;
    });
  });
});
