describe("Login page", () => {
  it("opens the login page", () => {
    cy.visit("http://localhost:4000/login");
  });

  it("displays e-mail input field and set some value", () => {
    cy.get("#mui-1").type("Test e-mail").should("have.value", "Test e-mail");
  });

  it("checks if error message is shown", () => {
    cy.get(".Mui-error").should("be.visible");
  });

  it("does not redirect after submit with invalid email", () => {
    cy.get(".MuiButton-root").click();
    cy.url().should("include", "/login");
  });

  it("sets correct e-mail in the input", () => {
    cy.get("#mui-1").clear().type("asdasd.asdasd@gmail.com");
  });

  it("redirects to homepage after successful login", () => {
    cy.get(".MuiButton-root").click();
    cy.url().should("eq", "http://localhost:4000/?lang=pl");
  });
});
