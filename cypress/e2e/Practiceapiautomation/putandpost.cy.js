it("Put and post request difference", () => {
  // Perform PUT request
  cy.request({
    method: "PUT",
    url: "https://reqres.in/api/users/2",
    body: {
      name: "morpheus",
      job: "zion resident",
    },
  }).then((putResponse) => {
    cy.log(JSON.stringify(putResponse))
    // Handle the response
    expect(putResponse.status).to.equal(200); // Assert the response status code
    // Additional assertions or validations for PUT request


    // Perform POST request
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: {
        name: "morpheus",
        job: "leader",
      },
    }).then((postResponse) => {
      // Handle the response
      cy.log(JSON.stringify(postResponse))
      expect(postResponse.status).to.equal(201); // Assert the response status code
      // Additional assertions or validations for POST request


      cy.request({
        method: "DELETE",
        url: "https://reqres.in/api/users/2",

      })
    }).then((deleteresponse)=>{
      expect(deleteresponse.status).to.equal(204)
        cy.log(JSON.stringify(deleteresponse))
    })
  });
});
