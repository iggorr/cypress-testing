describe('Task #3', () => {

    beforeEach (() => {
        cy.visit('https://example.cypress.io/commands/actions');
    })

    it('Click triggers popover', () => {
        cy.get('.action-btn').click();
    })

    it('Clicking in area works', () => {
        cy.get('#action-canvas').click();
        cy.get('#action-canvas').click('topLeft');
        cy.get('#action-canvas').click('bottomRight');
    })
})