describe('ngapp', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('addons-imports-root').should('exist');
  });
});
