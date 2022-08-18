it('1. Użytkownik klika w zakładkę "Zaloguj się"', () => {
    //Otwiera stronę logowania natywnego WEB PBG
    cy.visit('https://polsatboxgo.pl/uzytkownik/zaloguj?next=https%253A%252F%252Fpolsatboxgo.pl%252Fstart')
})



// cy.get('h2')
// .then((h2) => {
//     if (h2.text().includes('Tak, przejdź do serwisu')) {
//         cy.get('.sc-61m640-10 > .kmqjwy')
//         cy.contains('Tak, przejdź do serwisu').click()
//     } else {
//         cy.wait(300)
//     }
// })