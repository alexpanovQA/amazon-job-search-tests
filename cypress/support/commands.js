import CookiesPage from "../page_objects/cookies.page";

Cypress.Commands.add("errorHandler", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    console.warn("Ignoring uncaught exception:", err.message);
    return false;
  });
});

Cypress.Commands.add("rejectCookies", () => {
  CookiesPage.rejectCookiesButton.then(($btn) => {
    if ($btn.length > 0 && $btn.is(":visible")) {
      cy.wrap($btn).click();
    }
  });
});
