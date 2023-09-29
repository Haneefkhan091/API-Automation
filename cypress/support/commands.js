// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress"/>
import "@testing-library/cypress/add-commands";
require('cypress-downloadfile/lib/downloadFileCommand')


Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

cy.on("uncaught:exception", (err, runnable) => {
  expect(err.message).to.include("of undefined");
  done();
  return false;
});

const Ajv = require("ajv");
const ajv = new Ajv();

Cypress.Commands.add("validateJSONSchema", (response, schema) => {
  const validate = ajv.compile(schema);
  const valid = validate(response.body);
  expect(valid).to.be.true;
});
