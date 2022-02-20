import { Route, ROUTES } from "@patronage-web/shared";
import { generatePath } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

describe("Base routing", () => {
  const buildPath = (to: Route, id?: string) => {
    return generatePath(`${ROUTES.presentation}/${to}`, { id });
  };
  it(`should display <${ROUTES.home}> page`, () => {
    cy.visit("/").url().should("include", "/");
  });

  it(`should display <${ROUTES.presentation}> page`, () => {
    cy.visit(ROUTES.presentation).url().should("include", ROUTES.presentation);
  });

  it(`should display <${ROUTES.dashboard}> page`, () => {
    cy.visit(ROUTES.dashboard).url().should("include", ROUTES.dashboard);
  });

  it(`should display <${ROUTES["add-presentation"]}> page`, () => {
    const path = buildPath(ROUTES["add-presentation"]);
    cy.visit(path).url().should("include", path);
  });

  it(`should display <${ROUTES["edit-presentation"]}> page`, () => {
    const Id = uuidv4();
    const path = buildPath(ROUTES["edit-presentation"], Id);
    cy.visit(path).url().should("include", path);
  });

  it(`should display <${ROUTES["external-user-presentation"]}> page`, () => {
    const Id = uuidv4();
    const path = buildPath(ROUTES["external-user-presentation"], Id);
    cy.visit(path).url().should("include", path);
  });

  it(`should display <${ROUTES["not-found"]}> page`, () => {
    cy.visit(`${ROUTES.dashboard}/something`).url().should("include", `${ROUTES.dashboard}/something`);
  });
});
