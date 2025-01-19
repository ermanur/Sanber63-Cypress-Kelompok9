class createAccPage {
    createpage_btn ='.panel.wrapper > .panel'
    firstname = '#firstname'
    lastname = '#lastname'
    email = '#email_address'
    password = '#password'
    confirm_pass = '#password-confirmation'
    create_btn = '#form-validate > .actions-toolbar > div.primary > .action'
    welcome_name = ':nth-child(2) > .greet > .logged-in'
    welcome_text = '.message-success > div'
    pass_level = '#password-strength-meter'
    error_msg = '.message-error'
    error_msge = '.message-error'
    error_fn = '#firstname-error'
    error_ln = '#lastname-error'
    error_email = '#email_address-error'
    error_pw = '#password-error'
    error_confirmpw = '#password-confirmation-error'
    registered_email = '.message-error > div'

    clickCreatePage(){
        cy.get(this.createpage_btn).contains('Create an Account').click()
    }

    clickCreate(){
        cy.get(this.create_btn).click()
    }

    verifyWelcomeName(welcomeName){
        cy.get(this.welcome_name).should('have.text',welcomeName)

    }

    verifyWelcomeText(welcomeText){
        cy.get(this.welcome_text).should('have.text',welcomeText)
    }

    verifyPassLevel(passLevel){
        cy.get(this.pass_level).should('have.text',passLevel)
    }

    verifyErrormsg(errormsg){
        cy.get(this.error_msg).should('contain.text',errormsg)
    }

    verifyErrormsge(errormsge){
        cy.get(this.error_msge).contains(errormsge)
    }

    verifyfirstname(errorFn){
        cy.get(this.error_fn).should('have.text',errorFn)
    }

    verifylastname(errorLn){
        cy.get(this.error_ln).should('have.text',errorLn)
    }

    verifyemail(errorEmail){
        cy.get(this.error_fn).should('have.text',errorEmail)
    }

    verifypassword(errorPw){
        cy.get(this.error_pw).should('have.text',errorPw)
    }

    verifyconfpw(errorConfirmPw){
        cy.get(this.error_confirmpw).should('have.text',errorConfirmPw)
    }

    verifyregemail(regEmail){
        cy.get(this.registered_email).should('have.text',regEmail)
    }

    verifypassempty(passempty){
        cy.get(this.password).should('be.empty')
    }

    verifyconfpassempty(confpassempty){
        cy.get(this.confirm_pass).should('be.empty')
    }

}

module.exports = new createAccPage()