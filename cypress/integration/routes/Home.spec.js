import Home from "../../../src/routes/Home.svelte";
import mount from "cypress-svelte-unit-test";

describe("Home route", () => {
  it("should display a title", () => {
    cy.viewport(960, 500);

    mount(Home, {});

    cy.get("h1").should("contain", "Home page");
  });
});
