import signIn from "../pageObject/signIn";

Cypress.Commands.add('signInCommands', () => {
    signIn.clickSignIn()
    signIn.fillEmail()
    signIn.fillPassword()
    signIn.clickSignInBtn()
    signIn.dropDown()
    signIn.myAccount()
});

