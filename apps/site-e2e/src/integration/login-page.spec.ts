describe("Login page", () => {
  it("opens the login page", () => {
    cy.visit("http://localhost:4000/login?lang=en");
    cy.url().should("include", "/login");
  });

  it("types invalid input and checks if error message is shown and submit is not possible", () => {
    cy.get("#mui-1").type("Test e-mail").get(".Mui-error").should("be.visible");
    cy.get(".MuiButton-root").click();
    cy.url().should("include", "/login");
    cy.get("#mui-1").clear();
  });

  it("sets valid e-mail in the input and redirects to homepage after successful login", () => {
    cy.get("#mui-1").type("asdasd.asdasd@gmail.com");
    cy.get(".MuiButton-root").click();
    cy.url().should("eq", "http://localhost:4000/");
  });
});
