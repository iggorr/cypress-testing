describe('Task #2', () => {

  beforeEach (() => {
    cy.visit('https://example.cypress.io/commands/actions');
  })

  it('Has email input field', () => {
    cy.get('.action-email').should('exist');
  })

  it('Typing email updates text in the field', () => {
    cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com');
  })
})