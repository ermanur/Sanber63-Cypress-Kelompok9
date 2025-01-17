class customCommand{}
Cypress.Commands.add('addCart', (url) => {
    cy.visit('')
    cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.get('#option-label-size-143-item-166').click()
    cy.get('#option-label-color-93-item-50').click()
    cy.get('#product-addtocart-button > span').click()
    cy.get('#ui-id-6 > :nth-child(2)').click()
    cy.get('.block-promo-2columns').click()
    cy.get(':nth-child(11) > .product-item-info > .details > .name > .product-item-link').click()
    cy.get('#product-addtocart-button > span').click()
    cy.get('.logo > img').click()
    cy.wait(2000)
    cy.get('.showcart').click()
    cy.get(':nth-child(7) > .secondary > .action > span').click()
})

module.exports = new customCommand()