describe('Button Test', () => {
  it('Rock button works', () => {
    cy.visit('rps.html');
    cy.get('#rock').click();
    cy.get('#user-option').should('contain', 'Rock');
  })

  it('Paper button works', () => {
    cy.visit('rps.html');
    cy.get('#paper').click();
    cy.get('#user-option').should('contain', 'Paper');
  })

  it('Scissors button works', () => {
    cy.visit('rps.html');
    cy.get('#scissors').click();
    cy.get('#user-option').should('contain', 'Scissors');
  })
})