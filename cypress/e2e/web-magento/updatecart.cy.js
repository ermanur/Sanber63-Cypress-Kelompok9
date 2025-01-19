import customCommands from "../../support/pageObjectModeladdCart/custom-commands.js"
import addCart from "../../support/pageObjectModeladdCart/addCart.js"
describe('updatecart', () => {
 
  beforeEach('edit qty product',() => {
  cy.addCart('url')
  cy.url().should('include','https://magento.softwaretestingboard.com/checkout/cart/')
  })
  
  it('remove product',() => {
    cy.get(addCart.delete_btl).click()
    cy.get(addCart.cart).should('contain.text','1')
  })

  it('success edit qty',() => {
    cy.get(addCart.update_btl).click()
    cy.get(addCart.qty).clear().type(2)
    cy.get(addCart.update_btn).click()
    cy.get(addCart.success_msg).should('contain.text','\n            Affirm Water Bottle  was updated in your shopping cart.\n        ')
  })
  it('failed edit qty',() => {
    cy.get(addCart.update_btl).click()
    cy.get(addCart.qty).clear().type(10000)
    cy.get(addCart.update_btn).click()
    cy.get(addCart.error_msg).should('contain.text','The requested qty is not available')
  })

  it('success change color',() => {
    cy.get(addCart.update_tee).click()
    cy.get(addCart.color).click()
    cy.get(addCart.update_btn).click()
    cy.get(addCart.success_msg).should('contain.text','Radiant Tee was updated in your shopping cart')
  })
  it('failed not choose color',() => {
    cy.get(addCart.update_tee).click()
    cy.get(addCart.color1).click()
    cy.get(addCart.update_btn).click()
    cy.get(addCart.errorMsgField).should('contain.text','This is a required field')
  })
  it('success change size',() => {
    cy.get(addCart.update_tee).click()
    cy.get(addCart.size).click()
    cy.get(addCart.update_btn).click()
    cy.get(addCart.success_msg).should('contain.text','Radiant Tee was updated in your shopping cart')
  })
  it('failed not choose size',() => {
    cy.get(addCart.update_tee).click()
    cy.get(addCart.size1).click()
    cy.get(addCart.update_btn).click()
    cy.get(addCart.errorMsgSize).should('contain.text','This is a required field')
  })
})