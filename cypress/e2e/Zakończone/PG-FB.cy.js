describe('PG Logowanie kontem FB', () => {

    afterEach(() => {
        cy.wait(200)
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
        cy.wait(200)
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
        cy.visit('https://polsatgo.pl/start')
    })


    it('1. Użytkownik klika w zakładkę "Zaloguj się"', () => {
        //klika przycisk zaloguj
        cy.get('.r8perb-28 > .vteimq-0') .click()
    })


    // it('2. Wyświetla się karta logowania', () => {
    //     //2. Wyświetla się karta logowania z przyciskami "Zaloguj się kontem iPolsat Box (ICOK)", "Zaloguj się innymi danymi" oraz informacja "Jesteś tu nowy? Załóź konto"
    //     cy.contains('Zaloguj się kontem iPolsat Box (ICOK)').should('be.visible')
    //     cy.contains('Zaloguj się innymi danymi').should('be.visible')
    //     cy.contains('Jesteś tu nowy? Załóż konto').should('be.visible')
    // })


    // it('3. Użytkownik klika "Zaloguj się innymi danymi".', () => {
    //     //User Klika "Zaloguj się innymi danymi"
    //     cy.get(':nth-child(5) > .vteimq-0')
    //         .contains('Zaloguj się innymi danymi')
    //         .click()
    //         .url()
    // })

    // it('4. Wyświetla się karta logowania z polami', () => {
    //     //4. Wyświetla się karta logowania z polami: E-mail/login, Hasło, przyciskami: 'Zaloguj się', 'Nie pamiętasz hasła?', 'Anuluj' oraz Logowanie Facebook, Logowanie Apple ID.
    //     cy.get(':nth-child(2) > .sc-11crcco-7 > .sc-11crcco-2 > .sc-11crcco-6').should('be.visible')
    //     cy.get(':nth-child(3) > .sc-11crcco-7 > .sc-11crcco-2 > .sc-11crcco-6').should('be.visible')
    //     cy.contains('Zaloguj się').should('be.visible')
    //     cy.contains('Nie pamiętasz hasła?').should('be.visible')
    //     cy.contains('Anuluj').should('be.visible')
    //     cy.contains('Logowanie Facebook').should('be.visible')
    //     cy.contains('Logowanie Apple ID').should('be.visible')
    // })


    it('5. Użytkownik klika "Logowanie Facebook".', () => {
        //5. Użytkownik klika 'Logowanie Facebook'.
        cy.get(':nth-child(8) > .vteimq-0')
            .click()
            .url().should('include', 'zaloguj/facebook')
    })

    it('6. Pojawia się okno "Dbamy o Twoją prywatnośc" z przyciskiem "Ok.".', () => {
        //Otwiera stronę WEB PBG
        cy.visit('https://polsatboxgo.pl/uzytkownik/zaloguj/facebook')
    })

    it('7. User klika przyckisk OK', () => {
        //Otwiera stronę WEB PBG
        cy.get('.sc-1hs50hu-0 > .vteimq-0 > .vteimq-1').click()
        // cy.pause()
    })

    it('8/9. Wyświetla się karta "Oglądaj jako", check if logged -> log out', () => {
        // cy.wait(5000)
        cy.get('.sc-61m640-10 > .kmqjwy')
        cy.contains('Tak, przejdź do serwisu').click({ force: true })
        cy.contains('Oglądaj jako').should('be.visible')
        cy.get('.a4jzo-0').should('be.visible')
        cy.contains('Dodaj profil').should('be.visible')
        cy.contains('Zarządzaj profilami').should('be.visible')
        // cy.contains('Tak, przejdź do serwisu').click()
            .then('8. Sprawdza if zalogowany -> wylogowanie', () => {
                cy.get('.a4jzo-0').click()
                cy.wait(2000)
            })

                .then('10. Sprawdza if zalogowany -> wylogowanie', () => {
                    //6. Sprawdza if zalogowany -> wylogowanie
                    cy.get('.r8perb-9')
                        .contains('Konto').should('be.visible')
                        .click()
                    cy.get(':nth-child(6) > .r8perb-7')
                        .contains('Wyloguj się').should('be.visible')
                        .click()
            
        })
    })
})


//     it('2. Użytkownik klika "Logowanie Facebook".', () => {
//         //5. Użytkownik klika 'Logowanie Facebook'.
//         cy.get(':nth-child(8) > .vteimq-0')
//             .click()
//             .url().should('include', 'zaloguj/facebook')
//     })

//     it('3/4. Wyświetla się karta "Oglądaj jako", check if logged -> log out', () => {
//         cy.pause() //!!! !!!
//         cy.get('.sc-61m640-10').should('be.visible')
//         cy.contains('Tak, przejdź do serwisu').click()
//         cy.contains('Oglądaj jako').should('be.visible')
//         cy.get('.a4jzo-0').should('be.visible')
//         cy.contains('Dodaj profil').should('be.visible')
//         cy.contains('Zarządzaj profilami').should('be.visible')
//         // cy.wait(1000)
//         cy.get('.a4jzo-0').click()
//         cy.wait(2000)

//         .then('8. Sprawdza if zalogowany -> wylogowanie', () => {
//             //6. Sprawdza if zalogowany -> wylogowanie
//             cy.get('.r8perb-9')
//                 .contains('Konto').should('be.visible')
//                 .click()
//             cy.get('.r8perb-22 > :nth-child(3) > .r8perb-7')
//                 .contains('Wyloguj się').should('be.visible')
//                 .click()
//         })
//     })
// })

