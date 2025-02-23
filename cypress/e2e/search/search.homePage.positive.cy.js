import homePage from "../../page_objects/home.page.js";
import jobListingsPage from "../../page_objects/jobListings.page.js";

describe("Search from Homepage", () => {
  before(() => {
    cy.errorHandler();
  });

  beforeEach(() => {
    cy.visit("");
    cy.rejectCookies();
    cy.fixture("searchData").as("testData");
  });

  it("Should search by keyword", function () {
    homePage.searchByKeyword.type(this.testData.searchKeyword);
    homePage.searchIcon.click();

    jobListingsPage.listingTitle
      .should("have.length.greaterThan", 0)
      .each(($el) => {
        cy.wrap($el).should("contain.text", this.testData.searchKeyword);
      });
  });

  it("Should search by location", function () {
    homePage.searchByLocation.type(this.testData.searchLocation);
    homePage.locationDropdown.click();
    homePage.searchIcon.click();

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
