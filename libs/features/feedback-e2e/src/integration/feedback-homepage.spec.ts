describe("Feedback Homepage", () => {
  it("opens the login page", () => {
    cy.visit("http://localhost:4000/");
  });

  it("displays welcome text", () => {
    cy.get(".e1y13pc43 > .MuiTypography-root").contains(
      "Czy zastanawiałeś się kiedyś, co zrobić, by Twoja prezentacja była bardziej interaktywna? Kliknij przycisk poniżej i po prostu... spraw, by tak się stało!"
    );
  });

  it("redirects to add-presentation page after click", () => {
    cy.get(".MuiButton-root").click();
    cy.url().should("include", "/feedback/presentation/add");
  });
});
