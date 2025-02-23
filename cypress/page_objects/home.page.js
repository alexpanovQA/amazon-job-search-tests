class HomePage {
  get searchByKeyword() {return cy.get('[id="search_typeahead"]').eq(1);}
  get searchByLocation() {return cy.get('[id="location-typeahead"]').eq(1);}
  get searchIcon() {return cy.get('[id="search-button"]');}
  get locationDropdown() {return cy.get('[class="location-asset area"]');}
}

export default new HomePage();