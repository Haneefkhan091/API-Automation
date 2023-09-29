
describe('Accessibility Tests', () => {
  
  beforeEach(() => {
    cy.visit('https://neuroqur.com/')
  })

  // Test case for accessibility
  it('should pass accessibility tests', () => {
    cy.injectAxe()
    cy.checkA11y()

  })
})
