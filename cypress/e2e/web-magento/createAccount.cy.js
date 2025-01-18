import createAccPageCy from "../../support/pageObjectModel/createAccPage.cy"

describe('Magento Create an Account Scenario', () => {
  beforeEach(() => {
    cy.visit('')
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
  })

  it.skip('Create an Account success', () => {
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#lastname').type('Rubina')
    cy.get('#email_address').type('Rubina1@mail.com')
    cy.get('#password').type('Sanbercode00')
    cy.get('#password-confirmation').type('Sanbercode00')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get(':nth-child(2) > .greet > .logged-in').should('have.text', 'Welcome, Ana Rubina!' )
    cy.get('.message-success > div').should('have.text','Thank you for registering with Main Website Store.')
  })

  it('Create an Account failed - empty firstname ', () => {
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#lastname').type('Rubina')
    cy.get('#email_address').type('Rubina1@mail.com')
    cy.get('#password').type('Sanbercode00')
    cy.get('#password-confirmation').type('Sanbercode00')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#firstname-error').should('have.text', 'This is a required field.')

   })

  it('Create an Accoun failed - empty lastname', () => {
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#email_address').type('Rubina1@mail.com')
    cy.get('#password').type('Sanbercode00')
    cy.get('#password-confirmation').type('Sanbercode00')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#lastname-error').should('have.text', 'This is a required field.')
  })

  it('Create an Accoun failed - empty email', () => {
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#lastname').type('Rubina')
    cy.get('#password').type('Sanbercode00')
    cy.get('#password-confirmation').type('Sanbercode00')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#email_address-error').should('have.text', 'This is a required field.')

  })


it('Create an Accoun failed - empty password', () => {
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#lastname').type('Rubina')
    cy.get('#email_address').type('Rubina1@mail.com')
    cy.get('#password-confirmation').type('Sanbercode00')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#password-error').should('have.text', 'This is a required field.')
    cy.get('#password-confirmation-error').should('have.text', 'Please enter the same value again.')

  })

  it('Create an Accoun failed - empty confirm password', () => {
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#lastname').type('Rubina')
    cy.get('#email_address').type('Rubina1@mail.com')
    cy.get('#password').type('Sanbercode00')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#password-confirmation-error').should('have.text', 'This is a required field.')

  })
})