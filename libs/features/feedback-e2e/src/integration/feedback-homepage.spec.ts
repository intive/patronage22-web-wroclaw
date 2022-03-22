describe("Feedback Homepage", () => {
  it("opens the Homepage", () => {
    cy.visit("http://localhost:4000/?lang=en");
    cy.url().should("eq", "http://localhost:4000/?lang=en");
  });

  it("displays welcome text", () => {
    cy.get(".e1y13pc43 > .MuiTypography-root").contains(
      "Have you ever wonder how to make your presentation more interactive? Click the button below and simply... make it happen!"
    );
  });

  it("redirects to add-presentation page after click", () => {
    cy.get(".MuiButton-root").click();
    cy.url().should("include", "/feedback/presentation/add");
  });
});
