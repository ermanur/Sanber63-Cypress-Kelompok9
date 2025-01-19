class LoginPage {
  visit() {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
  }

  fillEmail(email) {
    cy.get('#email').clear().type(email);
  }

  fillPassword(password) {
    cy.get('#pass').clear().type(password);
  }

  submit() {
    cy.get('#send2').click();
    cy.url().should('include', '/customer/account');
  }

  verifyErrorMessage(message) {
    cy.contains(message).should('be.visible');
  }

  verifyFieldVisibility() {
    cy.get('#email').should('be.visible');
    cy.get('#pass').should('be.visible');
    cy.get('#send2').should('be.visible');
  }
}

export default LoginPage;
