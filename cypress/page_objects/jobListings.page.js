class JobListingsPage {
  get listingTitle() {return cy.get("h3 a");}
  get listingLocation() {return cy.get(".text-nowrap");}
  get searchByKeyword() {return cy.get('[id="search_typeahead"]').eq(0);}
  get searchByLocation() {return cy.get('[id="location-typeahead"]').eq(0);}
  get locationDropdown() {return cy.get('[class="location-asset area"]');}
  get searchIcon() {return cy.get('[type="submit"]').eq(0);}
}

export default new JobListingsPage();

