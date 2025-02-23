class mfaOtp {
  get codeInput() {return cy.get('#verificationFormCodeInputField')};
  get submitCodeButton() {return cy.get('[class*="btn btn-m"]')};
}

export default new mfaOtp();