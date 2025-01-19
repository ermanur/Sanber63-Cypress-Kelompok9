import LoginPage from "../../support/pageObjectModel/loginPagePOM.cy";

const validEmail = 'Rubina1@mail.com';
const validPassword = 'Sanbercode00';
const loginPage = new LoginPage();

describe('Magento Login Page Test Case', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('Positive - Login with vaild email and password', () => {
    loginPage.fillEmail(validEmail);
    loginPage.fillPassword(validPassword);
    loginPage.submit();
    cy.url().should('include', '/customer/account');
  });

  it('Positive - Login with special characters in username and password', () => {
    const specialCharEmail = 'user_123@mail.com';
    const specialCharPassword = 'pass@123';
    loginPage.fillEmail(specialCharEmail);
    loginPage.fillPassword(specialCharPassword);
    loginPage.submit();
    cy.url().should('include', '/customer/account');
  });

  it('Negative - Login with invalid email and valid password', () => {
    loginPage.fillEmail('wrong@mail.com');
    loginPage.fillPassword(validPassword);
    loginPage.submit();
    loginPage.verifyErrorMessage('The account sign-in was incorrect or your account is disabled temporarily.');
  });

  it('Negative - Login valid email and invalid password', () => {
    loginPage.fillEmail(validEmail);
    loginPage.fillPassword('wrong_password');
    loginPage.submit();
    loginPage.verifyErrorMessage('The account sign-in was incorrect or your account is disabled temporarily.');
  });

  it('Negative - Login with empty pass field', () => {
    cy.get('#email').clear(); 
    cy.get('#send2').click(); 
    cy.contains(/This is a required field\.|A login and a password are required\./).should('be.visible');
});
  
 it('Negative - Login with empty email field', () => {
    cy.get('#pass').clear(); 
    cy.get('#send2').click(); 
    cy.contains(/This is a required field\.|A login and a password are required\./).should('be.visible');
});
  
  it('Negative - Click Login button without filling form', () => {
    cy.get('#email').clear();
    cy.get('#pass').clear();
    cy.get('#send2').click();
    cy.contains(/This is a required field\.|A login and a password are required\./).should('be.visible');
  });

  it('Additional - Verify elements on the login page', () => {
    loginPage.verifyFieldVisibility();
  });
});
