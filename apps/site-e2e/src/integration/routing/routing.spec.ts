import { AppRoute } from "@patronage-web/shared";
import { v4 as uuidv4 } from "uuid";

describe("Base routing", () => {
  it(`should display <${AppRoute.HomePage}> page`, () => {
    cy.visit("/");
    cy.url().should("include", "/");
  });

  it(`should display <${AppRoute.Presentation}> page`, () => {
    cy.visit("localhost:4000/presentation");
    cy.url().should("include", "/presentation");
  });

  it(`should display <${AppRoute.Dashboard}> page`, () => {
    cy.visit("localhost:4000/dashboard");
    cy.url().should("include", "/dashboard");
  });

  it(`should display <${AppRoute.AddPresentation}> page`, () => {
    cy.visit("localhost:4000/presentation/add");
    cy.url().should("include", "/presentation/add");
  });

  it(`should display <${AppRoute.EditPresentation}> page`, () => {
    const Id = uuidv4();
    cy.visit(`localhost:4000/presentation/edit/${Id}`);
    cy.url().should("include", `/presentation/edit/${Id}`);
  });

  it(`should display <${AppRoute.PresentationForExternalUser}> page`, () => {
    const Id = uuidv4();
    cy.visit(`localhost:4000/presentation/${Id}`);
    cy.url().should("include", `/presentation/${Id}`);
  });

  it(`should display <${AppRoute.PageNotFound}> page`, () => {
    cy.visit("localhost:4000/dashboard/something");
    cy.url().should("include", "/dashboard/something");
  });
});
