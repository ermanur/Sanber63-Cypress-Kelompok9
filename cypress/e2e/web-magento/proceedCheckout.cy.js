import detailPage from "../../support/element-pages/detailPage"
import Shipping from "../../support/element-pages/checkout-shippingPage"
import Review_Payments from "../../support/element-pages/checkout-reviewPage"

describe('proceed to checkout', () => {
  
  beforeEach(() => {
    // Visit item detail page
        cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html')
        cy.wait(2000)
    // Pick size & color, click button Add to Cart
        cy.get(detailPage.size_picker).click()
        cy.get(detailPage.color_picker).click()
        cy.get(detailPage.addtocart_btn).click()
        cy.wait(5000)
    // Click cart, click button Proceed to Checkout
        cy.get(detailPage.cart).click()
        cy.get(detailPage.proceedtocheckout_btn).should('have.text', 'Proceed to Checkout')
        cy.get(detailPage.proceedtocheckout_btn).dblclick({ multiple: false })
        cy.url().should('include', '/checkout/#shipping')
        cy.wait(5000)
  })

  it('proceed to checkout - positive (doesnt have account)', () => {
    cy.get(Shipping.emailaddress).type('lalamariella@email.com')
    cy.get(Shipping.firstname).type('Lala')
    cy.get(Shipping.lastname).type('Mariella')
    cy.get(Shipping.company).type('PT Selalu Bisa')
    cy.get(Shipping.streetaddress1).type('Jl. Kencana Ungu')
    cy.get(Shipping.streetaddress2).type('Kec. Situbargi')
    cy.get(Shipping.streetaddress3).type('(Deket Indomaret)')
    cy.get(Shipping.city).type('Surabaya')
    cy.get(Shipping.state).select('Texas')
    cy.get(Shipping.postcode).type('12321')
    cy.get(Shipping.country).select('Indonesia')
    cy.get(Shipping.phonenumber).type('081232145678')
    cy.get(Shipping.ship_flatrate).click()
    cy.get(Shipping.next_btn).click()
  })

  it('proceed to checkout - positive (have account)', () => {
    cy.get(Shipping.emailaddress).type('lalamariella@gmail.com')
    cy.get(Shipping.haveaccount_msg).should('be.visible')
    cy.get(Shipping.haveaccount_msg).should('have.text', 'You can create an account after checkout.You already have an account with us. Sign in or continue as guest.')
    cy.get(Shipping.password).type('Lalamariella123')
    cy.get(Shipping.haveaccount_login_btn).click()
    cy.get(Shipping.validate_newaddress_btn).should('be.visible')
    cy.get(Shipping.next_btn).click()
  })

  it('proceed to checkout - positive (flat rate)', () => {
    cy.get(Shipping.emailaddress).type('lalamariella@email.com')
    cy.get(Shipping.firstname).type('Lala')
    cy.get(Shipping.lastname).type('Mariella')
    cy.get(Shipping.company).type('PT Selalu Bisa')
    cy.get(Shipping.streetaddress1).type('Jl. Kencana Ungu')
    cy.get(Shipping.streetaddress2).type('Kec. Situbargi')
    cy.get(Shipping.streetaddress3).type('(Deket Indomaret)')
    cy.get(Shipping.city).type('Surabaya')
    cy.get(Shipping.state).select('Texas')
    cy.get(Shipping.postcode).type('12321')
    cy.get(Shipping.country).select('Indonesia')
    cy.get(Shipping.phonenumber).type('081232145678')
  // Pick Flat Rate Shipping Method
    cy.get(Shipping.ship_flatrate).click()
    cy.get(Shipping.next_btn).click()
    cy.wait(5000)
  // Validate Shipping Method - Flat Rate on Summary
    cy.get(Review_Payments.validate_shipping).contains('Flat Rate')
  // Click Place Order
    cy.get(Review_Payments.placeorder_btn).click()
    cy.url().should('include','/checkout/onepage/success/')
    cy.get(Review_Payments.placeorder_success_msg)
    .should('have.text', 'Thank you for your purchase!')
  })

  it('proceed to checkout - positive (best way)', () => {
    cy.get(Shipping.emailaddress).type('lalamariella@email.com')
    cy.get(Shipping.firstname).type('Lala')
    cy.get(Shipping.lastname).type('Mariella')
    cy.get(Shipping.company).type('PT Selalu Bisa')
    cy.get(Shipping.streetaddress1).type('Jl. Kencana Ungu')
    cy.get(Shipping.streetaddress2).type('Kec. Situbargi')
    cy.get(Shipping.streetaddress3).type('(Deket Indomaret)')
    cy.get(Shipping.city).type('Surabaya')
    cy.get(Shipping.state).select('Texas')
    cy.get(Shipping.postcode).type('12321')
    cy.get(Shipping.country).select('United States')
    cy.get(Shipping.phonenumber).type('081232145678')
  // Pick Best Way Shipping Method
    cy.get(Shipping.ship_bestway).click()
    cy.get(Shipping.next_btn).click()
    cy.wait(5000)
  // Validate Shipping Method - Best Way on Summary
    cy.get(Review_Payments.validate_shipping).contains('Best Way')
  // Click Place Order
    cy.get(Review_Payments.placeorder_btn).click()
    cy.url().should('include','/checkout/onepage/success/')
    cy.get(Review_Payments.placeorder_success_msg).should('have.text', 'Thank you for your purchase!')
  })

  // it.only('Validate when different data of billing and shipping address', () => {
  //   cy.get(Shipping.emailaddress).type('lalamariella@email.com')
  //   cy.get(Shipping.firstname).type('Lala')
  //   cy.get(Shipping.lastname).type('Mariella')
  //   cy.get(Shipping.company).type('PT Selalu Bisa')
  //   cy.get(Shipping.streetaddress1).type('Jl. Kencana Ungu')
  //   cy.get(Shipping.streetaddress2).type('Kec. Situbargi')
  //   cy.get(Shipping.streetaddress3).type('(Deket Indomaret)')
  //   cy.get(Shipping.city).type('Surabaya')
  //   cy.get(Shipping.state).select('Texas')
  //   cy.get(Shipping.postcode).type('12321')
  //   cy.get(Shipping.country).select('Indonesia')
  //   cy.get(Shipping.phonenumber).type('081232145678')
  //   cy.get(Shipping.ship_flatrate).click()
  //   cy.get(Shipping.next_btn).click()

  // // Uncheck checkbox My billing and shipping address are the same
  //   cy.get(Review_Payments.differentaddress_checkbox).uncheck()
  //   cy.wait(2000)
  // // Fill in the form
  //   cy.get(Review_Payments.edit_btn).click()
  //   cy.get(Review_Payments.firstname).type('Agus')
  //   cy.get(Review_Payments.lastname).type('Marianji')
  //   cy.get(Review_Payments.company).type('PT Cahaya Bulan')
  //   cy.get(Review_Payments.streetaddress1).type('Jl. Kecubung Rondo')
  //   cy.get(Review_Payments.streetaddress2).type('Kec. Ketira')
  //   cy.get(Review_Payments.streetaddress3).type('(Deket Alfamart)')
  //   cy.get(Review_Payments.city).type('Malang')
  //   cy.get(Review_Payments.state).select('Texas')
  //   cy.get(Review_Payments.postcode).type('89089')
  //   cy.get(Review_Payments.country).select('Indonesia')
  //   cy.get(Review_Payments.phonenumber).type('08987654321')
  // // Click Update address
  //   cy.get(Review_Payments.updateaddress_btn).click()
  //   cy.get(Review_Payments.edit_btn).should('be.visible')
  //   cy.get(Review_Payments.placeorder_btn).should('not.be.disabled')
  // })
})