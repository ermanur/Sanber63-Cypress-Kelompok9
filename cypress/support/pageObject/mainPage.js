class editPage {
    //sign in
    signin = '.panel > .header > .authorization-link > a'
    email = '#email'
    password = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'
    signinBtn = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2'
    dropdown = ':nth-child(2) > .customer-welcome > .customer-name > .action'
    myaccount = ':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a'

    //edit account
    editName = '.block-dashboard-info > .block-content > .box > .box-actions > .edit > span'
    firstname = '#firstname'
    lastname = '#lastname'
    saveAccountBtn = '#form-validate > .actions-toolbar > div.primary > .action'
    successEditName = '.message-success' //validasi
    changeEmail = '#change-email'
    changePassword = '#change-password'
    newEmail = '#email'
    currentPassword = '#current-password'
    newPassword = '#password'
    confirmNewPass = '#password-confirmation'
    editPassword = '.change-password'

    //edit address
    editBillAddress = '.box-billing-address > .box-actions > .action > span'
    editShipAddress = '.box-shipping-address > .box-actions > .action > span'
    company = '#company'
    phoneNumber = '#telephone'
    streetAddress = '#street_1'
    city = '#city'
    state = '#region_id'
    postalCode = '#zip'
    country = '#country'
    saveAddressBtn = '#form-validate > .actions-toolbar > div.primary > .action'

    //actions
    clickSignIn(){
        cy.get(this.signin).click()
    }
}

module.exports = new editPage()