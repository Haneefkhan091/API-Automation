
describe('API Testing', () => {
    beforeEach(() => {
      cy.request({
        method: 'POST',
        url: 'https://api.example.com/oauth/token',
        form: true,
        body: {
          grant_type: 'client_credentials',
          client_id: 'your-client-id',
          client_secret: 'your-client-secret'
        }
      }).then((response) => {
        // Extract the access token from the response
        const accessToken = response.body.access_token;
  
        // Set the access token as a bearer token in the Cypress configuration
        Cypress.env('accessToken', accessToken);
      });
    });
  
    it('should test API with OAuth 2.0 authentication', () => {
      // Make an authenticated API request using the access token
      cy.request({
        method: 'GET',
        url: 'https://api.example.com/endpoint',
        headers: {
          Authorization: `Bearer ${Cypress.env('accessToken')}`
        }
      }).then((response) => {
        // Perform assertions on the response
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('data');
  
        // You can add more assertions based on the response data
  
      });
    });
  
    // ...
  });
  