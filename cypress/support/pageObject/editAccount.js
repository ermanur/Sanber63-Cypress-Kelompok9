class editAccount {
    //locator
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

    //actions
    clickEditName(){
        cy.get(this.editName).click()
    }
}

module.exports = new editAccount()