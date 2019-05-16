describe('test first page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  });
  it('test input with good value', () => {
    cy.get('input[type=text]').click().type('Some');
    cy.get('#btnSearch').click();
  })
  it('test input with bad value', () => {
      const stub = cy.stub();

      cy.on('window:alert', stub);
    cy.get('input[type=text]').clear('').type('TestTestTestTestTestTestTestTestTestTestTestTestTestTest');
  })
})