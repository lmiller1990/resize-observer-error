it('fails', () => {
  cy.visit('http://localhost:8000')
  cy.get("[data-test='autocomplete']").within(() => {
    cy.get(".ant-select-dropdown").should("not.exist");
    cy.get(".ant-select-selection-search-input").type("john");
  });
})
