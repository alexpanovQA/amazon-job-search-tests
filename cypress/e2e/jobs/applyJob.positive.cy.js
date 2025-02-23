import loginPage from "../../page_objects/login.page.js";
import mfaOtp from "../../page_objects/mfaOtp.page.js";

describe("Amazon Jobs - Apply for a Job", () => {
  const testEmail = Cypress.env("CYPRESS_TEST_EMAIL");
  const testPassword = Cypress.env("CYPRESS_TEST_PASSWORD");

  before(function () {
    cy.fixture("searchData").as("searchData");
    cy.fixture("userData").as("userData");
  });

  it("Should apply for a job with existing account handling MFA", function () {
    cy.visit("https://passport.amazon.jobs");
    loginPage.emailPassportPage.type(testEmail);
    loginPage.passwordPassportPage.type(testPassword);
    loginPage.loginButton.click();

    cy.task("getMailosaurOTP").then((otpCode) => {
      if (otpCode) {
        mfaOtp.codeInput.type(otpCode);
        mfaOtp.submitCodeButton.click();
      }
    });

    cy.origin(
      Cypress.config("baseUrl"),
      {
        args: {
          searchKeyword: this.searchData.searchKeyword,
          email: Cypress.env("CYPRESS_TEST_EMAIL"),
        },
      },
      ({ searchKeyword, email }) => {
        Cypress.on("uncaught:exception", (err) => {
          console.warn(
            "Ignoring uncaught exception inside cy.origin:",
            err.message
          );
          return false;
        });

        cy.visit("/");
        cy.get('[id="btn-reject-cookies"]').click();
        cy.get('[id="search_typeahead"]').eq(1).type(searchKeyword);
        cy.get('[id="search-button"]').click();
        cy.get("h3 a").eq(0).click();
        cy.contains("DESCRIPTION").should("be.visible");
        cy.contains("Job details").should("be.visible");
        cy.get('[id="apply-button"]').click();
      }
    );

    cy.origin(
      "https://account.amazon.jobs",
      {
        args: {
          email: Cypress.env("CYPRESS_TEST_EMAIL"),
          userData: this.userData, // Pass userData explicitly
        },
      },
      ({ email, userData }) => {
        cy.get('[name="email"]').clear().type(email);
        cy.get("#sign-in-button").click();
        cy.contains("Get SMS updates on your job applications").should(
          "be.visible"
        );
        cy.get("#save-and-continue-form-button").click();
        cy.contains("Work Eligibility").should("be.visible");
        cy.get('[data-testid="GEF_EXT_GOVERNMENT_EMPLOYEE-NEVER"]')
          .should("exist")
          .click({ force: true });
        cy.get("div.card-footer button.btn.btn-primary").click();

        ["city", "first name", "last name", "address", "zipcode"].forEach((field) => {
            cy.contains(userData[field]).should("be.visible");
          }
        );
      }
    );
  });
});
