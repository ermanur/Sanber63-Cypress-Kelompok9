describe('proceed to checkout', () => {
  
  beforeEach(() => {
    // Visit item detail page
        cy.visit('https://magento.softwaretestingboard.com/checkout/cart/')
        cy.wait(2000)

  })
})