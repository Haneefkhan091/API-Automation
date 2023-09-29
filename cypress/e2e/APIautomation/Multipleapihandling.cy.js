it("Multiple API", () => {
  cy.request({
    method: "GET",
    url: "https://reqres.in/api/users/2",
  })
    .then((resp) => {
      cy.log(resp.body.data.first_name);
      const dummyName = resp.body.data.first_name;
      return dummyName;
    })
    .then((dummyName) => {
      cy.request({
        method: "POST",
        url: "https://reqres.in/api/users",
        body: {
          name: dummyName,
          job: "leader",
        },
      }).then((resp) => {
        cy.log(resp);
      });
    });
});
