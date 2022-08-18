Cypress.Cookies.defaults({
    preserve: 'connect.sid'
})
before(() => {
    cy.visit('https://staging.polsatboxgo.pl/zarejestruj?next=https%253A%252F%252Fstaging.polsatboxgo.pl%252Fstart')
        .url()
    cy.get('.sc-61m640-10')
        .contains('Tak, przejdź do serwisu')
        .click()
        .url()
    cy.get('.sc-1l6fcq3-4 > .vteimq-0')
        .contains('Załóż konto')
        .url()
        .should('include', 'zarejestruj')
    
})


    it('Reg wszystkie pola puste', () => {
        cy.get('.sc-1l6fcq3-4 > .vteimq-0')
            .contains('Załóż konto')
            .click()
            .url()
            .should('include', 'zarejestruj')
        cy.get('.sc-133lttf-1 > :nth-child(2)')
            .contains('Wpisz adres e-mail')
        cy.get('.sc-133lttf-1 > :nth-child(3)')
            .contains('Wpisz hasło')
        cy.get('.sc-133lttf-1 > :nth-child(4)')
            .contains('Powtórz hasło')
        cy.get('.sc-133lttf-1 > :nth-child(6)')
            .contains('Zaakceptuj regulamin')
        cy.get('.sc-133lttf-1 > :nth-child(7)')
            .contains('Zaakceptuj regulamin')
        cy.get('.iawr6o-1')
            .contains('Potwierdź, że nie jesteś robotem')
    })

    it('Reg nie poprawne dane E-mail', () => {
        cy.get('.sc-1l6fcq3-4 > .vteimq-0')
    })

