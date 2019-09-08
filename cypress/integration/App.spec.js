import App from "../../src/App.svelte";
import mount from "cypress-svelte-unit-test";

describe("App component", () => {
  it("should display a greeting", () => {
    cy.viewport(960, 500);

    mount(App, {
      props: {
        name: "Cypress"
      }
    });

    cy.get("h1").should("contain", "Hello Cypress!");
  });
});
