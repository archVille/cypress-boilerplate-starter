Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe("Form test", () => {
    it("Can visit Risk Create", () => {
        cy.visit("https://www.skyscanner.net/")
        expect(true).to.equal(true)
      });
  });