import addCartCy from "../../support/addCart/addCart"
describe('updatecart', () => {
 
  beforeEach('edit qty product',() => {
  cy.addCart('url')
  cy.url().should('include','https://magento.softwaretestingboard.com/checkout/cart/')
  })
  
  it('remove product',() => {
    cy.get(':nth-child(4) > .item-actions > td > .actions-toolbar > .action-delete').click()
    cy.get('.showcart > .counter').should('contain.text','1')
  })

  it('success edit qty',() => {
    cy.get(':nth-child(4) > .item-actions > td > .actions-toolbar > .action-edit').click()
    cy.get('#qty').clear().type(2)
    cy.get('#product-updatecart-button > span').click()
    cy.get('.message-success').should('contain.text','\n            Affirm Water Bottle  was updated in your shopping cart.\n        ')
  })
  it('failed edit qty',() => {
    cy.get(':nth-child(4) > .item-actions > td > .actions-toolbar > .action-edit').click()
    cy.get('#qty').clear().type(10000)
    cy.get('#product-updatecart-button > span').click()
    cy.get('.message-error').should('contain.text','The requested qty is not available')
  })

  it('success change color',() => {
    cy.get(':nth-child(3) > .item-actions > td > .actions-toolbar > .action-edit').click()
    cy.get('#option-label-color-93-item-56').click()
    cy.get('#product-updatecart-button').click()
    cy.get('.message-success').should('contain.text','Radiant Tee was updated in your shopping cart')
  })
  it('failed not choose color',() => {
    cy.get(':nth-child(3) > .item-actions > td > .actions-toolbar > .action-edit').click()
    cy.get('#option-label-color-93-item-50').click()
    cy.get('#product-updatecart-button').click()
    cy.get('div[id^="super_attribute\[93\]-error"]').should('contain.text','This is a required field')
  })
  it('success change size',() => {
    cy.get(':nth-child(3) > .item-actions > td > .actions-toolbar > .action-edit').click()
    cy.get('#option-label-size-143-item-167').click()
    cy.get('#product-updatecart-button').click()
    cy.get('.message-success').should('contain.text','Radiant Tee was updated in your shopping cart')
  })
  it.only('failed not choose size',() => {
    cy.get(':nth-child(3) > .item-actions > td > .actions-toolbar > .action-edit').click()
    cy.get('#option-label-size-143-item-166').click()
    cy.get('#product-updatecart-button').click()
    cy.get('div[id^="super_attribute\[143\]-error"]').should('contain.text','This is a required field')
  })
})