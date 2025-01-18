import createAccPageCy from "../../support/pageObjectModel/createAccPage.cy"

describe('Magento Website - Create an Account Scenario', () => {

  function randomEmail(){
    const randomString = Math.random().toString(36).substring(2,9)
    const email = randomString + "@mail.com"
    return email
  }

  beforeEach(() => {
    cy.visit('')
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
  })

  //Positive Test
  it.skip('Create an Account success', () => {
    let useremail = randomEmail()
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#lastname').type('Rubina')
    cy.get('#email_address').type(useremail)
    cy.get('#password').type('Sanbercode00')
    cy.get('#password-confirmation').type('Sanbercode00')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get(':nth-child(2) > .greet > .logged-in').should('have.text', 'Welcome, Ana Rubina!' )
    cy.get('.message-success > div').should('have.text','Thank you for registering with Main Website Store.')
  })

  it('Create an Account success with number in firstname ', () => {
    let useremail = randomEmail()
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('1998000')
    cy.get('#lastname').type('Rubina')
    cy.get('#email_address').type(useremail)
    cy.get('#password').type('Sanbercode00')
    cy.get('#password-confirmation').type('Sanbercode00')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get(':nth-child(2) > .greet > .logged-in').should('have.text', 'Welcome, 1998000 Rubina!' )
    cy.get('.message-success > div').should('have.text','Thank you for registering with Main Website Store.')
  })

  it('Create an Account success with mix alphabet & number in firstname ', () => {
    let useremail = randomEmail()
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana1998')
    cy.get('#lastname').type('Rubina')
    cy.get('#email_address').type(useremail)
    cy.get('#password').type('Sanbercode00')
    cy.get('#password-confirmation').type('Sanbercode00')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get(':nth-child(2) > .greet > .logged-in').should('have.text', 'Welcome, Ana1998 Rubina!' )
    cy.get('.message-success > div').should('have.text','Thank you for registering with Main Website Store.')
  })

  it('Create an Account success with number in lastname ', () => {
    let useremail = randomEmail()
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#lastname').type('15045')
    cy.get('#email_address').type(useremail)
    cy.get('#password').type('Sanbercode00')
    cy.get('#password-confirmation').type('Sanbercode00')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get(':nth-child(2) > .greet > .logged-in').should('have.text', 'Welcome, Ana 15045!' )
    cy.get('.message-success > div').should('have.text','Thank you for registering with Main Website Store.')
  })

  it('Create an Account success with mix alphabet & number in lastname ', () => {
    let useremail = randomEmail()
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#lastname').type('Rubina20')
    cy.get('#email_address').type(useremail)
    cy.get('#password').type('Sanbercode00')
    cy.get('#password-confirmation').type('Sanbercode00')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get(':nth-child(2) > .greet > .logged-in').should('have.text', 'Welcome, Ana Rubina20!' )
    cy.get('.message-success > div').should('have.text','Thank you for registering with Main Website Store.')
  })

  it('Create an Account success with spaces in the middle character of password ', () => {
    let useremail = randomEmail()
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#lastname').type('Rubina')
    cy.get('#email_address').type(useremail)
    cy.get('#password').type('Sa n ber')
    cy.get('#password-strength-meter').contains('Password Strength: Medium')
    cy.get('#password-confirmation').type('Sa n ber')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get(':nth-child(2) > .greet > .logged-in').should('have.text', 'Welcome, Ana Rubina!' )
    cy.get('.message-success > div').should('have.text','Thank you for registering with Main Website Store.')
  })


//Negative Test
  it('Create an Account failed with symbol in firstname ', () => {
    let useremail = randomEmail()
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('@n4')
    cy.get('#lastname').type('Rubina')
    cy.get('#email_address').type(useremail)
    cy.get('#password').type('Sanbercode00')
    cy.get('#password-confirmation').type('Sanbercode00')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-error').should('contain', 'First Name is not valid!' )

  })

  it('Create an Account failed with symbol in lastname ', () => {
    let useremail = randomEmail()
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#lastname').type('Rub!n@')
    cy.get('#email_address').type(useremail)
    cy.get('#password').type('Sanbercode00')
    cy.get('#password-confirmation').type('Sanbercode00')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-error').should('contain', 'Last Name is not valid!' )
    
  })

  it('Create an Account failed with symbol in firstname & lastname ', () => {
    let useremail = randomEmail()
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('@n4')
    cy.get('#lastname').type('Rub!n@')
    cy.get('#email_address').type(useremail)
    cy.get('#password').type('Sanbercode00')
    cy.get('#password-confirmation').type('Sanbercode00')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-error').contains('First Name is not valid! Last Name is not valid!' )
    
  })

  it('Create an Account failed with empty firstname ', () => {
    let useremail = randomEmail()
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#lastname').type('Rubina')
    cy.get('#email_address').type(useremail)
    cy.get('#password').type('Sanbercode00')
    cy.get('#password-confirmation').type('Sanbercode00')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#firstname-error').should('have.text', 'This is a required field.')

   })

  it('Create an Account failed with empty lastname', () => {
    let useremail = randomEmail()
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#email_address').type(useremail)
    cy.get('#password').type('Sanbercode00')
    cy.get('#password-confirmation').type('Sanbercode00')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#lastname-error').should('have.text', 'This is a required field.')
  })

  it('Create an Account failed with invalid email', () => {
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#lastname').type('Rubina')
    cy.get('#email_address').type('iniemailnya$$')
    cy.get('#password').type('Sanbercode00')
    cy.get('#password-confirmation').type('Sanbercode00')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#email_address-error').should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')

  })

  it('Create an Account failed with empty email', () => {
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#lastname').type('Rubina')
    cy.get('#password').type('Sanbercode00')
    cy.get('#password-confirmation').type('Sanbercode00')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#email_address-error').should('have.text', 'This is a required field.')

  })

  it('Create an Account failed with password length less than 8', () => {
    let useremail = randomEmail()
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#lastname').type('Rubina')
    cy.get('#email_address').type(useremail)
    // cy.get('#password').type('S')
    // cy.get('#password-confirmation').type('S')
    // cy.get('#password-strength-meter').contains('Password Strength: Weak')
    cy.get('#password').type('@')
    cy.get('#password-strength-meter').contains('Password Strength: Weak')
    cy.get('#password-confirmation').type('@')
    cy.get('#password-error').should('have.text', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
  

  })

  it('Create an Account failed with leading and trailing spaces', () => {
    let useremail = randomEmail()
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#lastname').type('Rubina')
    cy.get('#email_address').type(useremail)
    cy.get('#password').type(' Sanber ')
    cy.get('#password-strength-meter').contains('Password Strength: Weak')
    cy.get('#password-confirmation').type(' Sanber ')
    cy.get('#password-error').should('have.text', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()


  })

  it('Create an Account failed if password just have 1 character', () => {
    let useremail = randomEmail()
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#lastname').type('Rubina')
    cy.get('#email_address').type(useremail)
    cy.get('#password').type('123456789')
    cy.get('#password-strength-meter').contains('Password Strength: Weak')
    cy.get('#password-error').should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    cy.get('#password-confirmation').type('123456789')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()

  })

  it('Create an Account failed if password just have 2 character', () => {
    let useremail = randomEmail()
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#lastname').type('Rubina')
    cy.get('#email_address').type(useremail)
    cy.get('#password').type('ABC123456')
    cy.get('#password-strength-meter').contains('Password Strength: Weak')
    cy.get('#password-error').should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    cy.get('#password-confirmation').type('ABC123456')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
  })


it('Create an Account failed with empty password', () => {
    let useremail = randomEmail()
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#lastname').type('Rubina')
    cy.get('#email_address').type(useremail)
    cy.get('#password-confirmation').type('Sanbercode00')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#password-error').should('have.text', 'This is a required field.')
    cy.get('#password-confirmation-error').should('have.text', 'Please enter the same value again.')

  })

  it('Create an Accoun failed with missmatch password', () => {
    let useremail = randomEmail()
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#lastname').type('Rubina')
    cy.get('#email_address').type(useremail)
    cy.get('#password').type('Sanbercode00')
    cy.get('#password-confirmation').type('Sanbercode123')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#password-confirmation-error').should('have.text', 'Please enter the same value again.')
    
  })

  it('Create an Accoun failed with empty confirm password', () => {
    let useremail = randomEmail()
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#lastname').type('Rubina')
    cy.get('#email_address').type(useremail)
    cy.get('#password').type('Sanbercode00')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('#password-confirmation-error').should('have.text', 'This is a required field.')

  })

  it.only('Create an Accoun with the same email is not allowed ', () => {
    cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
    cy.get('#firstname').type('Ana')
    cy.get('#lastname').type('Rubina')
    cy.get('#email_address').type('maliyaiueo@gmail.com')
    cy.get('#password').type('Sanbercode123')
    cy.get('#password-confirmation').type('Sanbercode123')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-error > div').should('have.text','There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    cy.get('#password').should('be.empty')
    cy.get('#password-confirmation').should('be.empty')

  })

  // //Verify Password Strange
  // it('Password Strange got Weak label if 3 char for 3 letters and 5 numbers/symbol', () => {
  //   let useremail = randomEmail()
  //   cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
  //   cy.get('#firstname').type('Ana')
  //   cy.get('#lastname').type('Rubina')
  //   cy.get('#email_address').type(useremail)
  //   cy.get('#password').type('Abc12345')
  //   cy.get('#password-strength-meter-label').should('have.text', 'Weak')

  // })

  // it('Password Strange got Medium label if 3 char for 4 letters and 4 numbers/symbols', () => {
  //   let useremail = randomEmail()
  //   cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
  //   cy.get('#firstname').type('Ana')
  //   cy.get('#lastname').type('Rubina')
  //   cy.get('#email_address').type(useremail)
  //   cy.get('#password').type('Abcd1234')
  //   cy.get('#password-strength-meter-label').should('have.text', 'Medium')

  // })

  // it('Password Strange got Medium label with use 4 character with length equal to 8', () => {
  //   let useremail = randomEmail()
  //   cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
  //   cy.get('#firstname').type('Ana')
  //   cy.get('#lastname').type('Rubina')
  //   cy.get('#email_address').type(useremail)
  //   cy.get('#password').type('San123$$')
  //   cy.get('#password-strength-meter-label').should('have.text', 'Medium')

  // })

  // it('Password Strange got Strong label with use 3 char for 6 letters & 6 symbol/number ', () => {
  //   let useremail = randomEmail()
  //   cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
  //   cy.get('#firstname').type('Ana')
  //   cy.get('#lastname').type('Rubina')
  //   cy.get('#email_address').type(useremail)
  //   cy.get('#password').type('Sanber123456')
  //   cy.get('#password-strength-meter-label').should('have.text', 'Strong')

  // })

  // it('Password Strange got Strong label with use 4 character with length 9-10', () => {
  //   let useremail = randomEmail()
  //   cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
  //   cy.get('#firstname').type('Ana')
  //   cy.get('#lastname').type('Rubina')
  //   cy.get('#email_address').type(useremail)
  //   cy.get('#password').type('Sanber12$$')
  //   cy.get('#password-strength-meter-label').should('have.text', 'Strong')

  // })

  // it('Password Strange got Very Strong label with use 3 char more than 8 letters and symbol/number ', () => {
  //   let useremail = randomEmail()
  //   cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
  //   cy.get('#firstname').type('Ana')
  //   cy.get('#lastname').type('Rubina')
  //   cy.get('#email_address').type(useremail)
  //   cy.get('#password').type('Sanberco123')
  //   cy.get('#password-strength-meter-label').should('have.text', 'Very Strong')

  // })

  // it('Password Strange got Very Strong label with use 4 character with 6 letter and 5 letter/symbol',() => {
  //   let useremail = randomEmail()
  //   cy.get('.panel.wrapper > .panel').contains('Create an Account').click()
  //   cy.get('#firstname').type('Ana')
  //   cy.get('#lastname').type('Rubina')
  //   cy.get('#email_address').type(useremail)
  //   cy.get('#password').type('Sanber12$$$')
  //   cy.get('#password-strength-meter-label').should('have.text', 'Very Strong')

  // })

})