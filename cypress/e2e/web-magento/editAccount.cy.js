import editAccount, { clickEditName } from "../../support/pageObject/editAccount"
import signIn, { clickSignIn } from "../../support/pageObject/signIn"

describe ('Magento Edit Account', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.signInCommands()
    })
    it('Edit Account Success', () => {
        cy.get(clickEditName)
    })
}) 