// Global Cypress commands and hooks can be added here.

import './commands'
import './quizActions'

beforeEach(() => {
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
})
