import { elementSignUp } from "../pages/signUp"

let url = 'https://autobahn.security/signup'
let email = 'csqvx9l3hi@livfdr.tech'
let password = Cypress.env('password')
let phoneNumber = 88812344332

describe('Successfully Sign Up', () => {
  it('Sign Up with valid Email and Password', () => {
    cy.visit(url).wait(2000)
    cy.get(elementSignUp.inputEmail).type(email)
    cy.get(elementSignUp.inputPassword).type(password)
    cy.get(elementSignUp.btnSignUp).click().wait(7000)
    cy.get(elementSignUp.inputFirstName).first().type('Bruno')
    cy.get(elementSignUp.inputLastname).type('Luffy')
    cy.get(elementSignUp.dropDownIndustry).click().wait(2000)
    cy.contains('Software').click()
    cy.get(elementSignUp.dropDownPhone).click(1000)
    cy.contains('Indonesia').click()
    cy.get(elementSignUp.inputPhone).type(phoneNumber)
    cy.get(elementSignUp.btnStart).click().wait(5000)
  })
})