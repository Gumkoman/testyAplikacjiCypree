describe('PG Logowanie Kontem PBG', () => {
    
    afterEach(() => {
        cy.wait(100)
        {timeout: 2000}
        cy.get('body').then(($body) => {
            if ($body.text().includes('Tak, przejdź do serwisu')) {
                cy.get('[type="primary"] > .btn')
                cy.contains('Tak, przejdź do serwisu').click({ force: true })
            } else {
                // cy.wait(100)
            }
        })
    })
    beforeEach(() => {
        cy.wait(100)
        {timeout: 2000}
        cy.get('body').then(($body) => {
            if ($body.text().includes('Tak, przejdź do serwisu')) {
                cy.get('[type="primary"] > .btn')
                cy.contains('Tak, przejdź do serwisu').click({ force: true })
            } else {
                // cy.wait(100)
            }
        })
    })


    it('Otwiera strone web PBG', () => {
        //Otwiera stronę WEB PBG
        cy.visit('https://www.elevensports.pl')
    })


    it('1. Użytkownik klika w zakładkę konto -> "Zaloguj się"', () => {
        //klika przycisk zaloguj
        cy.get(':nth-child(2) > .buttons__btn')
            .click()
        cy.get(':nth-child(1) > .menu-vertical__link')
            .click()
    })




    it('3. Użytkownik wprowadza poprawne dane i klika "Zaloguj się".', () => {
        //2. Wyświetla się karta logowania z polami: E-mail/login, Hasło, przyciskami: 'Zaloguj się', 'Nie pamiętasz hasła?', 'Anuluj' oraz Logowanie Facebook, Logowanie Apple ID.
        cy.get(':nth-child(1) > .ng-untouched > .text-field')
            .type("awpoukcp+69@gmail.com")            //wpisuje "E-mail"
        cy.get(':nth-child(2) > .ng-untouched > .text-field')
            .type("qwe123")                            //wpisuje "Hasło"
        cy.get('[nativetype="submit"] > .btn')
            .contains('Zaloguj się')
            // .click()
        cy.pause()
    }) 

    // it('3. Użytkownik wprowadza poprawne dane i klika "Zaloguj się".', () => {
    //     //3. Użytkownik uzupełnia wszystkie potrzebne dane i zaznacza chcecbox 'Nie jestem robotem' a następnie klika 'Załóż konto'.
    //     cy.get('input[placeholder="E-mail"]').type("awpoukcp+69@gmail.com")            //wpisuje "E-mail"
    //     cy.get('input[placeholder="Hasło"]').type("qwe123")                            //wpisuje "Hasło"
    //     cy.get(':nth-child(4) > .vteimq-0')
    //         .should('be.visible')
    //         .contains('Zaloguj się')
    //         .click()
    // })



    // it('4/5. Wyświetla się karta "Oglądaj jako", check if logged -> log out', () => {
    //     //4. Wyświetla się karta 'Oglądaj jako' z profilem/profilami użytkownika oraz z przyciskiem 'Dodaj profil' i opcja 'Zarzadząj profilami'.
    //     //5. Użytkownik klika na ikonkę istniejącego profilu
    //     cy.contains('Oglądaj jako').should('be.visible')
    //     cy.get('[data-testing="profile_0"] > .a4jzo-1 > .a4jzo-0').should('be.visible')
    //     cy.contains('Dodaj profil').should('be.visible')
    //     cy.contains('Zarządzaj profilami').should('be.visible')
    //     cy.get('[data-testing="profile_2"] > .a4jzo-1 > .a4jzo-0').click()
    //     cy.wait(2000)

    //     .then('8. Sprawdza if zalogowany -> wylogowanie', () => {
    //         //6. Sprawdza if zalogowany -> wylogowanie
    //         cy.get('.r8perb-9')
    //             .contains('Konto').should('be.visible')
    //             .click()
    //         cy.get('.r8perb-22 > :nth-child(3) > .r8perb-7')
    //             .contains('Wyloguj się').should('be.visible')
    //             .click()
    //     })
    // })
})