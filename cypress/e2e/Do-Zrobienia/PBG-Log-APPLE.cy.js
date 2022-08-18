describe('PBG Logowanie kontem FB', () => {

    afterEach(() => {
        cy.wait(100)
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
        cy.wait(100)
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
        cy.visit('https://polsatboxgo.pl/uzytkownik/zaloguj/natywnie?next=https%253A%252F%252Fpolsatboxgo.pl%252Fstart')
    })

    it('Otwiera strone web PBG', () => {
        cy.window().then((win) =>{
            cy.stub(win, 'open', url => {
                win.location.href = 'https://appleid.apple.com/auth/authorize?client_id=pl.polsatboxgo.appleid&redirect_uri=https%3A%2F%2Fpolsatboxgo.pl%2Fuzytkownik%2Fzaloguj%2Fnatywnie&response_type=code%20id_token&scope=name%20email&response_mode=web_message&frame_id=5ce24b1d-ee42-441e-949e-2a8051234e68&m=11&v=1.5.4';
            }).as("popup")
        })
        cy.get(':nth-child(9) > .vteimq-0 > .vteimq-1').click()
        cy.get('@popup')
            .should("be.called")
    })

    


    // it('5. Użytkownik klika "Logowanie Facebook".', () => {
    //     //5. Użytkownik klika 'Logowanie Facebook'.
    //     cy.get(':nth-child(8) > .vteimq-0')
    //         .click()
    //         .url().should('include', 'zaloguj/facebook')
    // })

    // it('5. Użytkownik klika "Logowanie Facebook".', () => {
    //     //5. Użytkownik klika 'Logowanie Facebook'.
    //     it('5. Użytkownik klika "Logowanie Facebook".', () => {
    //         //5. Użytkownik klika 'Logowanie Facebook'.
    //         cy.get(':nth-child(8) > .vteimq-0')
    //             .click()
    //             .url().should('include', 'zaloguj/facebook')
    //     })
    // })

    // it('6/7. Wyświetla się karta "Oglądaj jako", check if logged -> log out', () => {
    //     cy.pause() //!!! !!!
    //     cy.get('.sc-61m640-10').should('be.visible')
    //     cy.contains('Tak, przejdź do serwisu').click()
    //     cy.contains('Oglądaj jako').should('be.visible')
    //     cy.get('.a4jzo-0').should('be.visible')
    //     cy.contains('Dodaj profil').should('be.visible')
    //     cy.contains('Zarządzaj profilami').should('be.visible')
    //     // cy.wait(1000)
    //     cy.get('.a4jzo-0').click()
    //     cy.wait(2000)

    //     .then('8. Sprawdza if zalogowany -> wylogowanie', () => {
    //         //6. Sprawdza if zalogowany -> wylogowanie
    //         cy.get('.r8perb-9')
    //             .contains('Konto').should('be.visible')
    //             .click()
    //         cy.get(':nth-child(6) > .r8perb-7')
    //             .contains('Wyloguj się').should('be.visible')
    //             .click()
    //     })
    // })

    // it('6/7. Pojawia się okno "Dbamy o Twoją prywatnośc" z przyciskiem "Ok."', () => {
    //     //6. Pojawia się okno 'Dbamy o Twoją prywatnośc' z przyciskiem 'Ok.'
    //     //7. Użytkownik potwierdza klikając 'Ok.'.
    //     cy.get('.sc-9uqp44-2')
        // cy.get('.sc-133lttf-0')
        //     cy.contains('a', 'OK').click()
            // .click({ force: true })
    //         .contains('Dbamy o Twoją prywatność')
        // cy.get('.sc-1hs50hu-0 > .vteimq-0')
    //         .contains('OK')
            // .click()
    // })

    // it('6/7. Wyświetla się karta "Oglądaj jako"', () => {
    //     //6. Wyświetla się karta 'Oglądaj jako' z profilem/profilami użytkownika oraz z przyciskiem 'Dodaj profil' i opcja 'Zarzadząj profilami'.
    //     //7. Użytkownik klika na ikonkę istniejącego profilu
    //     cy.contains('Oglądaj jako').should('be.visible')
    //     cy.get('.a4jzo-0').should('be.visible')
    //     cy.contains('Dodaj profil').should('be.visible')
    //     cy.contains('Zarządzaj profilami').should('be.visible')
    //     // cy.wait(1000)
    //     cy.get('.a4jzo-0').click()
    // })


})

