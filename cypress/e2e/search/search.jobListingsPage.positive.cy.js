import jobListingsPage from "../../page_objects/jobListings.page.js";

describe("Search from JobListings page", () => {
  before(() => {
    cy.errorHandler();
  });

  beforeEach(() => {
    cy.visit("/search");
    cy.rejectCookies();
    cy.fixture("searchData").as("testData");
  });

  it("Should search by keyword", function () {
    jobListingsPage.searchByKeyword.type(this.testData.searchKeyword);
    jobListingsPage.searchIcon.click();

    jobListingsPage.listingTitle
      .should("have.length.greaterThan", 0)
      .each(($el) => {
        cy.wrap($el).should("contain.text", this.testData.searchKeyword);
      });
  });

  it("Should search by location", function () {
    jobListingsPage.searchByLocation.type(this.testData.searchLocation);
    jobListingsPage.locationDropdown.click();
    jobListingsPage.searchIcon.click();

    jobListingsPage.listingLocation
      .should("have.length.greaterThan", 0)
      .then(($list) => {
        const locationTexts = [...$list].map((el) => el.innerText);
        const matchCount = locationTexts.filter((text) =>
          text.includes(this.testData.searchLocation)
        ).length;
        expect(matchCount).to.be.greaterThan(0);
      });
  });
});