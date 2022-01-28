describe("testing basic routing", () => {
  beforeEach(() => cy.visit("localhost:4000/"));

  it("should redirect and display home page", () => {
    cy.get("h1").contains("Home page");
  });

  it("should display presentation page", () => {
    cy.visit("localhost:4000/presentation");
    cy.get("h1").contains("Presentation page");
  });

  it("should display dashboard page", () => {
    cy.visit("localhost:4000/dashboard");
    cy.get("h1").contains("Dashboard page");
  });

  it("should display presentation/add page", () => {
    cy.visit("localhost:4000/presentation/add");
    cy.get("h1").contains("Presentation page");
    cy.get("h1").contains("Add presentation page");
  });

  it("should display presentation/edit page", () => {
    cy.visit("localhost:4000/presentation/edit/someID");
    cy.get("h1").contains("Presentation page");
    cy.get("h1").contains("Edit presentation page");
  });

  it("should display presentation/eternal page", () => {
    cy.visit("localhost:4000/presentation/someID");
    cy.get("h1").contains("Presentation page");
    cy.get("h1").contains("Page for external user");
  });

  it("should display error page", () => {
    cy.visit("localhost:4000/dashboard/something");
    cy.get("h1").contains("You should not be here...");
  });
});
