const homepage = 'http://localhost:3000'

describe('home page', () => {
  it('loads the homepage', () => {
    cy.visit(homepage).contains('Jan Paul Stegeman')
  })
  it('has a social block with 6 items', () => {
    cy.visit(homepage).get('.social-block').children().should('have.length', 6)
  })
  it('has a footer', () => {
    cy.visit(homepage).get('footer').should('not.be.empty')
  })
})
