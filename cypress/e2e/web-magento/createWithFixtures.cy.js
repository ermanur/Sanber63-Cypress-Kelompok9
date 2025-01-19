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

    it('Create an Account failed with symbol in firstname & lastname ', () => {
        cy.fixture('users.json').then((users) => {
            const datauser = users[2];
            cy.CreateAccount(datauser.firstname, datauser.lastname, datauser.password, datauser.confirm_pass)
        })
        createAccPageCy.verifyErrormsge('First Name is not valid! Last Name is not valid!')
    })

    it('Create an Account failed with password length less than 8', () => {
        cy.fixture('users.json').then((users) => {
            const datauser = users[3];
            cy.CreateAccount(datauser.firstname, datauser.lastname, datauser.password, datauser.confirm_pass)
        })
        createAccPageCy.verifyPassLevel('Password Strength: Weak')
        createAccPageCy.verifypassword('Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
      })

    it('Create an Account failed with leading and trailing spaces', () => {
        cy.fixture('users.json').then((users) => {
            const datauser = users[4];
            cy.CreateAccount(datauser.firstname, datauser.lastname, datauser.password, datauser.confirm_pass)
        })
        createAccPageCy.verifyPassLevel('Password Strength: Weak')
        createAccPageCy.verifypassword('Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
    
    })

    it('Create an Account failed if password just have 1 character', () => {
        cy.fixture('users.json').then((users) => {
            const datauser = users[5];
            cy.CreateAccount(datauser.firstname, datauser.lastname, datauser.password, datauser.confirm_pass)
        })
        createAccPageCy.verifyPassLevel('Password Strength: Weak')
        createAccPageCy.verifypassword('Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })

    it('Create an Accoun failed with missmatch password', () => {
        cy.fixture('users.json').then((users) => {
            const datauser = users[6];
            cy.CreateAccount(datauser.firstname, datauser.lastname, datauser.password, datauser.confirm_pass)
        })
        createAccPageCy.clickCreate()
        createAccPageCy.verifyConfPass('Please enter the same value again.')
        
    })


})