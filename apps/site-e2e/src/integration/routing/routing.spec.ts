import { AppRoute } from "@patronage-web/shared";
import { v4 as uuidv4 } from "uuid";

describe("Base routing", () => {
  it(`should display <${AppRoute.Home}> page`, () => {
    cy.visit("/").url().should("include", "/");
  });

  it(`should display <${AppRoute.Presentation}> page`, () => {
    cy.visit("/presentation").url().should("include", "/presentation");
  });

  it(`should display <${AppRoute.Dashboard}> page`, () => {
    cy.visit("/dashboard").url().should("include", "/dashboard");
  });

  it(`should display <${AppRoute.AddPresentation}> page`, () => {
    cy.visit("/presentation/add").url().should("include", "/presentation/add");
  });

  it(`should display <${AppRoute.EditPresentation}> page`, () => {
    const Id = uuidv4();
    cy.visit(`/presentation/edit/${Id}`).url().should("include", `/presentation/edit/${Id}`);
  });

  it(`should display <${AppRoute.PresentationForExternalUser}> page`, () => {
    const Id = uuidv4();
    cy.visit(`/presentation/${Id}`).url().should("include", `/presentation/${Id}`);
  });

  it(`should display <${AppRoute.NotFound}> page`, () => {
    cy.visit("/dashboard/something").url().should("include", "/dashboard/something");
  });
});
