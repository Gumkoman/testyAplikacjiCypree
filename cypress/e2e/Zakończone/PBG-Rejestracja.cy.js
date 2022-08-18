describe('PBG Rejestracja', () => {

    Cypress.Cookies.defaults({
        preserve: '_hjFirstSeen'
    })
    it('1.User klika w zakładkę załóż konto', () => {
        cy.visit('https://polsatboxgo.pl')
            .url()                                                  //wchodzi na stronę główną
        cy.get('.sc-61m640-10')
            .contains('Tak, przejdź do serwisu')
            .click()
            .url()                                                  //akceptuje pierwsze RODO
        cy.get('.r8perb-27 > .vteimq-0')
            .contains('Załóż konto')
            .click()                                                //klika przycisk "Załóż konto"
            .url()
            .should('include', 'zarejestruj')                       //spawrdza czy przeszedł na prawidłową strone
    })

    it('2. Pojawia się strona "Załóż konto" z...', () => {
        //Pojawia się strona 'Załóż konto' z 3 polami: E-mail, Hasło i Powtórz hasło. Poniżej mamy opcję wyrażenia zgody na otrzymywanie informacji handlowych,
        //oświadczenie o zapoznaniu się i akceptacji regulamin, potwierdzenie ukończenia 16 lat, wyrażenie zgody dla celów marketingowych, przetwarzanie adresu e-mail,
        //chcecbox 'Nie jestem robotem' oraz przycisk 'Załóż konto' i opcję 'Zaloguj się'
        cy.get('.sc-133lttf-2')
            .contains('Załóż konto')                                //sprawdza czy pojawia się na stronie "Załóż konto"
        

        cy.get(':nth-child(5) > .sc-1l6fcq3-5')
            .contains("Wyrażam zgodę na otrzymywanie informacji handlowych drogą elektroniczną.")
                cy.get(':nth-child(5) > .sc-1l6fcq3-5 > .grqxuu-0 > .grqxuu-1')
                    .should('have.css', 'background-color')
                    .and('eq', 'rgb(118, 126, 130)')
                cy.get(':nth-child(5) > .sc-1l6fcq3-5 > .grqxuu-0 > .grqxuu-1') 
                    .click()
                    .should('have.css', 'background-color')
                    .and('eq', 'rgb(105, 82, 3)')                   //spawdza pole ze zgodą na otrzymywanie informacji handlowych oraz funkcjonalnopść przycisku zmiany zgody przed i po

        cy.get(':nth-child(6) > .sc-1l6fcq3-5')
            .contains("Oświadczam, że zapoznałem się i akceptuję postanowienia Regulaminu Polsat Box Go.Regulamin Polsat Box Go")
                cy.get(':nth-child(6) > .sc-1l6fcq3-5 > .grqxuu-0 > .grqxuu-1')
                    .should('have.css', 'background-color')
                    .and('eq', 'rgb(118, 126, 130)')
                cy.get(':nth-child(6) > .sc-1l6fcq3-5 > .grqxuu-0 > .grqxuu-1') 
                    .click()
                    .should('have.css', 'background-color')
                    .and('eq', 'rgb(105, 82, 3)')                   //spawdza pole oświadczenie o zapoznaniu się i akceptacji regulamin oraz funkcjonalnopść przycisku zmiany zgody przed i po  

        cy.get(':nth-child(7) > .sc-1l6fcq3-5')
            .contains("Potwierdzam, że mam ukończone 16 lat.")
                cy.get(':nth-child(7) > .sc-1l6fcq3-5 > .grqxuu-0 > .grqxuu-1')
                    .should('have.css', 'background-color')
                    .and('eq', 'rgb(118, 126, 130)')
                cy.get(':nth-child(7) > .sc-1l6fcq3-5 > .grqxuu-0 > .grqxuu-1') 
                    .click()
                    .should('have.css', 'background-color')
                    .and('eq', 'rgb(105, 82, 3)')                   //spawdza pole z Potwierdzeniem, że ma ukończone 16 lat oraz funkcjonalnopść przycisku zmiany zgody przed i po

        cy.get(':nth-child(8) > .sc-1l6fcq3-5')
            .contains("Wyrażam zgodę na używanie telekomunikacyjnych urządzeń końcowych i automatycznych systemów wywołujących dla celów marketingu bezpośredniego")
                cy.get(':nth-child(8) > .sc-1l6fcq3-5 > .grqxuu-0 > .grqxuu-1')
                    .should('have.css', 'background-color')
                    .and('eq', 'rgb(118, 126, 130)')
                cy.get(':nth-child(8) > .sc-1l6fcq3-5 > .grqxuu-0 > .grqxuu-1') 
                    .click()
                    .should('have.css', 'background-color')
                    .and('eq', 'rgb(105, 82, 3)')                   //spawdza pole z zgodą na używanie telekomunikacyjnych urządzeń końcowych oraz funkcjonalnopść przycisku zmiany zgody przed i po

        cy.get(':nth-child(9) > .sc-1l6fcq3-5')
            .contains("Wyrażam zgodę na przetwarzanie danych w celach marketingowych podmiotów Grupy Kapitałowej Polsat Plus")
                cy.get(':nth-child(9) > .sc-1l6fcq3-5 > .grqxuu-0 > .grqxuu-1')
                    .should('have.css', 'background-color')
                    .and('eq', 'rgb(118, 126, 130)')
                cy.get(':nth-child(9) > .sc-1l6fcq3-5 > .grqxuu-0 > .grqxuu-1') 
                    .click()
                    .should('have.css', 'background-color')
                    .and('eq', 'rgb(105, 82, 3)')                   //spawdza pole z przetwarzanie danych w celach marketingowych oraz funkcjonalnopść przycisku zmiany zgody przed i po
    })

    it('3. Użytkownik uzupełnia wszystkie potrzebne dane...', () => {
        //3. Użytkownik uzupełnia wszystkie potrzebne dane i zaznacza chcecbox 'Nie jestem robotem' a następnie klika 'Załóż konto'.
        cy.get('input[placeholder="E-mail"]').type("autotestycp+16@gmail.com")            //wpisuje "E-mail"
        cy.get('input[placeholder="Hasło"]').type("qwe123")                            //wpisuje "Hasło"
        cy.get('input[placeholder="Powtórz hasło"]').type("qwe123")                    //wpisuje "Powtórz hasło"
    })

    it('Wypełnij reCAPTCHA', () => {
        cy.pause() //!!! SAMEMU TRZEBA ZATWIERDZIC reCAPTACHA !!!
    })


    it('zaloguj', () => {
        cy.get('.sc-1l6fcq3-4 > .vteimq-0')
            .contains('Załóż konto')
            .click()
            .url()
            .should('include', 'sprawdz-email')
    })

    it('4. Pojawia się karta "Sprawdź pocztę...', () => {
        //4. Pojawia się karta "Sprawdź pocztę Na adres podany przez Ciebie wysłaliśmy wiadomość. Postępuj zgodnie ze wskazówkami podanymi w wiadomości."
        //Poniżej znajduje się przycisk 'OK' oraz informacja 'Nie możesz znaleźć wiadomości? Dostarczenie Twojej wiadomości może chwilę potrwać. Poczekaj chwilę oraz sprawdź spam."
        // cy.get('.sc-61m640-10')
        //     .contains('Tak, przejdź do serwisu')
        //     .click()
        //     .url()
        //     .should('include', 'sprawdz-email')                         //akceptuje regulamin

        cy.get('.sc-9uqp44-2')
            .contains('Sprawdź pocztę')
        cy.get('.jHZA-da > .sc-9uqp44-4')
            .contains('Na adres podany przez Ciebie wysłaliśmy wiadomość. Postępuj zgodnie ze wskazówkami podanymi w wiadomości')
        cy.get('.sc-1k1mmbx-0 > .sc-9uqp44-0 > :nth-child(1)')
            .contains('Nie możesz znaleźć wiadomości?')
        cy.get('.sc-1k1mmbx-0 > .sc-9uqp44-0 > :nth-child(2)')
            .contains('Dostarczenie Twojej wiadomości może chwilę potrwać. Poczekaj chwilę oraz sprawdź spam.')                     //spawdza wypisane dane na stronie

        cy.get('.vteimq-0')
            .contains('OK')
            .click()
            .url()
            .should('include', '/uzytkownik/zaloguj')
    })

})