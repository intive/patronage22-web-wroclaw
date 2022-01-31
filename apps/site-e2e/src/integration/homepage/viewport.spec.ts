/// <reference types="cypress" />

context("Viewport", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4000/");
  });

  it("cy.viewport() - set the viewport size and dimension", () => {
    cy.viewport(2999, 2999);

    cy.viewport("macbook-15");

    cy.viewport("macbook-13");

    cy.viewport("macbook-11");

    cy.viewport("ipad-2", "landscape");

    cy.viewport("ipad-mini", "landscape");

    cy.viewport("iphone-6+", "landscape");

    cy.viewport("iphone-6", "landscape");

    cy.viewport("iphone-5", "landscape");

    cy.viewport("iphone-4", "landscape");

    cy.viewport("iphone-3", "landscape");

    cy.viewport("ipad-2", "portrait");

    cy.viewport("ipad-mini", "portrait");

    cy.viewport("iphone-6+", "portrait");

    cy.viewport("iphone-6", "portrait");

    cy.viewport("iphone-5", "portrait");

    cy.viewport("iphone-4", "portrait");

    cy.viewport("iphone-3", "portrait");
  });
});
