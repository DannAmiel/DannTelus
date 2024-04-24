describe('PokeAPI Tests', () => {
    it('should retrieve information about a Pokemon', () => {
      cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/1')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('name', 'bulbasaur'); //checking for exact values
          expect(response.body).to.have.property('weight', 69); //checking for exact values
          expect(response.body).to.have.property('height').that.is.a('number'); //checking for type of value
          expect(response.body).to.have.property('abilities').that.is.an('array'); //checking that the data has multiple items
        });
    });
  
    it('should return a list of Pokemon types', () => {
      cy.request('GET', 'https://pokeapi.co/api/v2/type')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('count').that.is.a('number').gt(0); //checking that the count data is a number and greater than 0
          expect(response.body).to.have.property('results').that.is.an('array').and.not.empty; //checking that the data list is not empty and has multiple items
        });
    });
  

  });