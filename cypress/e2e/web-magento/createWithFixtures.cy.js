const createAccPageCy = require("../../support/pageObjectModel/createAccPage.cy")

describe('Negative Scenario - Create an Account Scenario with fixtures', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('Create an Account failed with symbol in firstname ', () => {
        cy.fixture('users.json').then((users) => {
        const datauser = users[0];
        cy.CreateAccount(datauser.firstname, datauser.lastname, datauser.password, datauser.confirm_pass)
        })
        createAccPageCy.verifyErrormsg('First Name is not valid!')
    })

    it('Create an Account failed with symbol in lastname ', () => {
        cy.fixture('users.json').then((users) => {
            const datauser = users[1];
            cy.CreateAccount(datauser.firstname, datauser.lastname, datauser.password, datauser.confirm_pass)
        })
        createAccPageCy.verifyErrormsg('Last Name is not valid!')
    })

    it.only('Create an Account failed with symbol in firstname & lastname ', () => {
        cy.fixture('users.json').then((users) => {
            const datauser = users[2];
            cy.CreateAccount(datauser.firstname, datauser.lastname, datauser.password, datauser.confirm_pass)
        })
        createAccPageCy.verifyErrormsge('First Name is not valid! Last Name is not valid!')
    })
})