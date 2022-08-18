it('1. Użytkownik klika w zakładkę "Zaloguj się"', () => {
    //Otwiera stronę logowania natywnego WEB PBG
    cy.visit('https://polsatboxgo.pl/uzytkownik/zaloguj?next=https%253A%252F%252Fpolsatboxgo.pl%252Fstart')
})

it('RODO', () => {
    //Potwierdza regulamin po zalogowaniu "Tak, przejdz do serwisu"
    cy.wait(300)
    cy.get('.sc-61m640-10').should('be.visible')
    cy.contains('Tak, przejdź do serwisu').click()
    cy.wait(300)
})

it('2. Wyświetla się karta logowania', () => {
    //2. Wyświetla się karta logowania z przyciskami "Zaloguj się kontem iPolsat Box (ICOK)", "Zaloguj się innymi danymi" oraz informacja "Jesteś tu nowy? Załóź konto"
    cy.contains('Zaloguj się kontem iPolsat Box (ICOK)').should('be.visible')
    cy.contains('Zaloguj się innymi danymi').should('be.visible')
    cy.contains('Jesteś tu nowy? Załóż konto').should('be.visible')
})


it('3. Użytkownik klika "Zaloguj się innymi danymi".', () => {
    //User Klika "Zaloguj się innymi danymi"
    cy.get(':nth-child(5) > .vteimq-0').click()
})

it('RODO', () => {
    //Potwierdza regulamin po zalogowaniu "Tak, przejdz do serwisu"
    cy.wait(300)
    cy.get('.sc-61m640-10').should('be.visible')
    cy.contains('Tak, przejdź do serwisu').click()
    cy.wait(300)
})

it('4. Wyświetla się karta logowania z polami', () => {
    //4. Wyświetla się karta logowania z polami: E-mail/login, Hasło, przyciskami: 'Zaloguj się', 'Nie pamiętasz hasła?', 'Anuluj' oraz Logowanie Facebook, Logowanie Apple ID.
    cy.get(':nth-child(2) > .sc-11crcco-7 > .sc-11crcco-2 > .sc-11crcco-6').should('be.visible')
    cy.get(':nth-child(3) > .sc-11crcco-7 > .sc-11crcco-2 > .sc-11crcco-6').should('be.visible')
    cy.contains('Zaloguj się').should('be.visible')
    cy.contains('Nie pamiętasz hasła?').should('be.visible')
    cy.contains('Anuluj').should('be.visible')
    cy.contains('Logowanie Facebook').should('be.visible')
    cy.contains('Logowanie Apple ID').should('be.visible')

})

it('5. Użytkownik wprowadza poprawne dane i klika "Zaloguj się".', () => {
    //5. Użytkownik wprowadza poprawne dane i klika 'Zaloguj się'.
    cy.wait(1000)
    cy.get(':nth-child(2) > .sc-11crcco-7 > .sc-11crcco-2 > .sc-11crcco-6').click().type('aw.pouk@gmail.com')
    cy.get(':nth-child(3) > .sc-11crcco-7 > .sc-11crcco-2 > .sc-11crcco-6').click().type('qwe123')
    cy.get(':nth-child(4) > .vteimq-0').click()
})

it('6. Wyświetla się karta "Oglądaj jako"', () => {
    //6. Wyświetla się karta 'Oglądaj jako' z profilem/profilami użytkownika oraz z przyciskiem 'Dodaj profil' i opcja 'Zarzadząj profilami'.
    cy.contains('Oglądaj jako').should('be.visible')
    cy.get('[data-testing="profile_0"] > .a4jzo-1 > .a4jzo-0').should('be.visible')
    cy.contains('Dodaj profil').should('be.visible')
    cy.contains('Zarządzaj profilami').should('be.visible')
    cy.wait(1000)
})


it('7. Użytkownik klika na ikonkę istniejącego profilu', () => {
    //7. Użytkownik klika na ikonkę istniejącego profiluu
    cy.get('.a4jzo-0').click()
})