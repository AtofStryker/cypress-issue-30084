import React from 'react'
import App from './App.jsx'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
    cy.get('h1').should('have.text', 'I am the vite App!')
  })
})