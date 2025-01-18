import LoginPage from "../../support/pageObjectModel/loginPage.cy";

const validEmail = 'Rubina1@mail.com';
const validPassword = 'Sanbercode00';
const loginPage = new LoginPage();

describe('Magento Login Page scenario', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('Login with vaild email and password', () => {
    loginPage.fillEmail(validEmail);
    loginPage.fillPassword(validPassword);
    loginPage.submit();
    cy.url().should('include', '/customer/account');
  });

  it('Login with special characters in username and password', () => {
    const specialCharEmail = 'user_123@mail.com';
    const specialCharPassword = 'pass@123';
    loginPage.fillEmail(specialCharEmail);
    loginPage.fillPassword(specialCharPassword);
    loginPage.submit();
    cy.url().should('include', '/customer/account');
  });

  it('Login with invalid email and valid password', () => {
    loginPage.fillEmail('wrong@mail.com');
    loginPage.fillPassword(validPassword);
    loginPage.submit();
    loginPage.verifyErrorMessage('The account sign-in was incorrect or your account is disabled temporarily.');
  });

  it('Login valid email and invalid password', () => {
    loginPage.fillEmail(validEmail);
    loginPage.fillPassword('wrong_password');
    loginPage.submit();
    loginPage.verifyErrorMessage('The account sign-in was incorrect or your account is disabled temporarily.');
  });

  it('Login with empty field', () => {
    cy.get('#email').clear(); 
    cy.get('#send2').click(); 
    cy.contains(/This is a required field\.|A login and a password are required\./).should('be.visible');
});
  
  it('Click Login button without filling form', () => {
    cy.get('#email').clear();
    cy.get('#pass').clear();
    cy.get('#send2').click();
    cy.contains(/This is a required field\.|A login and a password are required\./).should('be.visible');
  });

  it('Verify elements on the login page', () => {
    loginPage.verifyFieldVisibility();
  });
});
