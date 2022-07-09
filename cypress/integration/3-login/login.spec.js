/// <reference types="Cypress" />
// test scenario --- what to test ?
// test case --- how to test ??  we need to mention every step

describe('validate login functionality for ORANGE HRM',function(){

    it('validate with valid credential',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('h1').should('be.visible').and('have.text',"Dashboard")  
    })
    it('validate with invalid credentials ',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admissn123')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('be.visible').and('have.text','Invalid credentials')

    })

})