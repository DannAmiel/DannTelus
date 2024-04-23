import { Test } from '../support/LoginTestscript';

let test = new Test();



describe('Login Scenarios', () => { 
  defaultCommandTimeout: 20000
  it('HappyPath User Login', () => {
    test.LoginValid()
  })
  it('HappyPath Update Language', () => {
    test.HappyPathLanguage()
  })



})


