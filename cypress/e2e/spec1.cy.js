describe('Task #1', () => {

  beforeEach (() => {
    cy.visit('https://example.cypress.io');
  })

  it('Has Querying link', () => {
    cy.get('.home-list').contains('Querying').should('exist');
  })

  it('Clicking it takes to the relevant page', () => {
    cy.get('.home-list').contains('Querying').click();
    cy.get('h1').should('contain', 'Querying');
  })
})