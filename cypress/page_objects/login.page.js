class LoginPage {
  get emailInput() {return cy.get('[name="email"]')};
  get continueButton() {return cy.get('[id="sign-in-button"]')};
  get emailPassportPage() {return cy.get('#loginFormUsernameInputField')}
  get passwordPassportPage() {return cy.get('#loginFormPasswordInputField')};
  get loginButton() {return cy.get('[type="submit"]')};
}

export default new LoginPage();

