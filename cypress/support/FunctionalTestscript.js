import ObjectElement from './ObjectElements.js';
//import testdata from '../fixtures/testdata.json'


export class Test{

//For Valid Credentials  
LoginValid() {
  cy.visit('https://www.telusinternational.ai/cmp/');
  cy.fixture('testdata').then((testdata) => {
    this.testdata = testdata    

  cy.get(ObjectElement.ContinueBTN).should('exist');
  cy.get(ObjectElement.EmailField).type(this.testdata.ValidUser);
  cy.get(ObjectElement.ContinueBTN).click();
  cy.get(ObjectElement.Password).type(this.testdata.ValidPass);
  cy.get(ObjectElement.ContinueBTN).click();
})}

  //For Invalid UserName
  LoginInvalidUser() {
    cy.visit('https://www.telusinternational.ai/cmp/');
    cy.fixture('testdata').then((testdata) => {
      this.testdata = testdata   
  
    cy.get(ObjectElement.EmailField).type(this.testdata.InvalidUser);
    cy.get(ObjectElement.ContinueBTN).click();
    cy.get(ObjectElement.Password).type(this.testdata.ValidPass);
    cy.get(ObjectElement.ContinueBTN).click()
    cy.get(ObjectElement.InvalidCredentialError).should('have.text' , this.testdata.errorMessage1); 
    cy.get(ObjectElement.InvalidCredentialError2).should('have.text' , this.testdata.errorMessage2); 
    
  })}

  //For Invalid Password
  LoginInvalidPass() {
    cy.visit('https://www.telusinternational.ai/cmp/');
    cy.fixture('testdata').then((testdata) => {
      this.testdata = testdata
        
    cy.get(ObjectElement.EmailField).type(this.testdata.ValidUser);
    cy.get(ObjectElement.ContinueBTN).click()
    cy.get(ObjectElement.Password).type(this.testdata.InvalidPass);
    cy.get(ObjectElement.ContinueBTN).click()
    cy.get(ObjectElement.InvalidCredentialError).should('have.text' , this.testdata.errorMessage1); 
    cy.get(ObjectElement.InvalidCredentialError2).should('have.text' , this.testdata.errorMessage2); 
    
  })}

  //For Invalid Credentials
  LoginInvalidAll() {
    cy.visit('https://www.telusinternational.ai/cmp/');
    cy.fixture('testdata').then((testdata) => {
      this.testdata = testdata
  
    cy.get(ObjectElement.EmailField).type(this.testdata.InvalidUser);
    cy.get(ObjectElement.ContinueBTN).click()
    cy.get(ObjectElement.Password).type(this.testdata.InvalidPass);
    cy.get(ObjectElement.ContinueBTN).click()
    cy.get(ObjectElement.InvalidCredentialError).should('have.text' , this.testdata.errorMessage1); 
    cy.get(ObjectElement.InvalidCredentialError2).should('have.text' , this.testdata.errorMessage2); 
    

  
  })}

  //For Blank Credentials
  LoginBlank() {
    cy.visit('https://www.telusinternational.ai/cmp/');
    cy.fixture('testdata').then((testdata) => {
      this.testdata = testdata
 
      cy.get(ObjectElement.ContinueBTN).click()
      cy.get(ObjectElement.EmailError).should('exist').should('be.visible')
      cy.get(ObjectElement.EmailErrorMess).should('exist').should('be.visible').should('have.text' , this.testdata.errorMessageBlank)
    
  
  })}

  HappyPathOtherLanguage() {
    cy.visit('https://www.telusinternational.ai/cmp/');
    cy.fixture('testdata').then((testdata) => {
      this.testdata = testdata    
  
    cy.get(ObjectElement.ContinueBTN).should('exist');
    cy.get(ObjectElement.EmailField).type(this.testdata.ValidUser);
    cy.get(ObjectElement.ContinueBTN).click();
    cy.get(ObjectElement.Password).type(this.testdata.ValidPass);
    cy.get(ObjectElement.ContinueBTN).click();
    cy.url().should('eq', 'https://www.telusinternational.ai/cmp/contributor/dashboard');
    cy.get(ObjectElement.Avatar).click();
    cy.get(ObjectElement.MyProfile).click();
    cy.url().should('eq', 'https://www.telusinternational.ai/cmp/contributor/userprofile/basic-info');
    cy.get(ObjectElement.Languages).click();
    cy.url().should('eq', 'https://www.telusinternational.ai/cmp/contributor/userprofile/languages');
    cy.get(ObjectElement.AddButtonLang).click();
    cy.get(ObjectElement.SelectLangOthField).type('English (Philippines){enter}');
    cy.get(ObjectElement.SelectLangOthField).wait(200).type('{enter}');
    cy.get(ObjectElement.SelectLangOthField).wait(200).type('{enter}');
    cy.get(ObjectElement.SelectLangProfField).type('Full working proficiency{enter}');
    cy.get(ObjectElement.SelectLangProfField).wait(200).type('{enter}');
    cy.get(ObjectElement.LangSaveButton).click();
    cy.get(ObjectElement.Avatar2).click();
    cy.get(ObjectElement.SignOutButton).click();
  
  
  
  
  })}
  
} 