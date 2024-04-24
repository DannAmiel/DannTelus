import { Test } from '../support/FunctionalTestscript';

let test = new Test();



describe('Login Scenarios', () => { 
  defaultCommandTimeout: 20000
  it('HappyPath User Login', () => {
    test.LoginValid()
  })
  it('HappyPath Add Other Language', () => {
    test.HappyPathOtherLanguage()
  })

  it('Invalid User Login', () => {
    test.LoginInvalidUser()
  })
  
  it('Invalid Pass Login', () => {
    test.LoginInvalidPass()
  })

  it('Invalid All Credentials', () => {
    test.LoginInvalidAll()

  })

  it('Blank Credentials', () => {
    test.LoginBlank()
  })


  })


