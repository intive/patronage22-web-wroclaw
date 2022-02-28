import { AppRoute } from "@patronage-web/shared";
import { generatePath } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

describe("Base routing", () => {
  const buildPath = (to: AppRoute, id?: string) => {
    return generatePath(`${AppRoute.Presentation}/${to}`, { id });
  };
  it(`should display <${AppRoute.Home}> page`, () => {
    cy.visit("/").url().should("include", "/");
  });

  it(`should display <${AppRoute.Presentation}> page`, () => {
    cy.visit(AppRoute.Presentation).url().should("include", AppRoute.Presentation);
  });

  it(`should display <${AppRoute.Dashboard}> page`, () => {
    cy.visit(AppRoute.Dashboard).url().should("include", AppRoute.Dashboard);
  });

  it(`should display <${AppRoute.AddPresentation}> page`, () => {
    const path = buildPath(AppRoute.AddPresentation);
    cy.visit(path).url().should("include", path);
  });

  it(`should display <${AppRoute.EditPresentation}> page`, () => {
    const Id = uuidv4();
    const path = buildPath(AppRoute.EditPresentation, Id);
    cy.visit(path).url().should("include", path);
  });

  it(`should display <${AppRoute.ExternalUserPresentation}> page`, () => {
    const Id = uuidv4();
    const path = buildPath(AppRoute.ExternalUserPresentation, Id);
    cy.visit(path).url().should("include", path);
  });

  it(`should display <${AppRoute.NotFound}> page`, () => {
    cy.visit(`${AppRoute.Dashboard}/something`).url().should("include", `${AppRoute.Dashboard}/something`);
  });
});
