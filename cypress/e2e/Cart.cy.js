// cypress/integration/fetch_items.spec.js
describe('Fetch Items', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/login');
    cy.get('#email').type('johndoe@example.com');
    cy.get('#password').type('password');
    cy.contains('button', 'LOG IN').click();
    cy.wait(3000); // Wait for 5 seconds for the page to load
    cy.visit('http://127.0.0.1:5173/cart');

  });

  it('successfully fetches items', () => {
    // Visit the cart page
    cy.visit('http://127.0.0.1:5173/cart');

    cy.intercept('GET', 'http://localhost:8090/api/shoppinglists/group/*', {
      statusCode: 200,
      body: [
        {
          id: 1,
          categoryName: 'Test Item 1',
          groupId: 1,
          quantity: 1,
          status: 'pending',
          measurement: 'liters',
          userId: 1,
          categoryType: 'grocery',

          // Add other properties based on your response data
        },
        {
          id: 2,
          name: 'Test Item 2',
          groupId: 1,
          quantity: 2,
          status: 'requested',
          measurement: 'liters',
          userId: 1,
          categoryType: 'grocery',
          // Add other properties based on your response data
        },
      ],
    }).as('fetchItems');

    // Call the fetchItems method (assuming your component has a ref with id 'app')

    cy.wait('@fetchItems').then((interception) => {
      // Check if the request has the correct JWT token
      expect(interception.request.headers.authorization).to.contain('Bearer ');

      // Check if the items are rendered in the DOM
      cy.get('[data-testid="item-1"]').should('contain', 'Test Item 1');
      cy.get('[data-testid="item-2"]').should('contain', 'Test Item 2');
    });
  });

  // Add more tests to cover error cases or different scenarios
});
