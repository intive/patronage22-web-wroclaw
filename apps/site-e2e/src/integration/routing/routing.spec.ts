import { AppRoute } from "@patronage-web/shared";
import { v4 as uuidv4 } from "uuid";

describe("Base routing", () => {
  const Id = uuidv4();

  it(`should display <${AppRoute.Home}> page`, () => {
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

  it(`should display <${AppRoute.Add}> page`, () => {
    cy.visit("localhost:4000/presentation/add");
    cy.url().should("include", "/presentation/add");
  });

  it(`should display <${AppRoute.Edit}> page`, () => {
    cy.visit(`localhost:4000/presentation/edit/${Id}`);
    cy.url().should("include", `/presentation/edit/${Id}`);
  });

  it(`should display <${AppRoute.External}> page`, () => {
    cy.visit(`localhost:4000/presentation/${Id}`);
    cy.url().should("include", `/presentation/${Id}`);
  });

  it(`should redirect and display <${AppRoute.NotFound}> page`, () => {
    cy.visit("localhost:4000/dashboard/something");
    cy.url().should("include", "/notFound");
  });
});
