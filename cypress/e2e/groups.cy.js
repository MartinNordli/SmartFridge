describe('Group management', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login');
    cy.get('#email').type('johndoe@example.com');
    cy.get('#password').type('password');
    cy.contains('button', 'LOG IN').click();
    cy.wait(3000); // Wait for 3 seconds for the page to load
    cy.visit('http://localhost:5173/groups');
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  })

  it('should display group selection dropdown', () => {
    cy.get('.chooseGroup select').should('be.visible');
  });

  it('selects a group', () => {
    cy.get('.chooseGroup select').should('be.visible').then(() => {
      cy.get('.chooseGroup select').select('1');
      cy.get('.chosenGroupInfo h1').should('contain', 'Group 1');
      cy.get('.chosenGroupInfo h2').should('contain', 'Id: 1');
    });

  });

//   it('should display selected group name and ID', () => {
//     cy.get('.chosenGroupInfo h1').should('be.visible');
//     cy.get('.chosenGroupInfo h2').should('be.visible');
//   });
//
//   it('should display input for join code and buttons for joining and leaving groups', () => {
//     cy.get('.addGroup input[type="text"]').should('be.visible');
//     cy.get('.addGroup button').contains('Join').should('be.visible');
//     cy.get('.addGroup button#removeGroup').contains('Leave').should('be.visible');
//   });
});


// it('Renders the group management page', () => {
//     cy.get('.chooseGroup').should('be.visible');
//     cy.get('.addGroup').should('be.visible');
//     cy.get('.chosenGroupInfo').should('be.visible');
//   });
//
//     it('selects a group', () => {
//         cy.get('.chooseGroup select').should('be.visible'); // Select group with id 1
//     });

//   it('selects a group', () => {
//     cy.get('.chooseGroup select').should('be.visible').then(() => {
//       cy.get('.chooseGroup select').select('-1'); // Select group with id 1
//     });
//
//     cy.get('.chooseGroup select').select('1'); // Select group with id 1
//     cy.get('.chosenGroupInfo h1').should('contain', 'Group 1');
//     cy.get('.chosenGroupInfo h2').should('contain', 'Id: 1');
//   });
// });


// it('leaves a group', () => {
  //   cy.get('#removeGroup').click();
  //
  // });

  // it('copies the share link', () => {
  //   cy.get('#copyShareLink').click();
  //   cy.get('#alert').should('be.visible');
  // });
  //
  // it('joins a group', () => {
  //   cy.get('.addGroup input[type="text"]').type('join-code');
  //   cy.get('.addGroup button').contains('Join').click();
  //   // Add assertions for successful group joining, like checking for the new group in the dropdown
  // });
  //
  // it('leaves a group', () => {
  //   cy.get('#removeGroup').click();
  //   // Add assertions for successful group leaving, like checking for the removal of the group in the dropdown
  // });
  //
  // it('makes a user admin', () => {
  //   cy.get('.administration .user:first-child #makeUserAdmin').click();
  //   // Add assertions for successful user promotion, like checking for updated user status or UI changes
  // });
  //
  // it('removes a user', () => {
  //   cy.get('.administration .user:first-child #removeUser').click();
  //   // Add assertions for successful user removal, like checking for the removed user in the users list
  // });