describe('Check Theme Toggle', () => {
  it('Change Theme To Light Mode!', () => {
    cy.visit('/')
    // check if the page content area
    cy.get('.v-application').should(
      'have.css',
      'background-color',
      'rgb(18, 18, 18)'
    )

    cy.get('.theme-toggle').click()

    // check the page content area color has been changed to light
    cy.get('.v-application').should(
      'have.css',
      'background-color',
      'rgb(255, 255, 255)'
    )
  })
})