// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Create Account
function randomEmail(){
    const randomString = Math.random().toString(36).substring(2,9)
    const email = randomString + "@mail.com"
    return email
}
  
  Cypress.Commands.add('CreateAccount', (firstname, lastname, password, confirm_pass) => {
    let useremail = randomEmail()
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type(firstname)
    cy.get('#lastname').type(lastname)
    cy.get('#email_address').type(useremail)
    cy.get('#password').type(password)
    cy.get('#password-confirmation').type(confirm_pass)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
  })

  Cypress.Commands.add('VerifyError', (message) => {
    cy.get('.message-error > div').should('have.text', message)

  })
  
  Cypress.Commands.add('VerifyURL', (url) => {
    cy.url().should('include',url)

  })

    //Add to Cart (pre-cons of Proceed Checkout)
      Cypress.Commands.add('AddToCart', () => {
        const detailPage = require('../../../Sanber63-Cypress-Kelompok9/cypress/support/element-pages/detailPage.js');
      // Pick size & color, click button Add to Cart
        cy.get(detailPage.size_picker).click()
          .get(detailPage.color_picker).click()
          .get(detailPage.addtocart_btn).click()
          .wait(5000)
      // Click cart, click button Proceed to Checkout
          .get(detailPage.cart).click()
    })

    //Proceed Checkout - Inout field Shipping
    Cypress.Commands.add('InputFieldsShipping', () => {
      const Shipping = require('../../../Sanber63-Cypress-Kelompok9/cypress/support/element-pages/checkout-shippingPage.js');
      cy.get(Shipping.emailaddress).type('lalamariella@email.com')
        .get(Shipping.firstname).type('Lala')
        .get(Shipping.lastname).type('Mariella')
        .get(Shipping.company).type('PT Selalu Bisa')
        .get(Shipping.streetaddress1).type('Jl. Kencana Ungu')
        .get(Shipping.streetaddress2).type('Kec. Situbargi')
        .get(Shipping.streetaddress3).type('(Deket Indomaret)')
        .get(Shipping.city).type('Surabaya')
        .get(Shipping.state).select('Texas')
        .get(Shipping.postcode).type('12321')
        .get(Shipping.country).select('United States')
        .get(Shipping.phonenumber).type('081232145678')
  })
