describe('Results Test', () => {
  it('Game logic works as intended', () => {
    cy.visit('rps.html');
    cy.get('#rock').click();
    
    cy.get('#computer-option').then( (computerOption) => {
      if (computerOption.text().includes('Rock')) {
        cy.get('#result').should('contain', 'tie');
      } else if (computerOption.text().includes('Paper')) {
        cy.get('#result').should('contain', 'lose');
      } else {
        cy.get('#result').should('contain', 'win');
      }
    })
  })
})