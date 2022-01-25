describe("ui: test button", () => {
  beforeEach(() => cy.visit("/iframe.html?id=testbutton"));

  // very simple test
  it("should contains button", () => {
    cy.get("button").contains("Test button");
  });
});
