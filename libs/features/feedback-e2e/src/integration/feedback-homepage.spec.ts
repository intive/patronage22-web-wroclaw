describe("Feedback Homepage", () => {
  it("opens the login page", () => {
    cy.visit("http://localhost:4000/");
  });

  it("displays welcome text", () => {
    cy.get(".e1y13pc43 > .MuiTypography-root").contains(
      "Tymczasowy tekst komponentu ActionCard do tworzenia nowych ankiet z poziomu widoku Homepage"
    );
  });

  it("redirects to add-presentation page after click", () => {
    cy.get(".MuiButton-root").click();
    cy.url().should("include", "/feedback/presentation/add");
  });
});
