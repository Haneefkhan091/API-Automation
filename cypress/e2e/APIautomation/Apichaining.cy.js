// Make an API request to get a user ID
it("Api Chaining", () => {
  cy.request("GET", "https://jsonplaceholder.typicode.com/posts")
    .its("body")
    .then((users) => {
      const userId = users[0].id;

      // Chain another API request using the user ID
      cy.request(
        "GET",
        `https://jsonplaceholder.typicode.com/comments?postid=${userId}`
      )
        .its("body")
        .then((posts) => {
          // Perform assertions on the response
          expect(posts).to.have.length(500);
          expect(posts[0]).to.deep.include({
            postId: 1,
            id: 1,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
          });

          // Assert properties of the second post
          expect(posts[1]).to.deep.include({
            postId: 1,
            id: 2,
            name: "quo vero reiciendis velit similique earum",
            email: "Jayne_Kuhic@sydney.com",
            body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
          });
        });
    });
});
