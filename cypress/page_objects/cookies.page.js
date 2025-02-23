class CookiesPage {
  get rejectCookiesButton() {return cy.get('[id="btn-reject-cookies"]');}
}

export default new CookiesPage();
