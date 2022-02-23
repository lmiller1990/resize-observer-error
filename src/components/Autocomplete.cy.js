import { mount } from "@cypress/react";
import Autocomplete from "./Autocomplete";

describe("Autocomplete", () => {
  it("the datepicker opens after clicking in the input", () => {
    mount(<Autocomplete />);

    cy.get("[data-test='autocomplete']").within(() => {
      cy.get(".ant-select-dropdown").should("not.exist");
      cy.get(".ant-select-selection-search-input").type("john");
    });
  });
});
