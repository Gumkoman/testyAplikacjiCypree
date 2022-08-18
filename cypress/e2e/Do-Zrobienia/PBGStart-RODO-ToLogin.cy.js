describe('Logowanie kontem FB', () => {

    afterEach(() => {
        // cy.wait(100)
        {timeout: 2000}
        cy.get('body').then(($body) => {
            if ($body.text().includes('Tak, przejdź do serwisu')) {
                cy.get('.sc-61m640-10 > .kmqjwy')
                cy.contains('Tak, przejdź do serwisu').click({ force: true })
            } else {
                // cy.wait(100)
            }
        })
    })
    beforeEach(() => {
        {timeout: 2000}
        cy.get('body').then(($body) => {
            if ($body.text().includes('Tak, przejdź do serwisu')) {
                cy.get('.sc-61m640-10 > .kmqjwy')
                cy.contains('Tak, przejdź do serwisu').click({ force: true })
            } else {
                // cy.wait(100)
            }
        })
    })

    it('Otwiera strone web PBG', () => {
        //Otwiera stronę WEB PBG
        cy.visit('https://polsatboxgo.pl/start')
    })


    it('User klika przycisk zaloguj', () => {
        //klika przycisk zaloguj
        cy.get('.r8perb-28 > .vteimq-0') .click()
    })

    it('User Klika "Zaloguj się innymi danymi', () => {
        //User Klika "Zaloguj się innymi danymi
        cy.get(':nth-child(5) > .vteimq-0') .click()
    })

})