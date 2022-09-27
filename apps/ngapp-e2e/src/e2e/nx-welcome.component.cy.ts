describe('ngapp', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('addons-imports-nx-welcome').should('exist');
  });
});
