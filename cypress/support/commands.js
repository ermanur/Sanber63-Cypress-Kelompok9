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

// import detailPage from "../../support/element-pages/detailPage"

// Cypress.Commands.add('addCart', (url) => { 
//     // Visit item detail page
//         cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html')
//         cy.wait(2000)
//     // Pick size & color, click button Add to Cart
//         cy.get(detailPage.size_picker).click()
//         cy.get(detailPage.color_picker).click()
//         cy.get(detailPage.addtocart_btn).click()
//         cy.wait(2000)
//     // Click cart, click button Proceed to Checkout
//         cy.get(detailPage.cart).click()
//         // cy.get(detailPage.proceedtocheckout_btn).should('have.text', 'Proceed to Checkout')
//         cy.get(detailPage.proceedtocheckout_btn).click()
//         cy.url().should('include', '/checkout/#shipping')
//         cy.wait(5000)

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
